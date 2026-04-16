import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      {/* Main Footer - Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Lifestyle Image */}
        <div className="relative h-[400px] lg:h-auto overflow-hidden img-zoom">
          <Image
            src="/images/cat-hop-qua.jpg"
            alt="Gift Glamorous Lifestyle"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Newsletter + Links */}
        <div className="bg-[#f5f3ed] px-8 lg:px-16 py-16">
          {/* Newsletter */}
          <div className="mb-12">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-stone-500 mb-4">
              Đăng ký nhận tin
            </h4>
            <div className="flex border-b border-stone-300">
              <input
                className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-stone-400"
                placeholder="Nhập địa chỉ email..."
                type="email"
              />
              <button className="px-4 text-stone-500 hover:text-[#2d4a3e] transition-colors">
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h5 className="text-xs font-bold text-stone-500 mb-5 uppercase tracking-[0.2em]">
                Đặt hàng & Hỗ trợ
              </h5>
              <ul className="space-y-3 text-sm text-stone-500">
                <li>
                  <Link href="#" className="hover:text-[#2d4a3e] transition-colors">
                    Hệ thống cửa hàng
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#2d4a3e] transition-colors">
                    Kiểm tra đơn hàng
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#2d4a3e] transition-colors">
                    Chính sách giao hàng
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#2d4a3e] transition-colors">
                    Đổi trả & Hoàn tiền
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h5 className="text-xs font-bold text-stone-500 mb-5 uppercase tracking-[0.2em]">
                Sản phẩm
              </h5>
              <ul className="space-y-3 text-sm text-stone-500">
                <li>
                  <Link href="/san-pham" className="hover:text-[#2d4a3e] transition-colors">
                    Hộp Quà Cao Cấp
                  </Link>
                </li>
                <li>
                  <Link href="/san-pham" className="hover:text-[#2d4a3e] transition-colors">
                    Giỏ Quà Mây Tre
                  </Link>
                </li>
                <li>
                  <Link href="/san-pham" className="hover:text-[#2d4a3e] transition-colors">
                    Trà & Đặc Sản
                  </Link>
                </li>
                <li>
                  <Link href="/collection/doanh-nghiep" className="hover:text-[#2d4a3e] transition-colors">
                    Quà Doanh Nghiệp
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h5 className="text-xs font-bold text-stone-500 mb-5 uppercase tracking-[0.2em]">
                Về chúng tôi
              </h5>
              <ul className="space-y-3 text-sm text-stone-500">
                <li>
                  <Link href="#" className="hover:text-[#2d4a3e] transition-colors">
                    Câu chuyện thương hiệu
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#2d4a3e] transition-colors">
                    Nguyên liệu
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#2d4a3e] transition-colors">
                    Chứng nhận
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h5 className="text-xs font-bold text-stone-500 mb-5 uppercase tracking-[0.2em]">
                Mạng xã hội
              </h5>
              <ul className="space-y-3 text-sm text-stone-500">
                <li>
                  <Link href="#" className="hover:text-[#2d4a3e] transition-colors">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#2d4a3e] transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#2d4a3e] transition-colors">
                    TikTok
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1a1c1a] text-white/40 text-center py-6">
        <p className="text-[10px] uppercase tracking-[0.4em]">
          &copy; 2024 Gift Glamorous. All rights reserved. &mdash; The Art of Vietnamese Gifting
        </p>
      </div>
    </footer>
  );
}
