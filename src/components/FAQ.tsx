import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Berapa estimasi waktu pembuatan website?",
    answer: "Estimasi waktu pembuatan website adalah 1-3 hari kerja. Jika ada gangguan atau keterlambatan, kami akan segera menginformasikan kepada Anda."
  },
  {
    question: "Apa saja yang termasuk dalam harga layanan?",
    answer: "Harga sudah mencakup domain selama 1 tahun, hosting, dan file coding mentahan. Akses penuh hanya dimiliki oleh kami, namun Anda akan mendapatkan file coding mentahan untuk diunduh."
  },
  {
    question: "Apakah saya bisa mengubah atau memodifikasi website sendiri?",
    answer: "Bisa dengan file mentahan coding yang kami berikan, Untuk perubahan atau modifikasi fitur Lanjutan baru ke kami, Anda dapat menghubungi kami dengan biaya tambahan."
  },
  {
    question: "Bagaimana jika saya ingin akses penuh ke hosting dan domain?",
    answer: "Untuk akses penuh ke hosting dan domain, kami menawarkan opsi dengan biaya tambahan. Silakan hubungi kami untuk detail lebih lanjut."
  },
  {
    question: "Apakah layanan termasuk dukungan teknis setelah website selesai?",
    answer: "Layanan kami hanya mencakup pengiriman coding mentahan. Dukungan teknis setelah website selesai dapat diberikan dengan biaya tambahan sesuai kesepakatan."
  },

];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prevOpenItems =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter(item => item !== index)
        : [...prevOpenItems, index]
    );
  };

  return (
    <section id="faq" className="py-16 md:px-40  bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-blue-800 hover:text-blue-600 transition-colors duration-300">
        Pertanyaan Yang 
          </span>{" "}
          <span className="text-black hover:text-gray-700 transition-colors duration-300">
          Sering Ditanyakan
          </span>
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium text-lg">{item.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${openItems.includes(index) ? 'transform rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {openItems.includes(index) && (
                <div className="p-4 bg-white">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

