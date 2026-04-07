import ProductFilters from "@/components/ProductFilters";
import { allProducts } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tuyển Tập Quà Tết 2024 | Gift Glamorous",
  description:
    "Những tạo tác tâm huyết, chắt lọc tinh hoa từ các làng nghề truyền thống kết hợp cùng tư duy thẩm mỹ đương đại.",
};

export default function ProductListPage() {
  return (
    <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto seasonal-motif">
      {/* Header Section */}
      <header className="mb-20 text-center">
        <h1 className="font-headline text-5xl md:text-7xl text-on-surface mb-6 serif-display">
          Tuyển Tập Quà Tết 2024
        </h1>
        <p className="font-body text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Những tạo tác tâm huyết, chắt lọc tinh hoa từ các làng nghề truyền
          thống kết hợp cùng tư duy thẩm mỹ đương đại.
        </p>
      </header>

      <ProductFilters products={allProducts} />
    </main>
  );
}
