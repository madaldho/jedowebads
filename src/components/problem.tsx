import { ArrowRight, AlertTriangle, XCircle } from 'lucide-react'

const Problem = () => {
  return (
    <section className="py-20 px-4 text-center bg-gray-100">
        <img loading='lazy' className='flex m-auto h-80' src="/weblambat.webp" alt="hero Jedo Web 1" />
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Apakah Website Anda <span className="text-red-500">Lambat?</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-xl font-semibold mb-2">Pelanggan Pergi</div>
            <p className="text-gray-600">
              <span className="text-red-500 font-bold">83% Pengguna</span> meninggalkan website yang butuh lebih dari 3 detik untuk dimuat.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-xl font-semibold mb-2">Pendapatan Menurun</div>
            <p className="text-gray-600">
              Website lambat membuat pelanggan frustrasi dan mengurangi pendapatan bisnis Anda.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-xl font-semibold mb-2">SEO Terganggu</div>
            <p className="text-gray-600">
              Google lebih menyukai website cepat, artinya SEO Anda akan terganggu jika website lambat.
            </p>
          </div>
        </div>

        <div className='md:px-40 py-14'>
        <div className="bg-red-50 rounded-lg p-6 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
            <AlertTriangle className="mr-2" /> Kenyataan Pahit
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Website lambat bisa menghancurkan reputasi online Anda.</p>
            </li>
            <li className="flex items-start">
              <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Google lebih menyukai website cepat, artinya SEO Anda akan terganggu jika website lambat.</p>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50  rounded-lg p-6 mb-3 shadow-xl ">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4 flex items-center">Bayangkan Jika:</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Pengunjung Anda dengan mudah meninggalkan website Anda untuk pesaing.</p>
            </li>
            <li className="flex items-start">
              <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Anda kehilangan potensi penjualan setiap detik karena website yang tidak optimal.</p>
            </li>
          </ul>
        </div>
        </div>
       
      </div>
    </section>
  );
};


export default Problem