export interface Product {
  slug: string;
  name: string;
  description: string;
  price: string;
  priceNumber: number;
  image: string;
  badge?: string;
  badgeType?: "bestseller" | "new";
  category?: string;
  recipient?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  name: string;
  title: string;
  avatar: string;
  rating: number;
  comment: string;
}

// === HOMEPAGE BESTSELLERS ===
export const bestsellers: Product[] = [
  {
    slug: "hop-qua-loc-xuan",
    name: "Hộp Quà Lộc Xuân",
    description: "Trà Ô Long, Hạt Điều, Mứt Sen",
    price: "1.250.000₫",
    priceNumber: 1250000,
    image: "/images/product-loc-xuan.jpg",
    badge: "Bestseller",
    badgeType: "bestseller",
  },
  {
    slug: "vang-vi-ngot",
    name: "Vang & Vị Ngọt",
    description: "Vang Đỏ Chile, Socola Artisan",
    price: "2.100.000₫",
    priceNumber: 2100000,
    image: "/images/product-vang-ngot.jpg",
    badge: "New Arrival",
    badgeType: "new",
  },
  {
    slug: "gio-tre-truyen-thong",
    name: "Giỏ Tre Truyền Thống",
    description: "Đặc sản vùng miền thủ công",
    price: "850.000₫",
    priceNumber: 850000,
    image: "/images/product-gio-tre.jpg",
  },
  {
    slug: "hop-tra-thuong-xuan",
    name: "Hộp Trà Thưởng Xuân",
    description: "Trà Sen Tây Hồ đặc biệt",
    price: "550.000₫",
    priceNumber: 550000,
    image: "/images/product-tra-xuan.jpg",
  },
];

// === PRODUCT LISTING ===
export const allProducts: Product[] = [
  {
    slug: "an-khang-thinh-vuong",
    name: "An Khang Thịnh Vượng",
    description:
      "Hộp gỗ sơn mài thủ công, Trà Tân Cương thượng hạng, Mứt Sen, Rượu Vang Đỏ nhập khẩu.",
    price: "1.850.000₫",
    priceNumber: 1850000,
    image: "/images/list-an-khang.jpg",
    badge: "Best Seller",
    badgeType: "bestseller",
    category: "Hộp Quà Gỗ Sơn Mài",
    recipient: ["Đối Tác Kinh Doanh", "Gia Đình & Người Thân"],
  },
  {
    slug: "loc-xuan-nhu-y",
    name: "Lộc Xuân Như Ý",
    description:
      "Giỏ mây truyền thống, Hạt Điều rang muối, Xoài Sấy dẻo, Trà Oolong Cao Sơn.",
    price: "950.000₫",
    priceNumber: 950000,
    image: "/images/list-loc-xuan.jpg",
    category: "Giỏ Quà Mây Tre Đan",
    recipient: ["Gia Đình & Người Thân", "Bạn Bè & Đồng Nghiệp"],
  },
  {
    slug: "tam-giao-tri-ky",
    name: "Tâm Giao Tri Kỷ",
    description:
      "Bộ ấm chén Bát Tràng tráng men ngọc, Trà Shan Tuyết Cổ Thụ vùng cao.",
    price: "2.400.000₫",
    priceNumber: 2400000,
    image: "/images/list-tam-giao.jpg",
    category: "Bộ Trà & Rượu",
    recipient: ["Đối Tác Kinh Doanh", "Bạn Bè & Đồng Nghiệp"],
  },
  {
    slug: "phu-quy-toan-nien",
    name: "Phú Quý Toàn Niên",
    description:
      "Hộp quà doanh nghiệp cao cấp, Rượu Cognac Pháp, Hạnh Nhân Mỹ, Chà Là Israel.",
    price: "3.200.000₫",
    priceNumber: 3200000,
    image: "/images/list-phu-quy.jpg",
    category: "Hộp Quà Gỗ Sơn Mài",
    recipient: ["Đối Tác Kinh Doanh"],
  },
  {
    slug: "sum-vay-hanh-phuc",
    name: "Sum Vầy Hạnh Phúc",
    description:
      "Hộp giấy mỹ thuật cao cấp, Mứt Tết truyền thống hữu cơ, Kẹo Lạc Hà Thành.",
    price: "450.000₫",
    priceNumber: 450000,
    image: "/images/list-sum-vay.jpg",
    category: "Hộp Quà Gỗ Sơn Mài",
    recipient: ["Gia Đình & Người Thân", "Bạn Bè & Đồng Nghiệp"],
  },
  {
    slug: "van-su-cat-tuong",
    name: "Vạn Sự Cát Tường",
    description:
      "Rượu Vang Chi-lê Reserva, Hạt Macca nứt vỏ, Hộp quà gỗ khắc laser tinh xảo.",
    price: "1.250.000₫",
    priceNumber: 1250000,
    image: "/images/list-van-su.jpg",
    category: "Bộ Trà & Rượu",
    recipient: ["Bạn Bè & Đồng Nghiệp", "Đối Tác Kinh Doanh"],
  },
];

// === PRODUCT DETAIL ===
export const featuredProduct = {
  slug: "phuong-hoang-cat-tuong",
  name: "Phượng Hoàng Cát Tường",
  collection: "Sưu Tập Hoàng Gia 2024",
  price: "2.850.000",
  currency: "VNĐ",
  rating: 5,
  reviewCount: 48,
  description:
    "Lấy cảm hứng từ hình tượng Phượng Hoàng quyền quý, hộp quà là sự kết tinh của nghệ thuật sơn mài truyền thống và các đặc sản thượng hạng được tuyển chọn khắt khe.",
  badge: "Mẫu Độc Bản",
  images: {
    main: "/images/detail-main.jpg",
    thumbnails: [
      "/images/detail-thumb1.jpg",
      "/images/detail-thumb2.jpg",
      "/images/detail-thumb3.jpg",
      "/images/detail-thumb4.jpg",
    ],
  },
  contents: [
    { name: "Rượu Vang Chateau Heritage Premium", amount: "750ml" },
    { name: "Trà Ô Long Cổ Thụ (Hộp Thiếc Nghệ Thuật)", amount: "150g" },
    { name: "Hạt Điều Rang Củi Đặc Sản Bình Phước", amount: "200g" },
    { name: "Mứt Vỏ Bưởi Sấy Dẻo Thượng Hạng", amount: "180g" },
    { name: "Hạnh Nhân Rang Bơ Mỹ", amount: "220g" },
  ],
  dimensions: "35x28x12 CM",
  weight: "3.2 KG",
};

export const reviews: Review[] = [
  {
    name: "Anh Tuấn Nguyễn",
    title: "CEO, Tech Innovate",
    avatar: "/images/avatar-tuan.jpg",
    rating: 5,
    comment:
      '"Hộp quà rất sang trọng, các chi tiết thêu trên nắp hộp cực kỳ tỉ mỉ. Các món bên trong đều là hàng cao cấp, xứng đáng làm quà biếu đối tác."',
  },
  {
    name: "Chị Minh Hằng",
    title: "Khách hàng thân thiết",
    avatar: "/images/avatar-hang.jpg",
    rating: 5,
    comment:
      '"Giao hàng nhanh dù sát Tết. Đóng gói rất cẩn thận, không một vết trầy xước. Rượu vang rất ngon, ba mẹ mình rất thích trà Ô Long."',
  },
  {
    name: "Bác Hùng Lê",
    title: "Khách hàng Hà Nội",
    avatar: "/images/avatar-hung.jpg",
    rating: 4,
    comment:
      '"Màu đỏ của hộp quà rất đẹp, đúng chất Tết cổ truyền nhưng vẫn rất hiện đại. Đã đặt thêm 5 hộp cho gia đình hai bên nội ngoại."',
  },
];

export const relatedProducts: Product[] = [
  {
    slug: "hop-qua-kim-mai",
    name: "Hộp Quà Kim Mai",
    description: "Truyền thống & Tinh tế",
    price: "1.450.000₫",
    priceNumber: 1450000,
    image: "/images/related-kim-mai.jpg",
  },
  {
    slug: "dai-cat-dai-loi-premium",
    name: "Đại Cát Đại Lợi - Premium",
    description: "Phiên bản giới hạn",
    price: "4.200.000₫",
    priceNumber: 4200000,
    image: "/images/related-dai-cat.jpg",
  },
  {
    slug: "tra-dao-an-nhien",
    name: "Trà Đạo An Nhiên",
    description: "Mộc mạc & Ấm cúng",
    price: "850.000₫",
    priceNumber: 850000,
    image: "/images/related-tra-dao.jpg",
  },
];

// === CART ===
export const cartItems: CartItem[] = [
  {
    product: {
      slug: "hop-qua-phu-quy",
      name: "Hộp Quà Phú Quý - Mẫu Xuân 2024",
      description:
        "Trà Ô Long Đặc Sản, Mứt Gừng Thủ Công, Hạt Điều Rang Củi Vỏ Lụa.",
      price: "2.450.000₫",
      priceNumber: 2450000,
      image: "/images/cart-phu-quy.jpg",
    },
    quantity: 1,
  },
  {
    product: {
      slug: "bo-tra-tuyet-lien-hoa",
      name: "Bộ Trà Tuyết Liên Hoa",
      description:
        "Gốm thủ công tráng men ngọc bích, vẽ tay họa tiết hoa sen hoàng gia.",
      price: "1.850.000₫",
      priceNumber: 1850000,
      image: "/images/cart-tra-tuyet.jpg",
    },
    quantity: 1,
  },
];
