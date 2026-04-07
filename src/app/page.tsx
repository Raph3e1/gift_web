"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { bestsellers } from "@/lib/data";
import { useEffect, useRef } from "react";

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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function HomePage() {
  const rootRef = useScrollReveal();

  return (
    <main ref={rootRef}>
      {/* ─── Hero ─── */}
      <section className="relative h-[750px] flex items-center mt-16 overflow-hidden">
        {/* Parallax BG */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.png"
            alt="Hero background"
            fill
            className="object-cover scale-110 hero-parallax"
            priority
            unoptimized
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="hero-particle hero-particle-1"></div>
          <div className="hero-particle hero-particle-2"></div>
          <div className="hero-particle hero-particle-3"></div>
          <div className="hero-particle hero-particle-4"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.4em] font-semibold text-secondary mb-6 hero-stagger hero-stagger-1">
              ✦ Chào Xuân Ất Tỵ 2025
            </p>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-white hero-stagger hero-stagger-2">
              Gói Trọn <br />
              Nghĩa Tình,{" "}
              <span className="italic bg-gradient-to-r from-secondary via-yellow-200 to-secondary bg-clip-text text-transparent">
                Khai Xuân Như Ý
              </span>
            </h1>
            <p className="text-lg text-white/80 mb-12 font-light leading-relaxed max-w-md hero-stagger hero-stagger-3">
              Khám phá bộ sưu tập quà Tết Heirloom — sự kết tinh giữa nghệ
              thuật thủ công truyền thống và phong cách đương đại thượng lưu.
            </p>
            <div className="flex gap-4 hero-stagger hero-stagger-4">
              <Link
                href="/san-pham"
                className="group bg-primary hover:bg-primary-container text-white px-10 py-4 rounded-sm font-bold transition-all shadow-2xl shadow-primary/30 flex items-center gap-3 active:scale-95"
              >
                Khám Phá Ngay
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <button className="border border-white/40 text-white px-10 py-4 rounded-sm font-bold hover:bg-white/10 hover:border-white/70 transition-all cursor-pointer backdrop-blur-sm">
                Xem Catalog
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce-slow">
          <span className="text-[10px] uppercase tracking-[0.3em]">Cuộn xuống</span>
          <span className="material-symbols-outlined text-lg">expand_more</span>
        </div>
      </section>

      {/* ─── USP Bento Cards ─── */}
      <section className="max-w-7xl mx-auto px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "local_shipping",
              title: "Giao Hàng Hỏa Tốc",
              desc: "Đảm bảo quà đến tay người nhận đúng hẹn, giữ trọn vẹn hương vị và sắc xuân.",
              delay: "0ms",
            },
            {
              icon: "workspace_premium",
              title: "Chất Lượng Thượng Hạng",
              desc: "Nguyên liệu chọn lọc từ những nghệ nhân và thương hiệu danh tiếng nhất.",
              delay: "120ms",
            },
            {
              icon: "redeem",
              title: "Thiết Kế Độc Bản",
              desc: "Bao bì tinh xảo với các họa tiết truyền thống được cách tân đầy nghệ thuật.",
              delay: "240ms",
            },
          ].map((item) => (
            <div
              key={item.title}
              data-reveal
              style={{ transitionDelay: item.delay }}
              className="reveal-up bg-white p-10 shadow-xl shadow-stone-200/50 rounded-xl flex flex-col items-center text-center group border border-stone-100 hover:border-primary/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {item.icon}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Bestsellers ─── */}
      <section className="py-28 max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-14" data-reveal>
          <div className="reveal-left">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">
              ✦ Được yêu thích nhất
            </p>
            <h2 className="font-serif text-4xl text-stone-900 font-bold">
              Tuyệt Tác Bán Chạy
            </h2>
          </div>
          <Link
            href="/san-pham"
            className="group text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
          >
            XEM TẤT CẢ
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {bestsellers.map((product, i) => (
            <div
              key={product.slug}
              data-reveal
              style={{ transitionDelay: `${i * 100}ms` }}
              className="reveal-up"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* ─── Categories Showcase ─── */}
      <section className="py-28 bg-stone-50 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20" data-reveal>
            <div className="reveal-up">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
                ✦ Bộ sưu tập
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 font-bold mb-6">
                Phân Khúc Quà Tặng
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-[2px] bg-outline-variant"></div>
                <div className="w-8 h-[2px] bg-primary"></div>
                <div className="w-12 h-[2px] bg-outline-variant"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[300px]">
            {/* Large Card */}
            <div
              data-reveal
              className="reveal-scale md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <Image
                src="/images/cat-hop-qua.jpg"
                alt="Hộp Quà Cao Cấp"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-700"></div>
              <div className="absolute bottom-10 left-10 text-white max-w-sm">
                <span className="text-[10px] uppercase tracking-[0.3em] text-secondary block mb-3">
                  Premium Collection
                </span>
                <h3 className="font-serif text-3xl font-bold mb-3 group-hover:translate-x-1 transition-transform duration-500">
                  Hộp Quà Cao Cấp
                </h3>
                <p className="mb-6 text-sm opacity-80 leading-relaxed">
                  Sự lựa chọn hoàn hảo tôn vinh đẳng cấp cho đối tác và cấp
                  trên trong dịp Tết này.
                </p>
                <Link
                  href="/san-pham"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-colors rounded-sm group-hover:shadow-xl"
                >
                  Khám Phá
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Vertical Card */}
            <div
              data-reveal
              style={{ transitionDelay: "150ms" }}
              className="reveal-scale md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <Image
                src="/images/cat-gio-qua.jpg"
                alt="Giỏ Quà Truyền Thống"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-700"></div>
              <div className="absolute bottom-10 left-8 text-white right-8">
                <span className="text-[10px] uppercase tracking-[0.3em] text-secondary block mb-3">
                  Traditional
                </span>
                <h3 className="font-serif text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-500">
                  Giỏ Quà Truyền Thống
                </h3>
                <p className="mb-4 text-xs opacity-80">
                  Ấm áp tình thân, vẹn tròn phong vị.
                </p>
                <span className="text-xs font-bold uppercase tracking-widest border-b border-secondary text-secondary pb-1 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Xem chi tiết
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </div>

            {/* Bottom Cards */}
            <div
              data-reveal
              style={{ transitionDelay: "100ms" }}
              className="reveal-up md:col-span-6 group relative overflow-hidden rounded-xl shadow-lg h-[300px] cursor-pointer"
            >
              <Image
                src="/images/cat-ruou-tra.jpg"
                alt="Rượu Vang & Trà"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-700"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="font-serif text-2xl font-bold mb-4 group-hover:-translate-y-1 transition-transform duration-500">
                  Rượu Vang & Trà
                </h3>
                <button className="px-6 py-2.5 border border-white/70 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-all cursor-pointer rounded-sm">
                  Khám Phá
                </button>
              </div>
            </div>
            <div
              data-reveal
              style={{ transitionDelay: "200ms" }}
              className="reveal-up md:col-span-6 group relative overflow-hidden rounded-xl shadow-lg h-[300px] cursor-pointer"
            >
              <Image
                src="/images/cat-doanh-nghiep.jpg"
                alt="Quà Doanh Nghiệp"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-700"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="font-serif text-2xl font-bold mb-4 group-hover:-translate-y-1 transition-transform duration-500">
                  Quà Doanh Nghiệp
                </h3>
                <button className="px-6 py-2.5 border border-white/70 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-all cursor-pointer rounded-sm">
                  Xem Giải Pháp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonial / Stats Ribbon ─── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 right-12 rotate-12">
            <span className="material-symbols-outlined text-[180px]">celebration</span>
          </div>
          <div className="absolute bottom-4 left-12 -rotate-12">
            <span className="material-symbols-outlined text-[140px]">redeem</span>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "10K+", label: "Khách hàng tin tưởng" },
              { number: "500+", label: "Mẫu quà tặng" },
              { number: "98%", label: "Hài lòng dịch vụ" },
              { number: "24h", label: "Giao hàng nhanh" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
                className="reveal-up"
              >
                <p className="text-4xl md:text-5xl font-serif font-bold mb-2 text-secondary">
                  {stat.number}
                </p>
                <p className="text-sm text-white/70 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Newsletter / CTA ─── */}
      <section className="max-w-7xl mx-auto px-8 my-28">
        <div
          data-reveal
          className="reveal-scale bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-2xl p-16 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-6 right-12 w-32 h-32 border border-white/5 rounded-full"></div>
            <div className="absolute bottom-6 left-12 w-48 h-48 border border-white/5 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-secondary/30 rounded-full"></div>
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-secondary/20 rounded-full"></div>
          </div>

          <div className="relative z-10">
            <span className="inline-block text-xs uppercase tracking-[0.4em] text-secondary font-semibold mb-6">
              ✦ Ưu đãi đặc biệt ✦
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Nhận Ưu Đãi <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-secondary via-yellow-200 to-secondary bg-clip-text text-transparent">
                Tết Sớm
              </span>
            </h2>
            <p className="max-w-xl mx-auto mb-12 text-white/60 font-light text-lg leading-relaxed">
              Để lại email để nhận danh mục quà tặng doanh nghiệp chiết khấu
              tới 20% và đặc quyền vận chuyển miễn phí.
            </p>
            <form className="flex flex-col md:flex-row gap-0 max-w-lg mx-auto rounded-lg overflow-hidden shadow-2xl shadow-black/30">
              <input
                className="flex-1 bg-white border-none focus:ring-0 text-stone-900 px-6 py-4 outline-none placeholder:text-stone-400 text-sm"
                placeholder="Nhập email của bạn..."
                type="email"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-container text-white px-10 py-4 font-bold uppercase tracking-widest transition-all cursor-pointer text-sm"
              >
                Đăng Ký
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
