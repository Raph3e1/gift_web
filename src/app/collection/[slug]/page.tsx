import { allProducts } from "@/lib/data";
import ProductFilters from "@/components/ProductFilters";
import Link from "next/link";

const collectionNames: Record<string, string> = {
  "tet": "Quà Tết Nguyên Đán",
  "valentine": "Quà Valentine 14-2",
  "8-3": "Quà Ngày Phụ Nữ 8-3",
  "trung-thu": "Quà Trung Thu",
  "20-10": "Quà Phụ Nữ Việt Nam 20-10",
  "20-11": "Quà Ngày Nhà Giáo VN 20-11",
  "giang-sinh": "Quà Giáng Sinh",
  "doanh-nghiep": "Quà Tặng Doanh Nghiệp",
  "nguoi-yeu": "Quà Tặng Người Yêu",
  "cha-me": "Quà Tặng Cha Mẹ",
  "doi-tac": "Quà Tặng Đối Tác",
  "dong-nghiep": "Quà Tặng Đồng Nghiệp",
};


export default async function CollectionPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;

  const title = collectionNames[slug] || "Bộ Sưu Tập Quà Tặng";

  const products = allProducts.filter(p => 
    p.occasions?.includes(slug) || 
    p.topics?.includes(slug) ||
    p.recipient?.includes(title.replace("Quà Tặng ", "")) ||
    p.slug === slug
  );

  return (
    <div className="pt-28 pb-20 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-8 text-center mb-16">
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 text-xs text-stone-400 mb-8 uppercase tracking-widest">
          <Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <Link href="/san-pham" className="hover:text-primary transition-colors">Sản phẩm</Link>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span className="text-stone-600 font-bold">{title}</span>
        </nav>

        <header>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">
            {title}
          </h1>
          <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed text-lg font-light italic">
            "Khám phá bộ sưu tập được tuyển chọn kỹ lưỡng dành riêng cho dịp {title.toLowerCase()}, 
            mang đến những giá trị tinh tế và đẳng cấp nhất."
          </p>
        </header>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        {products.length > 0 ? (
          <ProductFilters products={products} />
        ) : (
          <div className="bg-white rounded-2xl p-20 text-center border border-stone-100 shadow-sm max-w-3xl mx-auto">
            <span className="material-symbols-outlined text-6xl text-stone-200 mb-4 block">
              inventory_2
            </span>
            <h3 className="text-xl font-serif font-medium text-stone-900 mb-2">
              Chưa có sản phẩm nào
            </h3>
            <p className="text-stone-500 mb-8">
              Bộ sưu tập này đang được chúng tôi cập nhật. Vui lòng quay lại sau nhé!
            </p>
            <Link 
              href="/san-pham"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-sm font-bold hover:bg-primary-container transition-all"
            >
              Xem tất cả sản phẩm
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}


export async function generateStaticParams() {
  const slugs = [
    "tet", "valentine", "8-3", "trung-thu", "20-10", "20-11", "giang-sinh",
    "doanh-nghiep", "nguoi-yeu", "cha-me", "doi-tac", "dong-nghiep"
  ];
  return slugs.map((slug) => ({ slug }));
}
