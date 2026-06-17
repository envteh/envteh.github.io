import {
  AlarmClock,
  BadgeCheck,
  ThumbsUp,
  AlertCircle,
  CircleCheckBig,
  CheckCircle2,
  Zap,
  Clock,
  CircleDollarSign,
  Layers,
  Smartphone,
  Bell,
  Shield,
  Rocket,
  BarChart3,
  Crown,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

interface NavLinks {
  name: string;
  href: string;
}

export const navLinks: NavLinks[] = [
  { name: "Tentang", href: "#about" },
  { name: "Paket", href: "#packet" },
  { name: "Portofolio", href: "#portfolio" },
  { name: "Proses", href: "#process" },
  { name: "Pertanyaan", href: "#faq" },
];

interface HeroTrust {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const heroTrust: HeroTrust[] = [
  { icon: AlarmClock, title: "Cepat", desc: "2 - 7 hari jadi" },
  { icon: BadgeCheck, title: "Bergaransi", desc: "Revisi sesuai paket" },
  { icon: ThumbsUp, title: "Terjangkau", desc: "Harga bersahabat" },
];

interface ProblemSolution {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export const problemSolution: ProblemSolution[] = [
  {
    title: "Masalah",
    desc: "Kehadiran digital yang lemah tanpa website profesional membuat banyak bisnis sulit bersaing saat ini.",
    icon: AlertCircle,
  },
  {
    title: "Solusi",
    desc: "ENVTEH menyediakan jasa pembuatan website modern dan interaktif secara efisien untuk meningkatkan kredibilitas bisnis Anda.",
    icon: CircleCheckBig,
  },
];

type Services = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export const services: Services[] = [
  {
    title: "Pengembangan Web",
    desc: "Kami menggunakan teknologi terbaru seperti React, Node.js, dan arsitektur Cloud-native.",
    icon: Zap,
  },
  {
    title: "Aplikasi Mobile",
    desc: "Sistem yang dibangun untuk menangani jutaan pengguna tanpa kendala.",
    icon: Rocket,
  },
  {
    title: "Desain UI/UX",
    desc: "Keamanan bawaan di setiap lapisan siklus hidup pengembangan aplikasi.",
    icon: Shield,
  },
  {
    title: "Pemeliharaan dan Dukungan",
    desc: "Siklus deployment yang cepat untuk menghadirkan fitur Anda ke pasar dengan lebih cepat.",
    icon: CheckCircle2,
  },
];

interface PricingPlans {
  name: string;
  subtitle: string;
  price: string;
  icon: LucideIcon;
  features: string[];
  recommended: boolean;
}

export const pricingPlans: PricingPlans[] = [
  {
    name: "BASIC",
    subtitle: "Web Statis Template",
    price: "300rb - 500rb",
    icon: Rocket,
    features: [
      "1 Halaman",
      "Berbasis Template",
      "Desain Simple & Modern",
      "Tanpa Transisi & Animasi",
      "Mobile Friendly",
      "Belum termasuk harga domain",
      "Revisi 2x",
    ],
    recommended: false,
  },
  {
    name: "STANDARD",
    subtitle: "Web Statis Custom Template",
    price: "600rb - 1jt",
    icon: Zap,
    features: [
      "1 - 3 Halaman",
      "Design Custom Template",
      "Transisi & Animasi",
      "Mobile Friendly",
      "Belum termasuk harga domain",
      "Revisi 3x",
    ],
    recommended: true,
  },
  {
    name: "PRO",
    subtitle: " Web Static Full Custom",
    price: "1.5jt - 3jt",
    icon: BarChart3,
    features: [
      "3 - 5 Halaman",
      "Desain Eksklusif 100% Request",
      "Transisi & Animasi",
      "Mobile Friendly",
      "Belum termasuk harga domain",
      "Revisi 4x",
    ],
    recommended: false,
  },
  {
    name: "ADVANCED",
    subtitle: " Web Dinamis Full Custom",
    price: "4jt+",
    icon: Crown,
    features: [
      "5+ Halaman",
      "Mobile Friendly",
      "Dashboard Admin",
      "Integrasi & Fitur Bisnis Sesuai Request",
      "Belum termasuk harga domain",
      "Revisi 5x",
    ],
    recommended: false,
  },
];

type ProjectCategory = "Web" | "Mobile" | "UI/UX";

export const projectCategories: ProjectCategory[] = ["Web", "Mobile", "UI/UX"];

export interface Project {
  title: string;
  category: ProjectCategory;
  img: string;
  briefOverview: string;
  overview: string;
  keyFeatures: string[];
  techStack: string[];
  fullStackText: string;
}

export const projects = [
  {
    title: "Luhur Resto",
    category: "Web",
    img: "images/luhur-resto.webp",
    briefOverview:
      "Website landing page restoran Indonesia dengan tampilan elegan dan pengalaman reservasi modern.",

    overview:
      "Luhur Resto merupakan website landing page untuk restoran khas Indonesia yang dirancang untuk menampilkan identitas brand, menu unggulan, suasana restoran, serta memudahkan pelanggan melakukan reservasi dan eksplorasi menu secara digital.",

    keyFeatures: [
      "Hero section dengan visual makanan premium",
      "Menu showcase dan kategori makanan",
      "Section reservasi meja",
      "Responsive design untuk mobile dan desktop",
    ],

    techStack: ["React JS", "Tailwind CSS"],

    fullStackText: "Frontend Stack: React JS, Tailwind CSS",
  },

  {
    title: "Pawon Mataram",
    category: "Web",
    img: "images/pawon-mataram.webp",

    briefOverview:
      "Website restoran tradisional Jawa dengan pengalaman visual yang hangat dan autentik.",

    overview:
      "Pawon Mataram adalah website landing page yang menampilkan konsep kuliner tradisional Indonesia dengan desain modern. Fokus utama pada pengalaman pengguna untuk melihat menu, cerita brand, serta informasi lokasi restoran.",

    keyFeatures: [
      "Landing page dengan nuansa tradisional modern",
      "Galeri makanan dan suasana restoran",
      "Menu section interaktif",
      "Navigasi smooth dan mobile friendly",
    ],

    techStack: ["HTML", "CSS", "JavaScript"],

    fullStackText: "Frontend Stack: HTML, CSS, JavaScript",
  },

  {
    title: "Rental PS",
    category: "Web",
    img: "images/rental-ps.webp",

    briefOverview:
      "Website landing page penyewaan PlayStation dengan sistem informasi layanan dan paket bermain.",

    overview:
      "Rental PS adalah website untuk mempromosikan layanan penyewaan PlayStation dengan informasi paket bermain, fasilitas tempat, harga, serta kemudahan pelanggan dalam melakukan reservasi.",

    keyFeatures: [
      "Daftar paket rental dan harga",
      "Informasi fasilitas gaming",
      "CTA reservasi cepat",
      "Desain modern bertema gaming",
    ],

    techStack: ["React JS", "Tailwind CSS"],

    fullStackText: "Frontend Stack: React JS, Tailwind CSS",
  },

  {
    title: "Tourist Destination",
    category: "Web",
    img: "images/tourism.webp",

    briefOverview:
      "Website destinasi wisata untuk eksplorasi tempat menarik dengan pengalaman visual modern.",

    overview:
      "Tourist Destination adalah website eksplorasi wisata yang membantu pengguna menemukan destinasi populer melalui tampilan visual menarik, informasi destinasi, serta pengalaman navigasi yang responsif.",

    keyFeatures: [
      "Showcase destinasi wisata populer",
      "Section rekomendasi tempat wisata",
      "Layout responsif dan modern",
      "Animasi interaktif menggunakan Framer Motion",
    ],

    techStack: ["React JS", "Tailwind CSS", "Framer Motion"],

    fullStackText: "Frontend Stack: React JS, Tailwind CSS, Framer Motion",
  },
] satisfies Project[];

interface ProcessSteps {
  id: number;
  title: string;
  desc: string;
}

export const processSteps = [
  { id: 1, title: "Konsultasi", desc: "Diskusi kebutuhan website Anda" },
  { id: 2, title: "Pilih Paket", desc: "Tentukan paket yang sesuai" },
  { id: 3, title: "Pengerjaan", desc: "Kami mulai membuat website" },
  { id: 4, title: "Revisi", desc: "Revisi sesuai paket yang dipilih" },
  { id: 5, title: "Website Siap", desc: "Website siap digunakan" },
] satisfies ProcessSteps[];

interface Adventages {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const advantages = [
  {
    icon: Clock,
    title: "Pengerjaan Cepat",
    desc: "2 - 7 hari jadi",
  },
  {
    icon: CircleDollarSign,
    title: "Harga Terjangkau",
    desc: "Kualitas terbaik, harga bersahabat",
  },
  {
    icon: Layers,
    title: "Desain Modern",
    desc: "Tampilan elegan & profesional",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    desc: "Tampil sempurna di semua device",
  },
  {
    icon: Bell,
    title: "Support Responsif",
    desc: "Kami siap membantu Anda",
  },
] satisfies Adventages[];

interface Testimonials {
  text: string;
  author: string;
}

export const testimonials: Testimonials[] = [
  // {
  //   text: "Website dari ENVTEH membuat bisnis kami terlihat lebih profesional. Prosesnya cepat dan hasilnya memuaskan!",
  //   author: "Resto Nusantara",
  // },
  // {
  //   text: "Sangat puas dengan layanan ENVTEH. Timnya sangat responsif dan desainnya benar-benar modern.",
  //   author: "UMKM Maju Jaya",
  // },
  // {
  //   text: "Harga yang ditawarkan sangat kompetitif dengan kualitas yang luar biasa. Sangat direkomendasikan!",
  //   author: "Digital Creative Lab",
  // },
  // {
  //   text: "Mobile friendly banget! Website saya lancar dibuka di hp maupun laptop tanpa kendala.",
  //   author: "Toko Sembako Barokah",
  // },
];

type Faqs = {
  q: string;
  a: string;
};

export const faqs = [
  {
    q: "Berapa lama pengerjaan website?",
    a: "Tergantung paket dan kebutuhan, biasanya 2–7 hari untuk website sederhana.",
  },
  {
    q: "Berapa biaya pembuatan website?",
    a: "Menyesuaikan kebutuhan, tersedia beberapa paket mulai dari basic hingga custom.",
  },
  {
    q: "Apakah ada revisi?",
    a: "Tersedia revisi sesuai paket, dan kami memastikan hasil sesuai kebutuhan client.",
  },
  {
    q: "Apakah ada sistem pembayaran DP?",
    a: "Ya, pembayaran dilakukan dengan sistem DP di awal dan pelunasan setelah selesai.",
  },
  {
    q: "Apakah saya perlu paham teknis?",
    a: "Tidak, kami akan bantu dari awal hingga website siap digunakan.",
  },
  {
    q: "Apakah bisa bekerja sama dengan tim kami?",
    a: "Ya, kami dapat berkolaborasi dengan tim client seperti marketing, desain, atau IT untuk memastikan hasil sesuai kebutuhan dan tujuan bisnis.",
  },
  {
    q: "Apakah website dan aset menjadi milik client?",
    a: "Ya, website dan akses akan diserahkan sepenuhnya kepada client setelah project selesai.",
  },
  {
    q: "Apakah source code bisa diserahkan?",
    a: "Untuk project tertentu (custom), source code dapat diserahkan sesuai kesepakatan.",
  },
  {
    q: "Apakah termasuk domain & hosting?",
    a: "Tergantung paket, domain & hosting bisa disediakan atau menggunakan milik client.",
  },
  {
    q: "Apakah ada maintenance setelah selesai?",
    a: "Tersedia layanan maintenance opsional jika dibutuhkan.",
  },
  {
    q: "Apakah website bisa dikembangkan ke depan?",
    a: "Ya, website dapat dikembangkan sesuai kebutuhan. Untuk website berbasis template/web builder, pengembangan dapat dilakukan dengan batas tertentu, sedangkan untuk custom website lebih fleksibel untuk pengembangan jangka panjang.",
  },
  {
    q: "Apakah desain bisa custom?",
    a: "Tersedia opsi template maupun custom sesuai kebutuhan.",
  },
] satisfies Faqs[];

interface Socials {
  title: string;
  icon: IconType;
  url: string;
}

export const socials = [
  {
    title: "Tiktok",
    icon: FaTiktok,
    url: "https://www.tiktok.com/@envteh.group",
  },
  {
    title: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/envteh.group/",
  },
  {
    title: "Youtube",
    icon: FaYoutube,
    url: "https://www.youtube.com/@EnvTehGroup",
  },
] satisfies Socials[];
