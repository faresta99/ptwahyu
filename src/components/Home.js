"use client"

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#E0F7FA] dark:bg-[#002B36] text-[#004D40] dark:text-[#FFD700] min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-[url('/shrimp-farm.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Selamat Datang di PT. Sea Food Internasional</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">Produsen udang berkualitas tinggi dengan teknologi modern dan berkelanjutan.</p>
          <Link href="/about" className="mt-6 inline-block bg-[#FF8C00] dark:bg-[#FFD700] text-[#002B36] dark:text-[#002B36] px-6 py-3 rounded-lg font-semibold hover:bg-[#E67E22] dark:hover:bg-[#FFC107]">
            Pelajari Lebih Lanjut
          </Link>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Mengapa Memilih Kami?</h2>
        <p className="max-w-3xl mx-auto text-lg">Kami mengedepankan inovasi dan keberlanjutan dalam industri perikanan untuk menghasilkan udang berkualitas tinggi.</p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="max-w-sm p-6 bg-[#B2DFDB] dark:bg-[#004D40] shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Kualitas Premium</h3>
            <p>Udang kami diproses dengan standar internasional untuk memastikan kesegaran dan cita rasa terbaik.</p>
          </div>
          <div className="max-w-sm p-6 bg-[#B2DFDB] dark:bg-[#004D40] shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Teknologi Modern</h3>
            <p>Kami menerapkan sistem budidaya berkelanjutan dengan teknologi terbaru untuk efisiensi dan hasil maksimal.</p>
          </div>
          <div className="max-w-sm p-6 bg-[#B2DFDB] dark:bg-[#004D40] shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Ekspor Global</h3>
            <p>Produk kami telah dipercaya oleh berbagai pasar internasional di Asia, Eropa, dan Amerika.</p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-[#FF8C00] dark:bg-[#004D40] text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Hubungi Kami</h2>
        <p className="text-lg">Bergabunglah dengan kami untuk mendapatkan pasokan udang berkualitas terbaik.</p>
        <Link href="/contact" className="mt-6 inline-block bg-[#FFD700] dark:bg-[#FF8C00] text-[#002B36] dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FFC107] dark:hover:bg-[#E67E22]">
          Hubungi Sekarang
        </Link>
      </section>
    </div>
  );
}
