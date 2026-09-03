/**
 * Checkout data models, service package pricing, and discount codes.
 */

/** Currency used across the checkout — Indian Rupee */
export const CURRENCY = "₹";

/** Format a number as Indian Rupees with Indian grouping (e.g. ₹3,50,000) */
export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export type ServicePackage = {
  id: string;
  name: string;
  badge?: string;
  price: number; // In INR
  billingCycle: "one-time" | "monthly" | "sprint";
  description: string;
  features: string[];
  popular?: boolean;
};

export const budgetRangesINR = [
  "Under ₹15,000",
  "₹15,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹1,70,000",
  "Not yet defined",
];

export const defaultServicePrices: Record<string, number> = {
  "software-development": 170000,
  "web-applications":     120000,
  "mobile-apps":          130000,
  "cloud-solutions":      150000,
  "ai-automation":        160000,
  "cybersecurity":        140000,
  "it-consulting":        12000,
  "it-infrastructure":    15000,
  "system-integration":   100000,
  "product-engineering":  170000,
};

export type PromoCode = {
  code: string;
  discountPercent: number;
  description: string;
};

export const validPromoCodes: Record<string, PromoCode> = {
  VISIONEX10: {
    code: "VISIONEX10",
    discountPercent: 10,
    description: "10% Welcome Discount for Digital Engineering Services",
  },
  LAUNCH2026: {
    code: "LAUNCH2026",
    discountPercent: 15,
    description: "15% Special Launch Offer for Early Bookings",
  },
  VIP20: {
    code: "VIP20",
    discountPercent: 20,
    description: "20% Enterprise Partner Discount",
  },
};

export type PaymentMethod = "card" | "upi" | "netbanking" | "wire";

export type BillingDetails = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  taxId?: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  notes?: string;
  /** Custom service request description (if client has a custom requirement) */
  customRequest?: string;
  /** Budget range selected for custom request */
  customBudget?: string;
};
