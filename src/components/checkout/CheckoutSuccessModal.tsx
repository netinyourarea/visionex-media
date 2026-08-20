import React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  Printer,
  Building2,
  ArrowRight,
  ShieldCheck,
  X,
} from "lucide-react";
import { useCheckout } from "@/context/CheckoutContext";
import { company } from "@/data/site";
import { formatINR } from "@/data/checkout";

export function CheckoutSuccessModal() {
  const { isCompleted, completedOrder, resetCheckout } = useCheckout();

  if (!isCompleted || !completedOrder) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-2xl rounded-2xl border border-border bg-background shadow-2xl overflow-hidden my-8"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent p-6 sm:p-8 border-b border-border/80 relative">
            <button
              onClick={resetCheckout}
              className="absolute top-4 right-4 rounded-full p-2 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>
            <div className="flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 ring-8 ring-emerald-500/10">
                <CheckCircle2 className="size-8" />
              </div>
              <div>
                <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                  Booking Confirmed & Verified
                </span>
                <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Order #{completedOrder.orderNumber}
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Confirmation email dispatched to <strong className="text-foreground">{completedOrder.billing.email}</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Printable Tax Invoice Content */}
          <div id="printable-receipt" className="p-6 sm:p-8 space-y-6">
            {/* Business & Client Metadata Header */}
            <div className="grid grid-cols-2 gap-6 border-b border-border/60 pb-6 text-xs">
              <div>
                <span className="font-mono text-[10px] font-bold text-muted-foreground uppercase">
                  Issued By
                </span>
                <div className="mt-1.5 font-display text-sm font-bold text-foreground">
                  {company.fullLegal}
                </div>
                <p className="text-muted-foreground mt-0.5">{company.address}</p>
                <p className="text-muted-foreground font-mono mt-0.5">{company.email}</p>
              </div>
              <div className="text-right">
                <span className="font-mono text-[10px] font-bold text-muted-foreground uppercase">
                  Billed To
                </span>
                <div className="mt-1.5 font-display text-sm font-bold text-foreground">
                  {completedOrder.billing.companyName}
                </div>
                <p className="text-muted-foreground mt-0.5">
                  Attn: {completedOrder.billing.fullName}
                </p>
                <p className="text-muted-foreground mt-0.5">{completedOrder.billing.address}, {completedOrder.billing.city}</p>
                {completedOrder.billing.taxId && (
                  <p className="font-mono text-[11px] text-primary mt-1">
                    Tax / GST: {completedOrder.billing.taxId}
                  </p>
                )}
              </div>
            </div>

            {/* Line Items Table */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Selected Engineering Deliverables
              </h4>
              <div className="rounded-lg border border-border/60 overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-surface font-mono text-[11px] text-muted-foreground border-b border-border/60">
                    <tr>
                      <th className="py-2.5 px-4">Item Description</th>
                      <th className="py-2.5 px-4 text-center">Qty</th>
                      <th className="py-2.5 px-4 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-mono">
                    {completedOrder.items.map((item) => (
                      <tr key={item.id}>
                        <td className="py-3 px-4">
                          <span className="font-display font-semibold text-foreground text-sm block">
                            {item.title}
                          </span>
                          <span className="text-[11px] text-muted-foreground">{item.subtitle}</span>
                        </td>
                        <td className="py-3 px-4 text-center text-foreground">{item.quantity}</td>
                        <td className="py-3 px-4 text-right font-bold text-foreground">
                          {formatINR(item.price * item.quantity)}
                        </td>
                      </tr>
                    ))}
                    {completedOrder.billing.customRequest && (
                      <tr>
                        <td className="py-3 px-4">
                          <span className="font-display font-semibold text-primary text-sm block">
                            Custom Service Request
                          </span>
                          <span className="text-[11px] text-muted-foreground">
                            Budget: {completedOrder.billing.customBudget}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center text-foreground">1</td>
                        <td className="py-3 px-4 text-right font-semibold text-primary">Quote on Enquiry</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Financial Totals */}
            <div className="flex flex-col items-end gap-1.5 border-t border-border/60 pt-4 font-mono text-xs">
              <div className="flex w-full max-w-xs justify-between text-muted-foreground">
                <span>Subtotal (excl. GST):</span>
                <span className="text-foreground">{formatINR(completedOrder.subtotal)}</span>
              </div>
              {completedOrder.discountAmount > 0 && (
                <div className="flex w-full max-w-xs justify-between text-emerald-400 font-medium">
                  <span>Discount Applied:</span>
                  <span>−{formatINR(completedOrder.discountAmount)}</span>
                </div>
              )}
              <div className="flex w-full max-w-xs justify-between text-muted-foreground">
                <span>GST (18%):</span>
                <span className="text-foreground">{formatINR(completedOrder.taxAmount)}</span>
              </div>
              <div className="flex w-full max-w-xs justify-between border-t border-border/60 pt-2 font-display text-base font-bold text-foreground">
                <span>Total Invoiced:</span>
                <span className="text-primary">{formatINR(completedOrder.total)}</span>
              </div>
            </div>

            {/* Engagement Next Steps */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs space-y-2">
              <div className="flex items-center gap-2 font-display font-semibold text-primary text-sm">
                <ShieldCheck className="size-4" /> Next Steps & Onboarding Roadmap
              </div>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground font-mono">
                <li>Your dedicated Senior Engineering Lead will contact you within 4 hours.</li>
                <li>Mutual Non-Disclosure & IP Assignment contracts will be sent via DocuSign.</li>
                <li>Kickoff architecture workshop scheduled for your preferred timezone.</li>
              </ol>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-card/60 p-4 sm:p-6">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3.5 py-2 font-mono text-xs font-medium text-foreground hover:bg-surface transition-colors"
              >
                <Printer className="size-3.5" /> Print Receipt
              </button>
            </div>

            <button
              type="button"
              onClick={resetCheckout}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 font-display text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Return to Engineering Site
              <ArrowRight className="size-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
