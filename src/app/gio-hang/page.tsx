import CartContent from "@/components/CartContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giỏ Hàng | Gift Glamorous",
  description: "Xem giỏ hàng và tiến hành thanh toán quà Tết cao cấp.",
};

export default function CartPage() {
  return (
    <main className="pt-32 pb-20 min-h-screen tet-watermark">
      <div className="max-w-7xl mx-auto px-8">
        {/* Checkout Progress Bar */}
        <div className="mb-16 max-w-2xl mx-auto">
          <div className="relative flex items-start justify-between">
            {/* Background line — only between step 1 and step 3 centers */}
            <div className="absolute top-5 left-[calc(16.67%)] right-[calc(16.67%)] h-px bg-surface-variant -translate-y-1/2"></div>

            {/* Step 1 — Active */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold shadow-lg shadow-primary/20 relative z-10">
                1
              </div>
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                Giỏ Hàng
              </span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold relative z-10">
                2
              </div>
              <span className="text-xs font-medium tracking-widest text-on-surface-variant uppercase">
                Giao Hàng
              </span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold relative z-10">
                3
              </div>
              <span className="text-xs font-medium tracking-widest text-on-surface-variant uppercase">
                Thanh Toán
              </span>
            </div>
          </div>
        </div>

        <CartContent />
      </div>
    </main>
  );
}
