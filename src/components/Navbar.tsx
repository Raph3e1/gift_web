"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";

export default function Navbar() {
  const { totalItems, cartBounce } = useCart();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-xl shadow-ambient">
      <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
        {/* Logo + Nav Links */}
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image src="/images/logo.png" alt="Gift Glamorous" width={40} height={40} className="object-contain" />
            <span className="text-xl font-serif font-bold tracking-tight text-primary hidden sm:inline">GIFT GLAMOROUS</span>
          </Link>
          <div className="hidden lg:flex items-center gap-x-8">
            <Link
              href="/san-pham"
              className="text-primary border-b-2 border-secondary pb-1 font-bold text-sm tracking-wide"
            >
              Quà tết
            </Link>
            <Link
              href="#"
              className="text-stone-600 font-medium hover:text-primary-container transition-colors duration-300 text-sm tracking-wide"
            >
              Ngày lễ
            </Link>
            <Link
              href="#"
              className="text-stone-600 font-medium hover:text-primary-container transition-colors duration-300 text-sm tracking-wide"
            >
              Đối tượng
            </Link>
            <Link
              href="#"
              className="text-stone-600 font-medium hover:text-primary-container transition-colors duration-300 text-sm tracking-wide"
            >
              Đối Tác
            </Link>
          </div>
        </div>

        {/* Search + Icons */}
        <div className="flex items-center gap-6 flex-1 max-w-md justify-end">
          {/* Search Bar */}
          <div className="relative w-full max-w-xs hidden md:block">
            <input
              className="w-full bg-stone-100 border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-primary/20 outline-none"
              placeholder="Tìm kiếm quà tặng..."
              type="text"
            />
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-xl">
              search
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/gio-hang"
              className={`text-stone-700 hover:text-primary transition-transform active:scale-90 relative ${
                cartBounce ? "animate-cart-bounce" : ""
              }`}
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-badge-pop">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </Link>
            <button className="text-stone-700 hover:text-primary transition-transform active:scale-90 cursor-pointer">
              <span className="material-symbols-outlined">person</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
