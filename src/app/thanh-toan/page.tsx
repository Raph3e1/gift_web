import CheckoutContent from "@/components/CheckoutContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanh Toán | Gift Glamorous",
  description: "Hoàn tất đơn hàng quà Tết cao cấp của bạn.",
};

export default function CheckoutPage() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto seasonal-motif min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-2">
          Thanh Toán An Toàn
        </h1>
        <p className="text-on-surface-variant font-body">
          Hoàn tất lựa chọn quà tặng di sản cao cấp của bạn.
        </p>
      </div>

      <CheckoutContent />
    </main>
  );
}
