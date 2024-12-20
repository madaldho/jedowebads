import { Star, Quote } from "lucide-react";

interface Testimoni {
  name: string;
  role: string;
  content: string;
}

const Testimonis: Testimoni[] = [
  {
    name: "Novi",
    role: "Pemilik Toko Online",
    content:
      "Website saya kini sangat cepat dan responsif, hasilnya penjualan naik drastis!",
  },
  {
    name: "Yeni",
    role: "Digital Marketer",
    content:
      "Saya sangat puas dengan layanan mereka, desainnya profesional dan cepat diakses!",
  },
  {
    name: "Hidir",
    role: "Pemilik Alfayz Oud",
    content: "Timnya luar biasa, hasil kerja mereka sangat memuaskan.",
  },
];

export default function Testimoni() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Testimoni Pelanggan
        </h2>
        <h3 id="Testimoni" className="text-xl font-semibold text-center text-blue-600 mb-12 Testimoni">
         yang sudah pakai jasa website kami
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {Testimonis.map((Testimoni, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold text-xl">
                    {Testimoni.name[0]}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">{Testimoni.name}</h4>
                    <p className="text-gray-600 text-sm">{Testimoni.role}</p>
                  </div>
                </div>
                <Quote className="text-blue-300" size={24} />
              </div>
              <p className="text-gray-700 mb-4">{Testimoni.content}</p>
              <div className="flex text-yellow-400">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

