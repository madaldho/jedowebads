import {
  Zap,
  Globe,
  Paintbrush,
  Search,
  Smartphone,
  HeadphonesIcon,
  BarChart,
  Users,
  ArrowBigUpDash,
} from "lucide-react";

const Fitur = () => {
  return (
    <>
      <section className="mb-12 md:px-20 px-3 pt-20" >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Kami Ada Untuk Membantu Anda
        </h2>
        <div className="text-3xl font-bold text-center text-blue-600 mb-10">
          Yang Anda Dapatkan dari Jasa Kami 
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Zap className="text-yellow-500 mr-3" size={24} />
              <div className="text-xl font-semibold">Website Super Cepat</div>
            </div>
            <p className="text-gray-600">
              Dimuat dalam waktu kurang dari 3 detik untuk pengalaman pengguna
              yang luar biasa.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Globe className="text-green-500 mr-3" size={24} />
              <div className="text-xl font-semibold">Gratis Hosting & Domain</div>
            </div>
            <p className="text-gray-600">
              Kami memberikan hosting dan domain selama 1 tahun GRATIS.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Paintbrush className="text-purple-500 mr-3" size={24} />
              <div className="text-xl font-semibold">Desain Profesional</div>
            </div>
            <p className="text-gray-600">
              Dibuat oleh tim ahli dengan coding yang rapi dan scalable.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Search className="text-blue-500 mr-3" size={24} />
              <div className="text-xl font-semibold">SEO Friendly</div>
            </div>
            <p className="text-gray-600">
              Optimasi kecepatan dan desain untuk membantu website Anda tampil
              di halaman teratas Google.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Smartphone className="text-red-500 mr-3" size={24} />
              <div className="text-xl font-semibold">Mobile-Responsive</div>
            </div>
            <p className="text-gray-600">
              Tampil sempurna di perangkat apa pun, kapan saja.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <ArrowBigUpDash className="text-indigo-500 mr-3" size={24} />
              <div className="text-xl font-semibold">Performa Cepat</div>
            </div>
            <p className="text-gray-600">
            Performa yang bisa di adu dengan website lain nya
            </p>
          </div>
        </div>
      </section>
      <section className="bg-blue-50 rounded-lg p-8 mb-12">
        <div className="text-3xl font-bold text-center text-blue-800 mb-6">
          Keuntungan Utama Yang Kamu Dapatkan
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <BarChart className="mx-auto text-blue-600 mb-4" size={48} />
            <p className="text-lg font-semibold text-gray-800">
              Meningkatkan konversi hingga 35%.
            </p>
          </div>
          <div className="text-center">
            <Search className="mx-auto text-blue-600 mb-4" size={48} />
            <p className="text-lg font-semibold text-gray-800">
              Meningkatkan peringkat SEO untuk mendatangkan lebih banyak
              traffic.
            </p>
          </div>
          <div className="text-center">
            <Users className="mx-auto text-blue-600 mb-4" size={48} />
            <p className="text-lg font-semibold text-gray-800">
              Memberikan kesan profesional kepada pelanggan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fitur
