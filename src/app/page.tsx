"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { bestsellers } from "@/lib/data";
import { useEffect, useRef } from "react";
import { Analytics } from "@vercel/analytics/next"

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function HomePage() {
  const rootRef = useScrollReveal();

  return (
    <main ref={rootRef} className="bg-[#FAF8F3] text-stone-800">
      <Analytics />

      {/* ─── Hero Section (Cocoon 50/50 Split) ─── */}
      <section className="hero-split">
        {/* Left - Image */}
        <div className="relative min-h-[400px] lg:min-h-0 overflow-hidden">
          <Image
            src="/images/hero-bg.png"
            alt="Gift Glamorous Collection"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right - Mustard Content */}
        <div className="hero-mustard">
          <p className="text-[11px] uppercase tracking-[0.35em] font-semibold text-[#6b5c2e] mb-6 hero-stagger hero-stagger-1">
            Bộ sưu tập quà tặng cao cấp 2024
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05] mb-6 text-stone-800 hero-stagger hero-stagger-2">
            Nghệ thuật <br />
            <span className="italic font-light">Quà Tặng</span> <br />
            Bản Địa.
          </h1>
          <p className="text-stone-600 text-base font-light leading-relaxed mb-10 max-w-md hero-stagger hero-stagger-3">
            Chắt lọc những nguyên liệu tinh túy nhất từ thiên nhiên Việt Nam,
            kết hợp nghệ thuật thủ công đương đại để tạo nên bộ quà tặng đẳng cấp.
          </p>
          <div className="hero-stagger hero-stagger-4">
            <Link href="/san-pham" className="cocoon-btn">
              XEM NGAY
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>

          {/* Slider Dots */}
          <div className="flex gap-2 mt-10 hero-stagger hero-stagger-5">
            <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-white/40"></span>
            <span className="w-2 h-2 rounded-full bg-white/40"></span>
            <span className="w-2 h-2 rounded-full bg-white/40"></span>
            <span className="w-2 h-2 rounded-full bg-white/40"></span>
          </div>
        </div>
      </section>

      {/* ─── Product Highlight (Featured Single Product) ─── */}
      <section className="section-padding bg-[#f9f5ec]">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-reveal>
          <div className="reveal-up">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#2d4a3e]/60 mb-4 block font-semibold">
              Nổi bật mùa này
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Hộp Quà <span className="italic font-light">Lộc Xuân</span>
            </h2>
            <p className="text-stone-500 text-base font-light leading-relaxed mb-8 max-w-lg">
              Tinh hoa trà Ô Long Cổ Thụ, hạt điều rang củi Bình Phước, mứt sen Tây Hồ — gói trọn trong hộp
              gỗ sơn mài thủ công mang đến cảm giác sang trọng và ý nghĩa trong từng món quà.
            </p>
            <Link href="/san-pham/hop-qua-loc-xuan" className="cocoon-btn-filled">
              TÌM HIỂU THÊM
            </Link>
          </div>
          <div className="relative aspect-square overflow-hidden reveal-scale">
            <Image
              src="/images/product-loc-xuan.jpg"
              alt="Hộp Quà Lộc Xuân"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── Brand Philosophy (Cocoon Style) ─── */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/images/cat-hop-qua.jpg"
          alt="Vietnamese Ingredients"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <div data-reveal className="reveal-up bg-white/95 backdrop-blur-sm p-12 md:p-16 max-w-xl text-center">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#2d4a3e]/60 mb-4 block font-semibold">
              Triết lý thương hiệu
            </span>
            <h3 className="text-3xl md:text-4xl font-serif mb-5 leading-snug">
              Kết nối những <span className="italic">tâm hồn</span> qua giá trị thuần bản
            </h3>
            <p className="text-stone-500 text-sm font-light leading-relaxed mb-8">
              Mỗi món quà không chỉ là một vật phẩm, mà là câu chuyện về lòng biết ơn
              và sự trân trọng. Chúng tôi tỉ mỉ lựa chọn những tinh túy từ lòng đất mẹ,
              được chế tác bởi bàn tay nghệ nhân tâm huyết nhất.
            </p>
            <Link href="/san-pham" className="cocoon-btn-filled">
              TÌM HIỂU THÊM
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Certifications / Values (3-column) ─── */}
      <section className="section-padding bg-texture-dots relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#2d4a3e]/[0.015] rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
          <div data-reveal className="reveal-up text-center">
            <div className="w-16 h-16 mx-auto mb-6 border border-stone-200 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl text-[#2d4a3e]">eco</span>
            </div>
            <h4 className="text-lg font-serif mb-3">Nguyên liệu Thuần Việt</h4>
            <p className="text-stone-400 text-sm font-light leading-relaxed">
              Tuyển chọn kĩ càng từ những vùng nguyên liệu trứ danh: Trà Thái Nguyên,
              Hạt điều Bình Phước, Mứt sen Hà Nội.
            </p>
          </div>
          <div data-reveal className="reveal-up text-center" style={{ transitionDelay: '100ms' }}>
            <div className="w-16 h-16 mx-auto mb-6 border border-stone-200 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl text-[#2d4a3e]">palette</span>
            </div>
            <h4 className="text-lg font-serif mb-3">Thủ công Tinh xảo</h4>
            <p className="text-stone-400 text-sm font-light leading-relaxed">
              Hộp quà được chế tác từ gỗ sơn mài thủ công, trạm khắc tỉ mỉ
              bởi các nghệ nhân lành nghề nhất.
            </p>
          </div>
          <div data-reveal className="reveal-up text-center" style={{ transitionDelay: '200ms' }}>
            <div className="w-16 h-16 mx-auto mb-6 border border-stone-200 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl text-[#2d4a3e]">design_services</span>
            </div>
            <h4 className="text-lg font-serif mb-3">Thiết kế Độc bản</h4>
            <p className="text-stone-400 text-sm font-light leading-relaxed">
              Đội ngũ designer tài năng sẽ hiện thực hóa mọi ý tưởng quà tặng,
              mang đậm dấu ấn thương hiệu cá nhân.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Bestsellers (Horizontal Scroll with Sticky Left) ─── */}
      <section className="section-padding bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
            {/* Left Sticky Column */}
            <div className="lg:sticky lg:top-32 lg:self-start" data-reveal>
              <div className="reveal-left">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#2d4a3e]/60 mb-4 block font-semibold">
                  Được yêu thích
                </span>
                <h2 className="text-4xl font-serif leading-tight mb-6">
                  Sản phẩm <br />
                  <span className="italic font-light">Bán Chạy</span>
                </h2>
                <Link href="/san-pham" className="cocoon-btn text-sm">
                  XEM TẤT CẢ
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Right - Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestsellers.map((product, i) => (
                <div
                  key={product.slug}
                  data-reveal
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="reveal-up"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Ingredients Story (Cocoon Full-Width Image + Text) ─── */}
      <section className="section-padding bg-leaf-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
          <div className="order-2 md:order-1 img-zoom" data-reveal>
            <div className="reveal-scale relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/cat-doanh-nghiep.jpg"
                alt="Corporate Gift Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2" data-reveal>
            <div className="reveal-up">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#2d4a3e]/60 mb-6 block font-semibold">
                Dành cho doanh nghiệp
              </span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                Giải pháp <br />
                Quà tặng <span className="italic font-light">Chuyên Nghiệp.</span>
              </h2>
              <p className="text-stone-500 text-base font-light leading-relaxed mb-10 max-w-lg">
                Chúng tôi hỗ trợ in Logo, tùy chỉnh bộ quà tặng theo màu sắc thương hiệu
                và cung cấp dịch vụ giao hàng đến hàng ngàn đối tác chỉ trong một ngày.
              </p>
              <Link href="/collection/doanh-nghiep" className="cocoon-btn-filled">
                XEM CHI TIẾT DỊCH VỤ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Quote Section (Cocoon Style) ─── */}
      <section className="quote-section">
        <div className="max-w-3xl mx-auto px-8 text-center" data-reveal>
          <div className="reveal-up">
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-stone-700 mb-6">
              &ldquo;Gift Glamorous – Nghệ thuật quà tặng cho nét đẹp thuần Việt&rdquo;
            </p>
            <span className="text-[11px] uppercase tracking-[0.3em] text-stone-400 font-medium">
              — Elle Vietnam
            </span>
          </div>
        </div>
      </section>

      {/* ─── Newsletter Section ─── */}
      <section className="section-padding bg-botanical-overlay bg-[#faf8f3] relative overflow-hidden">
        <div className="max-w-xl mx-auto px-8 text-center relative z-10" data-reveal>
          <div className="reveal-up">
            <h2 className="text-2xl font-serif mb-3 italic">Trở thành một phần của chúng tôi</h2>
            <p className="text-stone-400 text-sm font-light mb-10">
              Nhận thông tin về sản phẩm mới và những ưu đãi độc quyền dành riêng cho bạn.
            </p>
            <form className="flex border-b border-stone-300 max-w-md mx-auto">
              <input
                className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-stone-400 font-light"
                placeholder="Nhập địa chỉ email của bạn..."
                type="email"
              />
              <button
                type="submit"
                className="px-4 text-stone-500 hover:text-[#2d4a3e] transition-colors"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── Contact Float Button ─── */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-white border border-stone-200 shadow-lg px-5 py-3 text-sm font-medium text-stone-700 hover:border-[#2d4a3e] hover:text-[#2d4a3e] transition-all flex items-center gap-2 rounded-full">
          Liên hệ
        </button>
      </div>
    </main>
  );
}
