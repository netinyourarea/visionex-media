import React, { createContext, useContext, useState } from "react";
import { toast } from "sonner";
import {
  BillingDetails,
  PaymentMethod,
  validPromoCodes,
  PromoCode,
  defaultServicePrices,
} from "@/data/checkout";
import { services } from "@/data/site";

export type CartItem = {
  id: string; // service slug
  title: string;
  subtitle: string;
  price: number;
  type: "service";
  quantity: number;
};

interface CheckoutContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  toggleServiceBySlug: (serviceSlug: string) => void;
  selectServiceBySlug: (serviceSlug: string) => void;
  selectServices: (serviceSlugs: string[]) => void;
  isServiceSelected: (serviceSlug: string) => boolean;

  promoCode: string;
  appliedPromo: PromoCode | null;
  applyPromoCode: (code: string) => boolean;
  removePromoCode: () => void;

  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;

  subtotal: number;
  discountAmount: number;
  taxAmount: number;
  total: number;

  isCompleted: boolean;
  orderNumber: string | null;
  completedOrder: {
    orderNumber: string;
    items: CartItem[];
    billing: BillingDetails;
    paymentMethod: PaymentMethod;
    subtotal: number;
    discountAmount: number;
    taxAmount: number;
    total: number;
    date: string;
  } | null;

  processCheckout: (billing: BillingDetails) => Promise<boolean>;
  resetCheckout: () => void;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

const TAX_RATE = 0.18; // 18% GST / Sales Tax

export const CheckoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const [promoCode, setPromoCode] = useState<string>("");
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  const [completedOrder, setCompletedOrder] = useState<CheckoutContextType["completedOrder"]>(null);

  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === newItem.id);
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, newItem];
    });
    toast.success(`Added "${newItem.title}" to booking`);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  /** Safely select a single service (prevents duplicates) */
  const selectServiceBySlug = (serviceSlug: string) => {
    const svc = services.find((s) => s.slug === serviceSlug);
    if (!svc) return;

    setItems((prev) => {
      if (prev.some((i) => i.id === serviceSlug)) return prev;
      const price = defaultServicePrices[svc.slug] || 4000;
      return [
        ...prev,
        {
          id: svc.slug,
          title: svc.title,
          subtitle: svc.short,
          price,
          type: "service",
          quantity: 1,
        },
      ];
    });
  };

  /** Safely select multiple services at once (e.g. for a Solution track) */
  const selectServices = (serviceSlugs: string[]) => {
    setItems((prev) => {
      const updated = [...prev];
      let addedCount = 0;
      serviceSlugs.forEach((slug) => {
        if (!updated.some((i) => i.id === slug)) {
          const svc = services.find((s) => s.slug === slug);
          if (svc) {
            const price = defaultServicePrices[svc.slug] || 4000;
            updated.push({
              id: svc.slug,
              title: svc.title,
              subtitle: svc.short,
              price,
              type: "service",
              quantity: 1,
            });
            addedCount++;
          }
        }
      });
      if (addedCount > 0) {
        toast.success(`Selected ${addedCount} service(s) for booking`);
      }
      return updated;
    });
  };

  /** Toggle a service on/off in the cart */
  const toggleServiceBySlug = (serviceSlug: string) => {
    const svc = services.find((s) => s.slug === serviceSlug);
    if (!svc) return;

    setItems((prev) => {
      const alreadySelected = prev.some((i) => i.id === serviceSlug);
      if (alreadySelected) {
        toast.info(`Removed "${svc.title}" from booking`);
        return prev.filter((i) => i.id !== serviceSlug);
      } else {
        toast.success(`Added "${svc.title}" to booking`);
        const price = defaultServicePrices[svc.slug] || 4000;
        return [
          ...prev,
          {
            id: svc.slug,
            title: svc.title,
            subtitle: svc.short,
            price,
            type: "service",
            quantity: 1,
          },
        ];
      }
    });
  };

  const isServiceSelected = (serviceSlug: string) =>
    items.some((i) => i.id === serviceSlug);

  const applyPromoCode = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    const found = validPromoCodes[clean];
    if (found) {
      setAppliedPromo(found);
      setPromoCode(clean);
      toast.success(`Promo code applied: ${found.discountPercent}% OFF`);
      return true;
    } else {
      toast.error("Invalid code. Try 'VISIONEX10' or 'LAUNCH2026'");
      return false;
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setPromoCode("");
    toast.info("Promo code removed");
  };

  // Calculations
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = appliedPromo
    ? Math.round((subtotal * appliedPromo.discountPercent) / 100)
    : 0;
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const taxAmount = Math.round(taxableAmount * TAX_RATE);
  const total = taxableAmount + taxAmount;

  const processCheckout = async (billing: BillingDetails): Promise<boolean> => {
    if (items.length === 0) {
      toast.error("Please select at least one service to book.");
      return false;
    }

    const newOrderNum = `VEX-${Math.floor(100000 + Math.random() * 900000)}`;

    setCompletedOrder({
      orderNumber: newOrderNum,
      items: [...items],
      billing,
      paymentMethod,
      subtotal,
      discountAmount,
      taxAmount,
      total,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
    setOrderNumber(newOrderNum);
    setIsCompleted(true);
    toast.success(`Booking #${newOrderNum} confirmed!`);
    return true;
  };

  const resetCheckout = () => {
    setIsCompleted(false);
    setOrderNumber(null);
    setCompletedOrder(null);
    setItems([]);
  };

  return (
    <CheckoutContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        toggleServiceBySlug,
        selectServiceBySlug,
        selectServices,
        isServiceSelected,
        promoCode,
        appliedPromo,
        applyPromoCode,
        removePromoCode,
        paymentMethod,
        setPaymentMethod,
        subtotal,
        discountAmount,
        taxAmount,
        total,
        isCompleted,
        orderNumber,
        completedOrder,
        processCheckout,
        resetCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
};
