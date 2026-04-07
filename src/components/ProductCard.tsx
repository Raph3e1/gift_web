"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "listing" | "related";
}

export default function ProductCard({
  product,
  variant = "default",
}: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  if (variant === "listing") {
    return (
      <Link href={`/san-pham/${product.slug}`} className="group cursor-pointer">
        <div className="aspect-[1/1.2] overflow-hidden bg-stone-100 rounded-sm mb-6 relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.badge && (
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-white px-3 py-1 font-label text-[10px] font-bold tracking-widest uppercase">
                {product.badge}
              </span>
            </div>
          )}
          {/* Added feedback overlay */}
          <div
            className={`absolute inset-0 bg-primary/80 flex items-center justify-center transition-opacity duration-300 ${
              added ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="text-white text-center animate-fade-in">
              <span
                className="material-symbols-outlined text-4xl mb-2 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <p className="text-sm font-bold tracking-widest uppercase">
                Đã thêm vào giỏ
              </p>
            </div>
          </div>
        </div>
        <h3 className="font-headline text-xl mb-2 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="font-body text-stone-500 mb-4 text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-headline text-2xl text-primary font-bold">
            {product.price}
          </span>
          <button
            onClick={handleAdd}
            className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 cursor-pointer ${
              added
                ? "bg-primary border-primary text-white scale-110"
                : "border-primary text-primary hover:bg-primary hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined text-xl">
              {added ? "check" : "add"}
            </span>
          </button>
        </div>
      </Link>
    );
  }

  if (variant === "related") {
    return (
      <Link href={`/san-pham/${product.slug}`} className="group cursor-pointer">
        <div className="aspect-[3/4] overflow-hidden bg-stone-100 relative shadow-sm">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <button className="w-full bg-white text-stone-900 py-3 text-xs font-bold tracking-widest uppercase cursor-pointer">
              Xem chi tiết
            </button>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-start">
          <div>
            <h3 className="font-headline text-xl text-stone-900">
              {product.name}
            </h3>
            <p className="text-stone-400 text-sm mt-1 uppercase tracking-tighter">
              {product.description}
            </p>
          </div>
          <span className="text-primary font-bold">{product.price}</span>
        </div>
      </Link>
    );
  }

  // Default - homepage bestseller card
  return (
    <Link href={`/san-pham/${product.slug}`} className="group">
      <div className="aspect-[4/5] overflow-hidden rounded bg-stone-100 mb-5 relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
        />
        {product.badge && (
          <div
            className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-1 uppercase tracking-tighter ${
              product.badgeType === "new"
                ? "bg-secondary text-primary"
                : "bg-primary text-white"
            }`}
          >
            {product.badge}
          </div>
        )}
        {/* Added feedback overlay */}
        <div
          className={`absolute inset-0 bg-primary/80 flex items-center justify-center transition-opacity duration-300 z-10 ${
            added ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="text-white text-center animate-fade-in">
            <span
              className="material-symbols-outlined text-4xl mb-2 block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
            <p className="text-sm font-bold tracking-widest uppercase">
              Đã thêm vào giỏ
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-white/90 backdrop-blur-sm">
          <button
            onClick={handleAdd}
            className="w-full bg-primary text-white py-2 text-xs font-bold uppercase tracking-widest hover:bg-primary-container cursor-pointer"
          >
            {added ? "✓ Đã thêm" : "Thêm vào giỏ"}
          </button>
        </div>
      </div>
      <h4 className="font-serif text-lg font-bold mb-1 text-stone-900">
        {product.name}
      </h4>
      <p className="text-stone-500 text-xs mb-3 uppercase tracking-wide">
        {product.description}
      </p>
      <span className="font-bold text-primary text-lg">{product.price}</span>
    </Link>
  );
}
