import { motion } from "motion/react";
import { 
  Rocket, 
  Search, 
  Smartphone, 
  Layers, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  MessageSquare,
  ChevronRight,
  Menu,
  X,
  Star,
  Plus,
  Instagram,
  ArrowRight,
  ExternalLink,
  Zap,
  Globe,
  Monitor
} from "lucide-react";
import { useState, useEffect } from "react";
import React from 'react';

// --- Types ---
interface NavLink {
  name: string;
  href: string;
}

interface Service {
  icon: any;
  title: string;
  description: string;
  benefit: string;
}

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

interface Testimonial {
  name: string;
  business: string;
  comment: string;
  rating: number;
  image: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- Data ---
const navLinks: NavLink[] = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Proses", href: "#process" },
  { name: "Harga", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

const services: Service[] = [
  {
    icon: Rocket,
    title: "Landing Page",
    description: "Website satu halaman yang fokus pada konversi iklan dan promosi produk spesifik.",
    benefit: "Meningkatkan ROI iklan Anda hingga 2x lipat."
  },
  {
    icon: Globe,
    title: "Company Profile",
    description: "Membangun kredibilitas brand dengan informasi lengkap tentang bisnis Anda.",
    benefit: "Pelanggan lebih yakin dan percaya bertransaksi."
  },
  {
    icon: Monitor,
    title: "Website Katalog",
    description: "Tampilkan seluruh produk Anda dengan rapi tanpa fitur checkout rumit.",
    benefit: "Memudahkan pelanggan melihat pilihan produk."
  },
  {
    icon: Layers,
    title: "Toko Online",
    description: "Sistem ecommerce lengkap dengan manajemen stok, ongkir, dan payment gateway.",
    benefit: "Jualan 24/7 otomatis tanpa admin manual."
  },
  {
    icon: Users,
    title: "Website Portofolio",
    description: "Khusus untuk personal brand atau agency yang ingin pamer karya terbaik.",
    benefit: "Menampilkan profesionalisme kelas atas."
  },
  {
    icon: Zap,
    title: "Custom Website",
    description: "Solusi web unik dengan fitur khusus sesuai kebutuhan spesifik bisnis UMKM.",
    benefit: "Fleksibilitas total untuk inovasi bisnis."
  }
];

const portfolioItems: PortfolioItem[] = [
  { 
    title: "Plantastics Garden", 
    category: "Garden/Florist", 
    description: "E-commerce tanaman hias modern dan edukasi perawatan tanaman untuk pecinta alam.", 
    image: "/src/assets/images/regenerated_image_1778250166735.png",
    link: "https://plantasticgarden.lovable.app/"
  },
  { title: "Nusantara Coffee", category: "Cafe", description: "Aesthetic cafe website for the digital generation.", image: "/src/assets/images/regenerated_image_1778250169678.png", link: "https://di-sebelah-rumah.vercel.app/" },
  { title: "Sakti Contractor", category: "Kontraktor", description: "Professional portfolio for construction branding.", image: "/src/assets/images/regenerated_image_1778249458862.png" },
  { title: "Luxe Fashion", category: "Fashion", description: "Minimalist online shop for luxury apparel.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop" },
  { title: "Advisory Legal", category: "Jasa", description: "Trustworthy corporate identity for law firms.", image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop" },
  { title: "Fresh Groceries", category: "Ecommerce", description: "Fast-loading app for daily essentials.", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop" },
];

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "500K",
    features: ["1 Halaman (Landing Page)", "Mobile Friendly", "Integrasi WhatsApp", "Keamanan SSL", "Free Domain & Hosting (1thn)"]
  },
  {
    name: "Business",
    price: "1JT",
    recommended: true,
    features: ["Hingga 5 Halaman", "Desain Premium", "SEO Basic", "Copywriting Persuasif", "Free Domain & Hosting", "Maintenance 3 Bulan"]
  },
  {
    name: "Advance",
    price: "2.5JT",
    features: ["Toko Online / Katalog", "Fitur Manajemen Produk", "Payment Gateway", "Training Penggunaan", "SEO Optimization", "Maintenance 6 Bulan"]
  }
];

const testimonials: Testimonial[] = [
  {
    name: "Siska Amelia",
    business: "Owner Bloom Florist",
    image: "https://i.pravatar.cc/150?u=siska",
    comment: "Awalnya skeptis web bisa bantu jualan, tapi pas liat hasilnya NusaWebWorks emang beda. Bersih, cepet, dan yang paling penting customer jadi lebih percaya buat transfer.",
    rating: 5
  },
  {
    name: "Budi Santoso",
    business: "Founder Kopi Kita",
    image: "https://i.pravatar.cc/150?u=budi",
    comment: "Website-nya super cepat dan keren banget desainnya. Gak nyesel pilih paket Business, bener-bener ngerubah image brand saya jadi lebih premium.",
    rating: 5
  },
  {
    name: "Andi Wijaya",
    business: "Sakti Contractor",
    image: "https://i.pravatar.cc/150?u=andi",
    comment: "Simpel, elegan, dan profesional. Adminnya ramah banget, dibantu dari awal sampe webnya live. Recommended banget buat UMKM yang mau go digital.",
    rating: 5
  },
  {
    name: "Rina Kartika",
    business: "Dapur Manis",
    image: "https://i.pravatar.cc/150?u=rina",
    comment: "Gak nyangka dapet web sekelas agency besar dengan harga yang sangat terjangkau. Sekarang pesanan catering masuk terus lewat WhatsApp!",
    rating: 5
  },
  {
    name: "Faris Pratama",
    business: "Auto Glow Detailing",
    image: "https://i.pravatar.cc/150?u=faris",
    comment: "Tampilannya modern banget, beda sama jasa web lain yang template-an. Customer saya sering muji webnya loadingnya kenceng di HP.",
    rating: 5
  },
  {
    name: "Maya Sari",
    business: "Luxe Fashion Hub",
    image: "https://i.pravatar.cc/150?u=maya",
    comment: "Fitur katalog produknya rapih banget. Memudahkan banget buat kasih liat koleksi terbaru ke pembeli tanpa harus spam di grup WA.",
    rating: 5
  }
];

const faqs: FAQItem[] = [
  { question: "Berapa lama waktu pengerjaan?", answer: "Sangat singkat! Mulai dari 1-3 hari saja tergantung paket yang Anda pilih." },
  { question: "Apakah bisa revisi jika desain belum cocok?", answer: "Tentu saja! Kami memberikan garansi revisi gratis sampai website benar-benar sesuai keinginan Anda." },
  { question: "Sudah termasuk Domain dan Hosting?", answer: "Sudah! Semua paket kami sudah termasuk Domain (.com/.id) dan Cloud Hosting kencang selama 1 tahun pertama." },
  { question: "Apakah website bisa dibuka lancar di HP?", answer: "100% Mobile Friendly. Kami mengutamakan tampilan mobile karena 80%+ pelanggan Anda menggunakan HP." },
  { question: "Bisa bantu upload konten atau produk?", answer: "Bisa banget! Kami berikan layanan input konten awal agar Anda terima bersih pas launching." },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoUrl = "/src/assets/images/regenerated_image_1778251094488.jpg";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-teal-600/20">
            <img src={logoUrl} alt="NusaWebWorks Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tight text-slate-900">NusaWebWorks</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-600 hover:text-teal-600 font-medium transition-colors">
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/6289501972139" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary py-2 px-6 text-sm"
          >
            Konsultasi Gratis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700">
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/6289501972139" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary w-full"
          >
            Konsultasi Gratis
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/6289501972139" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
  >
    <div className="absolute -top-12 right-0 bg-white text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      Tanya Kami Sekarang!
    </div>
    <MessageSquare className="w-8 h-8" />
  </a>
);

export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <WhatsAppButton />

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              >
                <Zap className="w-3 h-3" /> Digital Excellence For UMKM
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-slate-900"
              >
                Website Profesional untuk UMKM yang <span className="text-gradient">Ingin Naik Kelas.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
              >
                Kami membantu bisnis tampil lebih profesional, dipercaya pelanggan, dan lebih mudah mendapatkan penjualan melalui website modern yang cepat, mobile-friendly, dan siap berkembang.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <a 
                  href="https://wa.me/6289501972139" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary w-full sm:w-auto"
                >
                  Konsultasi Gratis <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#portfolio" className="btn-outline w-full sm:w-auto">
                  Lihat Portofolio
                </a>
              </motion.div>
            </div>

            <div className="flex-1 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
                    alt="Premium Dashboard Mockup" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                
                {/* Floating Badges */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl flex items-center gap-3"
                >
                  <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><Smartphone className="w-5 h-5"/></div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Ready</div>
                    <div className="text-sm font-bold text-slate-800 tracking-tight">Mobile Friendly</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-10 -left-10 glass-card p-4 rounded-2xl flex items-center gap-3"
                >
                  <div className="p-2 bg-teal-100 rounded-lg text-teal-600"><Zap className="w-5 h-5"/></div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Performance</div>
                    <div className="text-sm font-bold text-slate-800 tracking-tight">Fast Loading</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 -right-12 glass-card p-4 rounded-2xl flex items-center gap-3"
                >
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Search className="w-5 h-5"/></div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Google</div>
                    <div className="text-sm font-bold text-slate-800 tracking-tight">SEO Ready</div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Background Glow */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-400/20 rounded-full blur-[100px]"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-[100px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Section */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-sm uppercase font-bold text-slate-400 tracking-widest mb-2">Powering Modern Business</h3>
              <p className="text-slate-800 font-display font-medium text-lg italic">"Dipercaya berbagai UMKM modern di Indonesia"</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">99%</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Responsive Design</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">0.8s</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Fast Performance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">Gold</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Modern UI Style</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">Top 1</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">SEO Friendly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs uppercase font-bold text-teal-600 tracking-widest mb-4">Layanan Unggulan</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Solusi Website Modern untuk Setiap Kebutuhan Bisnis</h3>
            <p className="text-slate-600 text-lg">Pilih jenis website yang paling sesuai dengan strategi pertumbuhan bisnis Anda saat ini.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[32px] premium-shadow border border-gray-100 group transition-all"
              >
                <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="pt-6 border-t border-gray-50">
                  <div className="text-[10px] uppercase font-bold text-teal-600 mb-2">Benefit Bisnis:</div>
                  <p className="text-sm font-medium text-slate-800 italic">{service.benefit}</p>
                </div>
                <a 
                  href="https://wa.me/6289501972139" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-8 flex items-center gap-2 text-teal-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all"
                >
                  Pesan Sekarang <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Benefit Section */}
      <section className="py-24 bg-white overflow-hidden text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-32">
            <div>
              <h2 className="text-xs uppercase font-bold text-emerald-600 tracking-widest mb-4">Mengapa UMKM Butuh Website?</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">Ubah UMKM Anda Menjadi Brand Internasional</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 text-left">
                {[
                  { title: "Lebih Dipercaya Pelanggan", desc: "Bisnis dengan website dianggap 3x lebih profesional dibanding yang hanya pakai sosmed." },
                  { title: "Mudah Ditemukan di Google", desc: "Tampil saat calon pembeli mencari produk Anda di pencarian Google." },
                  { title: "Sistem Order 24 Jam Otomatis", desc: "Terima pesanan kapan saja tanpa harus stand-by membalas chat satu per satu." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4 p-8 bg-slate-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div>
              <h2 className="text-xs uppercase font-bold text-teal-600 tracking-widest mb-4">Meningkatkan Penjualan</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">Website Cepat, Penjualan Meningkat Pesat</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 text-left">
                {[
                  { title: "Tampilan Bisnis Modern", desc: "Branding kelas atas yang membuat harga produk Anda layak dijual lebih mahal." },
                  { title: "Meningkatkan Penjualan", desc: "Konversi pengunjung menjadi pembeli dengan teknik UI/UX psychological trigger." },
                  { title: "Insight Data Pengunjung", desc: "Pahami perilaku pelanggan untuk strategi marketing yang lebih tepat sasaran." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4 p-8 bg-teal-50/50 rounded-3xl border border-teal-100 hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center">
                      <TrendingUp className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16 flex justify-center">
                <a 
                  href="https://wa.me/6289501972139" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary inline-flex"
                >
                  Konsultasi Strategi Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Portfolio Section */}
      <section id="portfolio" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-xs uppercase font-bold text-teal-400 tracking-widest mb-4">Portfolio Unggulan</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-0">Showcase Karya Terbaik Kami</h3>
            </div>
            <a href="https://instagram.com/nusawebworks" className="flex items-center gap-2 text-teal-400 font-bold hover:gap-3 transition-all">
              Lihat di Instagram <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {portfolioItems.map((item, idx) => (
               <motion.div 
                key={idx}
                id={`portfolio-card-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5]"
               >
                 <img 
                   id={`portfolio-image-${idx}`}
                   src={item.image} 
                   alt={item.title} 
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                 />
                 {/* Visual Gradient Overlay - Pointer events disabled so image is selectable */}
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent pointer-events-none"></div>
                 
                 {/* Content Wrapper */}
                 <div className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none">
                    <div className="pointer-events-auto">
                      <div className="text-[10px] uppercase font-bold text-teal-400 mb-1 tracking-widest">{item.category}</div>
                      <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                      <p className="text-slate-300 text-sm mb-6 line-clamp-2 transition-all duration-500">{item.description}</p>
                      <div className="flex items-center gap-4 transition-all duration-500">
                        <a 
                          href={item.link || "#"} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-5 py-2 bg-white text-slate-900 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-teal-400 hover:scale-105 transition-all shadow-lg"
                        >
                          Visit Site <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. Before After Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
             <h2 className="text-xs uppercase font-bold text-teal-600 tracking-widest mb-4">Transformasi Brand</h2>
             <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Dari Bisnis Biasa menjadi Brand Profesional</h3>
             <p className="text-slate-600 italic">"Visual adalah segalanya di dunia digital modern."</p>
          </div>

          <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
             <div className="relative group rounded-3xl overflow-hidden border border-gray-200">
               <div className="absolute top-6 left-6 z-10 px-4 py-1 bg-red-500 text-white text-xs font-bold rounded-full uppercase">Sebelum</div>
               <img 
                 id="before-image"
                 src="/src/assets/images/regenerated_image_1778250161202.png" 
                 alt="Old Website Version" 
                 className="aspect-video w-full object-cover opacity-50 grayscale" 
               />
               <div className="p-8 bg-slate-50 border-t border-gray-200">
                 <h4 className="font-bold text-slate-800">Visual Usang</h4>
                 <p className="text-sm text-slate-500">Sulit menarik pelanggan baru secara online.</p>
               </div>
             </div>

             <div className="relative group rounded-3xl overflow-hidden border-2 border-teal-500 shadow-2xl">
               <div className="absolute top-6 left-6 z-10 px-4 py-1 bg-teal-500 text-white text-xs font-bold rounded-full uppercase">Sesudah</div>
               <img 
                 id="after-image"
                 src="/src/assets/images/regenerated_image_1778250163733.png" 
                 alt="Premium Website" 
                 className="aspect-video w-full object-cover" 
               />
               <div className="p-8 bg-teal-600 text-white">
                 <h4 className="font-bold text-white">Premium UI/UX</h4>
                 <p className="text-sm text-teal-100">Konversi tinggi, Brand eksklusif, Pelanggan jatuh cinta.</p>
               </div>
             </div>

             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex w-16 h-16 bg-white rounded-full items-center justify-center shadow-xl border border-gray-100 z-20">
               <Zap className="text-teal-600 w-8 h-8 fill-teal-600" />
             </div>
          </div>
        </div>
      </section>

      {/* 7. Process Section */}
      <section id="process" className="py-24 bg-teal-50/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-xs uppercase font-bold text-teal-600 tracking-widest mb-4">Alur Kerja Kami</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Proses Transparan dan Cepat</h3>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 bg-dashed-teal"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
              {[
                { title: "Konsultasi", icon: MessageSquare, color: "bg-teal-500" },
                { title: "Desain", icon: Layers, color: "bg-emerald-500" },
                { title: "Development", icon: Rocket, color: "bg-blue-500" },
                { title: "Revisi", icon: CheckCircle2, color: "bg-indigo-500" },
                { title: "Launching", icon: Zap, color: "bg-orange-500" },
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center shadow-lg mb-6 ring-8 ring-white`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="text-slate-400 font-bold text-xs uppercase mb-1">Langkah {i+1}</div>
                  <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-xs uppercase font-bold text-teal-600 tracking-widest mb-4">Investasi Bisnis</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Harga Transparan untuk UMKM Modern</h3>
            <p className="text-slate-500">Tanpa biaya tersembunyi. Investasi terbaik untuk masa depan digital brand Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {pricingPlans.map((plan, idx) => (
               <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className={`relative p-10 rounded-[40px] border flex flex-col ${plan.recommended ? "border-teal-500 shadow-2xl bg-slate-950 text-white" : "border-gray-100 bg-white"}`}
               >
                 {plan.recommended && (
                   <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-emerald-500 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                     Paling Diminati
                   </div>
                 )}
                 <h4 className={`text-xl font-bold mb-2 ${plan.recommended ? "text-teal-400" : "text-slate-900"}`}>{plan.name}</h4>
                 <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-sm font-bold opacity-60">Mulai dari</span>
                    <span className="text-5xl font-bold">IDR {plan.price}</span>
                 </div>
                 <ul className="space-y-4 mb-10 flex-1">
                   {plan.features.map((feat, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm">
                       <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${plan.recommended ? "text-teal-400" : "text-teal-600"}`} />
                       <span className={plan.recommended ? "text-slate-300" : "text-slate-600"}>{feat}</span>
                     </li>
                   ))}
                 </ul>
                  <a 
                    href="https://wa.me/6289501972139" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all ${plan.recommended ? "bg-teal-500 hover:bg-teal-600 text-white" : "border-2 border-teal-600 text-teal-600 hover:bg-teal-50"}`}
                  >
                   Pesan Sekarang <ArrowRight className="w-4 h-4" />
                 </a>
               </motion.div>
             ))}
          </div>
          <p className="text-center mt-12 text-slate-400 text-sm font-medium italic">
            * Harga dapat berubah tergantung kompleksitas fitur dan kebutuhan bisnis spesifik Anda.
          </p>
        </div>
      </section>

      {/* 9. Testimonial Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-xs uppercase font-bold text-teal-600 tracking-widest mb-4">Kisah Sukses UMKM</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Dipercaya oleh Bisnis di Seluruh Indonesia</h3>
              <p className="text-slate-500">Lihat apa kata mereka tentang layanan kami.</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  const slider = document.getElementById('testimonial-slider');
                  if (slider) slider.scrollBy({ left: -400, behavior: 'smooth' });
                }}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-teal-600 hover:text-white transition-all text-slate-900"
              >
                <ArrowRight className="w-6 h-6 rotate-180" />
              </button>
              <button 
                onClick={() => {
                  const slider = document.getElementById('testimonial-slider');
                  if (slider) slider.scrollBy({ left: 400, behavior: 'smooth' });
                }}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-teal-600 hover:text-white transition-all text-slate-900"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div 
            id="testimonial-slider"
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          >
             {testimonials.map((testi, idx) => (
               <motion.div 
                key={idx} 
                className="snap-center bg-white p-10 rounded-[32px] premium-shadow border border-gray-50 flex flex-col items-center text-center min-w-[320px] md:min-w-[450px]"
               >
                 <div className="flex gap-1 mb-6 text-yellow-400">
                    {[...Array(testi.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                 </div>
                 <p className="text-slate-600 mb-8 italic text-lg leading-relaxed">"{testi.comment}"</p>
                 <div className="mt-auto">
                    <img src={testi.image} alt={testi.name} className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-teal-50" />
                    <h4 className="font-bold text-slate-900">{testi.name}</h4>
                    <p className="text-xs font-bold text-teal-600 uppercase tracking-widest">{testi.business}</p>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase font-bold text-teal-600 tracking-widest mb-4">FAQ</h2>
            <h3 className="text-4xl font-bold text-slate-900">Pertanyaan yang Sering Diajukan</h3>
          </div>
          
          <div className="space-y-4">
             {faqs.map((faq, idx) => (
               <FAQItemComp key={idx} faq={faq} />
             ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative bg-slate-950 rounded-[60px] p-12 md:p-24 overflow-hidden text-center text-white">
             {/* Abstract Shapes */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px]"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"></div>
             
             <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
             >
                <h2 className="text-4xl md:text-7xl font-bold mb-8 transition-all">UMKM Modern Butuh <br /><span className="text-teal-400 italic">Website Modern.</span></h2>
                <p className="text-slate-400 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
                  Bangun kepercayaan pelanggan dan tingkatkan penjualan dengan website profesional dari <span className="text-white font-bold">NusaWebWorks.</span>
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a 
                    href="https://wa.me/6289501972139" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary py-5 px-12 text-lg w-full sm:w-auto"
                  >
                    Konsultasi Gratis Sekarang
                  </a>
                  <a 
                    href="https://wa.me/6289501972139" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-teal-400 font-bold text-lg hover:gap-3 transition-all"
                  >
                    Chat via WhatsApp <ArrowRight className="w-6 h-6" />
                  </a>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 12. Footer */}
      <footer className="bg-slate-50 pt-24 pb-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-teal-600/20">
                  <img src="/src/assets/images/regenerated_image_1778251093943.jpg" alt="NusaWebWorks Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-2xl font-display font-bold tracking-tight text-slate-900">NusaWebWorks</span>
              </a>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Membantu UMKM Indonesia naik kelas melalui solusi website profesional, modern, dan berorientasi hasil.
              </p>
              <div className="flex items-center gap-4">
                 {[Instagram, MessageSquare].map((Icon, i) => (
                   <a 
                     key={i} 
                     href={i===0 ? "https://instagram.com/nusawebworks" : "https://wa.me/6289501972139"} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center text-slate-600 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all"
                   >
                     <Icon className="w-5 h-5" />
                   </a>
                 ))}
              </div>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Navigasi</h5>
              <ul className="space-y-4 text-slate-600 font-medium">
                {navLinks.map(link => <li key={link.name}><a href={link.href} className="hover:text-teal-600 transition-colors">{link.name}</a></li>)}
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Layanan</h5>
              <ul className="space-y-4 text-slate-600 font-medium">
                {services.slice(0, 4).map(s => <li key={s.title}><a href="#" className="hover:text-teal-600 transition-colors">{s.title}</a></li>)}
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Hubungi Kami</h5>
              <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex flex-col">
                   <span className="text-[10px] uppercase font-bold text-teal-600 mb-1">WhatsApp</span>
                   <a 
                     href="https://wa.me/6289501972139" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="hover:text-teal-600"
                   >
                     +62 895-0197-2139
                   </a>
                </li>
                <li className="flex flex-col">
                   <span className="text-[10px] uppercase font-bold text-teal-600 mb-1">Instagram</span>
                   <a href="https://instagram.com/nusawebworks" className="hover:text-teal-600">@nusawebworks</a>
                </li>
                <li className="flex flex-col">
                   <span className="text-[10px] uppercase font-bold text-teal-600 mb-1">Email</span>
                   <a href="mailto:hello@nusawebworks.com" className="hover:text-teal-600">hello@nusawebworks.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm font-medium uppercase tracking-tight">
              © 2026 NusaWebWorks. All rights reserved.
            </p>
            <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FAQItemComp = ({ faq }: { faq: FAQItem, key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="text-lg font-bold text-slate-800">{faq.question}</span>
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          <Plus className="w-6 h-6 text-teal-600" />
        </div>
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="px-6 pb-6 text-slate-500 leading-relaxed font-medium"
        >
          {faq.answer}
        </motion.div>
      )}
    </div>
  );
};
