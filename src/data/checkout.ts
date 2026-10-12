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
  "Under ₹10,000",
  "₹10,000 – ₹15,000",
  "₹15,000 – ₹20,000",
  "₹20,000 – ₹25,000",
  "Custom Scope (< ₹25,000)",
];

export const defaultServicePrices: Record<string, number> = {
  "software-development": 24500,
  "web-applications":     18500,
  "mobile-apps":          21000,
  "cloud-solutions":      22500,
  "ai-automation":        24000,
  "cybersecurity":        19500,
  "it-consulting":        14500,
  "it-infrastructure":    16500,
  "system-integration":   17500,
  "product-engineering":  24800,
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
