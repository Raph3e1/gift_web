import OrderConfirmationContent from "@/components/OrderConfirmationContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đặt Hàng Thành Công | Gift Glamorous",
  description: "Cảm ơn bạn đã tin tưởng lựa chọn Gift Glamorous.",
};

export default function OrderConfirmationPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Festive Accents */}
      <div className="absolute inset-0 seasonal-motif pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-48 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

      <OrderConfirmationContent />
    </main>
  );
}
