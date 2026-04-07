import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-stone-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="col-span-1">
          <h4 className="text-xl font-serif font-bold text-primary mb-6">
            GIFT GLAMOROUS
          </h4>
          <p className="text-stone-500 text-sm leading-relaxed mb-6">
            Lưu giữ nét đẹp truyền thống trong từng món quà hiện đại. Mang may
            mắn và tài lộc đến mọi nhà trong dịp xuân về.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:text-secondary transition-colors">
              public
            </span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:text-secondary transition-colors">
              photo_camera
            </span>
          </div>
        </div>

        {/* Products */}
        <div>
          <h5 className="text-xs font-bold text-primary mb-6 uppercase tracking-[0.2em]">
            Sản Phẩm
          </h5>
          <ul className="space-y-4 text-sm text-stone-500">
            <li>
              <Link
                href="/san-pham"
                className="hover:text-secondary transition-colors duration-200"
              >
                Hộp Quà Cao Cấp
              </Link>
            </li>
            <li>
              <Link
                href="/san-pham"
                className="hover:text-secondary transition-colors duration-200"
              >
                Giỏ Quà Tết
              </Link>
            </li>
            <li>
              <Link
                href="/san-pham"
                className="hover:text-secondary transition-colors duration-200"
              >
                Trà & Đặc Sản
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h5 className="text-xs font-bold text-primary mb-6 uppercase tracking-[0.2em]">
            Hỗ Trợ
          </h5>
          <ul className="space-y-4 text-sm text-stone-500">
            <li>
              <Link
                href="#"
                className="hover:text-secondary transition-colors duration-200"
              >
                Hệ thống cửa hàng
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-secondary transition-colors duration-200"
              >
                Chính sách vận chuyển
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-secondary transition-colors duration-200"
              >
                Điều khoản dịch vụ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-xs font-bold text-primary mb-6 uppercase tracking-[0.2em]">
            Liên Hệ
          </h5>
          <div className="space-y-4 text-sm text-stone-500">
            <p>123 Đường Xuân, Quận 1, TP. HCM</p>
            <p>Hotline: 1900 8888</p>
            <p>Email: contact@giftglamorous.vn</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-12 py-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
        <p>© 2024 Gift Glamorous. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-primary transition-colors">
            Chính sách bảo mật
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Liên hệ
          </Link>
        </div>
      </div>
    </footer>
  );
}
