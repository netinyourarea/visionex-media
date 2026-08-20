import React, { useState } from "react";
import {
  CreditCard,
  Building2,
  ShieldCheck,
  Lock,
  Tag,
  Trash2,
  ArrowRight,
  QrCode,
  Landmark,
  Building,
  Info,
  CheckCircle2,
  ShoppingBag,
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Bot,
  Shield,
  Lightbulb,
  Network,
  Puzzle,
  Package,
  PenLine,
  ChevronDown,
  ChevronUp,
  IndianRupee,
} from "lucide-react";
import { useCheckout } from "@/context/CheckoutContext";
import { budgetRangesINR, formatINR, PaymentMethod } from "@/data/checkout";
import { services } from "@/data/site";
import { cn } from "@/lib/utils";

// Map service slug → lucide icon
const serviceIcons: Record<string, React.ReactNode> = {
  "software-development": <Code2 className="size-5" />,
  "web-applications":     <Globe className="size-5" />,
  "mobile-apps":          <Smartphone className="size-5" />,
  "cloud-solutions":      <Cloud className="size-5" />,
  "ai-automation":        <Bot className="size-5" />,
  "cybersecurity":        <Shield className="size-5" />,
  "it-consulting":        <Lightbulb className="size-5" />,
  "it-infrastructure":    <Network className="size-5" />,
  "system-integration":   <Puzzle className="size-5" />,
  "product-engineering":  <Package className="size-5" />,
};

interface BillingFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  address?: string;
  city?: string;
  postalCode?: string;
}

const CUSTOM_ID = "__custom__";

export function CheckoutForm() {
  const {
    items,
    removeItem,
    toggleServiceBySlug,
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
    processCheckout,
  } = useCheckout();

  const [inputCode, setInputCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Custom request expansion
  const [customOpen, setCustomOpen] = useState(false);
  const [customDesc, setCustomDesc] = useState("");
  const [customBudget, setCustomBudget] = useState(budgetRangesINR[0]);

  const hasCustomRequest = customOpen && customDesc.trim().length > 0;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    taxId: "",
    address: "",
    city: "",
    country: "India",
    postalCode: "",
    notes: "",
    cardNumber: "",
    cardExp: "",
    cardCvc: "",
    upiId: "",
  });
  const [errors, setErrors] = useState<BillingFormErrors>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof BillingFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: BillingFormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim() || !formData.email.includes("@"))
      newErrors.email = "Valid email address is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.address.trim()) newErrors.address = "Billing address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.postalCode.trim()) newErrors.postalCode = "Postal code is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePromoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCode.trim()) {
      applyPromoCode(inputCode);
      setInputCode("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    await processCheckout({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.companyName,
      taxId: formData.taxId,
      address: formData.address,
      city: formData.city,
      country: formData.country,
      postalCode: formData.postalCode,
      notes: formData.notes,
      customRequest: hasCustomRequest ? customDesc : undefined,
      customBudget: hasCustomRequest ? customBudget : undefined,
    });
    setIsSubmitting(false);
  };

  const canSubmit = (items.length > 0 || hasCustomRequest) && !isSubmitting;

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
      {/* ══ LEFT COLUMN ══════════════════════════════════════ */}
      <div className="space-y-10 lg:col-span-7">

        {/* ── 1. Service Selector ──────────────────────────── */}
        <div className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-md md:p-8">
          <div className="flex items-center gap-3 border-b border-border/60 pb-4">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ShoppingBag className="size-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                1. Select Services to Book
              </h3>
              <p className="text-xs text-muted-foreground">
                Choose one or more services. Pricing shown is indicative (excl. GST).
              </p>
            </div>
          </div>

          {/* Service cards grid */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {services.map((svc) => {
              const selected = isServiceSelected(svc.slug);
              return (
                <button
                  key={svc.slug}
                  type="button"
                  onClick={() => toggleServiceBySlug(svc.slug)}
                  className={cn(
                    "group relative flex items-start gap-3 rounded-lg border p-4 text-left transition-all duration-200",
                    selected
                      ? "border-primary bg-primary/10 shadow-sm shadow-primary/10"
                      : "border-border/70 bg-background/50 hover:border-primary/40 hover:bg-surface"
                  )}
                >
                  <div
                    className={cn(
                      "mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                      selected
                        ? "bg-primary/20 text-primary"
                        : "bg-surface text-muted-foreground group-hover:text-primary"
                    )}
                  >
                    {serviceIcons[svc.slug]}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div
                      className={cn(
                        "font-display text-sm font-semibold leading-tight transition-colors",
                        selected ? "text-primary" : "text-foreground group-hover:text-primary"
                      )}
                    >
                      {svc.title}
                    </div>
                    <div className="mt-1 font-mono text-[10px] text-muted-foreground">
                      From {formatINR(0)}&nbsp;—&nbsp;contact for quote
                    </div>
                  </div>

                  {selected && (
                    <CheckCircle2 className="absolute top-3 right-3 size-4 text-primary" />
                  )}
                </button>
              );
            })}
          </div>

          {/* ── Custom Service Request ───────────────────────── */}
          <div className="mt-4 overflow-hidden rounded-lg border border-dashed border-primary/40 transition-all">
            <button
              type="button"
              onClick={() => setCustomOpen((v) => !v)}
              className="flex w-full items-center gap-3 p-4 text-left hover:bg-primary/5 transition-colors"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <PenLine className="size-4" />
              </div>
              <div className="flex-1">
                <div className="font-display text-sm font-semibold text-primary">
                  Custom Service Request
                </div>
                <div className="font-mono text-[10px] text-muted-foreground">
                  Have a unique or combined requirement? Describe it here.
                </div>
              </div>
              <div className="text-primary">
                {customOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
              </div>
            </button>

            {customOpen && (
              <div className="border-t border-dashed border-primary/30 bg-primary/5 p-5 space-y-4">
                <div>
                  <label className="mb-1.5 block font-mono text-xs font-semibold text-foreground">
                    Describe your requirement
                  </label>
                  <textarea
                    rows={4}
                    value={customDesc}
                    onChange={(e) => setCustomDesc(e.target.value)}
                    placeholder="e.g. We need a full-stack SaaS platform with real-time dashboards, mobile app, cloud deployment on AWS, and ongoing security audits..."
                    className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <p className="mt-1 font-mono text-[10px] text-muted-foreground">
                    Our team will prepare a detailed proposal within 24 hours.
                  </p>
                </div>

                <div>
                  <label className="mb-1.5 block font-mono text-xs font-semibold text-foreground">
                    Estimated Budget Range
                  </label>
                  <select
                    value={customBudget}
                    onChange={(e) => setCustomBudget(e.target.value)}
                    className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                  >
                    {budgetRangesINR.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-start gap-2 rounded-md border border-primary/20 bg-primary/5 p-3 text-xs text-muted-foreground">
                  <Info className="mt-0.5 size-3.5 shrink-0 text-primary" />
                  <span>
                    Custom requests do not have a fixed price. After booking, a Visionex engineering lead will contact you with a detailed scope and quote within 24 hours.
                  </span>
                </div>
              </div>
            )}
          </div>

          {(items.length === 0 && !hasCustomRequest) && (
            <p className="mt-3 text-center font-mono text-xs text-muted-foreground">
              ↑ Select a service or submit a custom request to continue
            </p>
          )}
        </div>

        {/* ── 2. Billing Information ───────────────────────── */}
        <form onSubmit={handleSubmit} id="checkout-form" className="space-y-8">
          <div className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-md md:p-8">
            <div className="flex items-center gap-3 border-b border-border/60 pb-4">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Building2 className="size-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  2. Company & Billing Details
                </h3>
                <p className="text-xs text-muted-foreground">
                  For project contract, tax invoice and GST compliance.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1.5 block font-mono text-xs font-semibold text-foreground">
                  Full Name / Primary Contact <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Ravi Sharma"
                  className={cn(
                    "w-full rounded-md border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
                    errors.fullName ? "border-destructive" : "border-border"
                  )}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-destructive">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs font-semibold text-foreground">
                  Work Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="ravi@company.in"
                  className={cn(
                    "w-full rounded-md border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
                    errors.email ? "border-destructive" : "border-border"
                  )}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs font-semibold text-foreground">
                  Phone Number <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98349 49813"
                  className={cn(
                    "w-full rounded-md border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
                    errors.phone ? "border-destructive" : "border-border"
                  )}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs font-semibold text-foreground">
                  Company Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Acme Solutions Pvt. Ltd."
                  className={cn(
                    "w-full rounded-md border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
                    errors.companyName ? "border-destructive" : "border-border"
                  )}
                />
                {errors.companyName && (
                  <p className="mt-1 text-xs text-destructive">{errors.companyName}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs font-semibold text-foreground">
                  GST Number{" "}
                  <span className="font-normal text-muted-foreground">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="taxId"
                  value={formData.taxId}
                  onChange={handleInputChange}
                  placeholder="27AAACV1234F1Z9"
                  className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block font-mono text-xs font-semibold text-foreground">
                  Street Address <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Office 1205, Ambience Court, Sector 19D"
                  className={cn(
                    "w-full rounded-md border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
                    errors.address ? "border-destructive" : "border-border"
                  )}
                />
                {errors.address && (
                  <p className="mt-1 text-xs text-destructive">{errors.address}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs font-semibold text-foreground">
                  City <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Navi Mumbai"
                  className={cn(
                    "w-full rounded-md border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
                    errors.city ? "border-destructive" : "border-border"
                  )}
                />
                {errors.city && (
                  <p className="mt-1 text-xs text-destructive">{errors.city}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs font-semibold text-foreground">
                  PIN Code <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  placeholder="400705"
                  className={cn(
                    "w-full rounded-md border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
                    errors.postalCode ? "border-destructive" : "border-border"
                  )}
                />
                {errors.postalCode && (
                  <p className="mt-1 text-xs text-destructive">{errors.postalCode}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block font-mono text-xs font-semibold text-foreground">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Timeline, preferred tech stack, or other requirements..."
                  className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* ── 3. Payment Method ─────────────────────────────── */}
          <div className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-md md:p-8">
            <div className="flex items-center gap-3 border-b border-border/60 pb-4">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <IndianRupee className="size-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  3. Payment Method
                </h3>
                <p className="text-xs text-muted-foreground">
                  All amounts in Indian Rupees (₹). Encrypted 256-bit SSL.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {(
                [
                  { id: "card",       label: "Credit / Debit", icon: CreditCard },
                  { id: "upi",        label: "UPI / QR",       icon: QrCode },
                  { id: "netbanking", label: "NetBanking",     icon: Landmark },
                  { id: "wire",       label: "NEFT / Invoice", icon: Building },
                ] as const
              ).map((method) => {
                const Icon = method.icon;
                const active = paymentMethod === method.id;
                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id as PaymentMethod)}
                    className={cn(
                      "flex flex-col items-center justify-center rounded-lg border p-3.5 text-center transition-all",
                      active
                        ? "border-primary bg-primary/10 text-primary shadow-sm"
                        : "border-border bg-background/40 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                    )}
                  >
                    <Icon className="mb-1.5 size-5" />
                    <span className="font-mono text-xs font-semibold">{method.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-lg border border-border/80 bg-background/50 p-5">
              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="4532 •••• •••• 8892"
                        className="w-full rounded-md border border-border bg-background px-3.5 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      />
                      <CreditCard className="absolute right-3 top-2.5 size-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1 block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        Expiry
                      </label>
                      <input
                        type="text"
                        name="cardExp"
                        value={formData.cardExp}
                        onChange={handleInputChange}
                        placeholder="MM / YY"
                        className="w-full rounded-md border border-border bg-background px-3.5 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        CVV
                      </label>
                      <input
                        type="password"
                        name="cardCvc"
                        maxLength={4}
                        value={formData.cardCvc}
                        onChange={handleInputChange}
                        placeholder="•••"
                        className="w-full rounded-md border border-border bg-background px-3.5 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "upi" && (
                <div className="space-y-4 text-center">
                  <div className="inline-flex size-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <QrCode className="size-8" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-foreground">
                    GPay / PhonePe / Paytm / BHIM UPI
                  </h4>
                  <p className="mx-auto max-w-sm text-xs text-muted-foreground">
                    Enter your UPI VPA below or scan the QR code displayed after booking.
                  </p>
                  <input
                    type="text"
                    name="upiId"
                    value={formData.upiId}
                    onChange={handleInputChange}
                    placeholder="yourname@okaxis / @ybl / @paytm"
                    className="w-full rounded-md border border-border bg-background px-3.5 py-2 text-center font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
              )}

              {paymentMethod === "netbanking" && (
                <div className="space-y-3">
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    Select Bank
                  </label>
                  <select className="w-full rounded-md border border-border bg-background px-3.5 py-2 text-sm text-foreground focus:border-primary focus:outline-none">
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>State Bank of India (SBI)</option>
                    <option>Axis Bank</option>
                    <option>Kotak Mahindra Bank</option>
                    <option>Bank of Baroda</option>
                    <option>Punjab National Bank</option>
                    <option>Other</option>
                  </select>
                </div>
              )}

              {paymentMethod === "wire" && (
                <div className="flex items-start gap-2.5 rounded border border-primary/20 bg-primary/5 p-3 text-foreground">
                  <Info className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <strong className="block font-display text-sm text-primary">
                      NEFT / RTGS / Corporate Invoice
                    </strong>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      A GST-compliant tax invoice with our bank account details (IFSC, account number) will be generated immediately after booking for your accounts team.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* ══ RIGHT COLUMN — Booking Summary ═══════════════════ */}
      <div className="space-y-6 lg:col-span-5 lg:sticky lg:top-24">
        <div className="rounded-xl border border-border bg-card/80 p-6 shadow-xl backdrop-blur-md md:p-8">
          <div className="flex items-center justify-between border-b border-border/60 pb-4">
            <h3 className="font-display text-lg font-bold text-foreground">Booking Summary</h3>
            <span className="rounded bg-primary/10 px-2.5 py-1 font-mono text-xs font-medium text-primary">
              {items.length + (hasCustomRequest ? 1 : 0)}{" "}
              {items.length + (hasCustomRequest ? 1 : 0) === 1 ? "Item" : "Items"}
            </span>
          </div>

          {/* Selected services */}
          <div className="mt-6 max-h-72 space-y-3 overflow-y-auto pr-1">
            {items.length === 0 && !hasCustomRequest ? (
              <div className="py-8 text-center text-sm text-muted-foreground">
                No services selected yet.
                <br />
                <span className="font-mono text-xs">Pick from the list on the left.</span>
              </div>
            ) : (
              <>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 rounded-lg border border-border/60 bg-background/50 p-3.5"
                  >
                    <div className="min-w-0 flex-1">
                      <h4 className="truncate font-display text-sm font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="truncate font-mono text-[11px] text-muted-foreground">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-sm font-bold text-foreground">
                        {formatINR(item.price)}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="mt-1 inline-flex items-center gap-1 font-mono text-[10px] text-destructive hover:underline"
                      >
                        <Trash2 className="size-3" /> Remove
                      </button>
                    </div>
                  </div>
                ))}

                {/* Custom request line item */}
                {hasCustomRequest && (
                  <div className="flex items-center justify-between gap-4 rounded-lg border border-dashed border-primary/40 bg-primary/5 p-3.5">
                    <div className="min-w-0 flex-1">
                      <h4 className="truncate font-display text-sm font-semibold text-primary">
                        Custom Service Request
                      </h4>
                      <p className="truncate font-mono text-[11px] text-muted-foreground">
                        Budget: {customBudget}
                      </p>
                    </div>
                    <div className="rounded bg-primary/15 px-2 py-1 font-mono text-[11px] font-semibold text-primary">
                      Quote on Enquiry
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Promo Code */}
          <div className="mt-6 border-t border-border/60 pt-5">
            <label className="mb-1.5 block font-mono text-xs font-semibold text-foreground">
              Promo / Coupon Code
            </label>
            {appliedPromo ? (
              <div className="flex items-center justify-between rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-2 font-mono text-xs text-emerald-400">
                <span className="flex items-center gap-1.5 font-bold">
                  <Tag className="size-3.5" /> {appliedPromo.code} ({appliedPromo.discountPercent}% OFF)
                </span>
                <button
                  type="button"
                  onClick={removePromoCode}
                  className="text-xs font-semibold underline hover:text-emerald-300"
                >
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handlePromoSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  placeholder="Try 'VISIONEX10'"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-md border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Apply
                </button>
              </form>
            )}
          </div>

          {/* Pricing breakdown */}
          <div className="mt-6 space-y-2.5 border-t border-border/60 pt-5 font-mono text-xs">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal (excl. GST)</span>
              <span className="text-foreground">{formatINR(subtotal)}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between font-medium text-emerald-400">
                <span>Discount ({appliedPromo?.discountPercent}%)</span>
                <span>−{formatINR(discountAmount)}</span>
              </div>
            )}
            <div className="flex justify-between text-muted-foreground">
              <span>GST (18%)</span>
              <span className="text-foreground">{formatINR(taxAmount)}</span>
            </div>
            {hasCustomRequest && items.length === 0 && (
              <div className="flex justify-between italic text-muted-foreground">
                <span>Custom Request</span>
                <span>Quote on Enquiry</span>
              </div>
            )}
            <div className="flex justify-between border-t border-border/60 pt-3 font-display text-base font-bold text-foreground">
              <span>Total Payable</span>
              <span className="text-xl text-primary">
                {subtotal > 0 ? formatINR(total) : hasCustomRequest ? "On Quote" : "₹0"}
              </span>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            form="checkout-form"
            disabled={!canSubmit}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 font-display text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2 font-mono text-xs">
                <span className="size-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                Processing...
              </span>
            ) : (
              <>
                Confirm Booking
                {subtotal > 0 && ` (${formatINR(total)})`}
                <ArrowRight className="size-4" />
              </>
            )}
          </button>

          <div className="mt-5 flex items-center justify-center gap-6 border-t border-border/40 pt-4 font-mono text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Lock className="size-3.5 text-emerald-400" /> SSL Encrypted
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-primary" /> Full IP Ownership
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
