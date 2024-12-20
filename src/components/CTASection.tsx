import { Clock, Check, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Image } from 'astro:assets';

export default function CTASection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (
          prevTime.days === 0 &&
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(timer);
          return prevTime;
        }

        let newTime = { ...prevTime };
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else if (newTime.minutes > 0) {
          newTime.minutes--;
          newTime.seconds = 59;
        } else if (newTime.hours > 0) {
          newTime.hours--;
          newTime.minutes = 59;
          newTime.seconds = 59;
        } else if (newTime.days > 0) {
          newTime.days--;
          newTime.hours = 23;
          newTime.minutes = 59;
          newTime.seconds = 59;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <img loading='lazy' className='flex m-auto w-auto h-1/6' src="/herofast.webp" alt="herojedoweb" />
      <div className="container mx-auto px-4">
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Siap Tingkatkan Website Anda Sekarang?</h2>
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Harga Spesial Hanya <span className="text-green-500">Rp600.000</span>!
            </h3>
            <div className="mb-6">
              <p className="text-2xl text-gray-500 line-through">Rp1.200.000</p>
              <p className="text-5xl font-extrabold text-red-600">Rp660.000</p>
              <p className="text-sm text-gray-700 mt-2">Diskon besar untuk waktu terbatas!</p>
            </div>
            <ul className="text-left text-lg mb-8">
              <li className="flex items-center mb-4">
                <Check className="text-green-500 mr-2" />
                <span>Website cepat dan optimal.</span>
              </li>
              <li className="flex items-center mb-4">
                <Check className="text-green-500 mr-2" />
                <span>Gratis hosting & domain.com .</span>
              </li>
              <li className="flex items-center mb-4">
                <Check className="text-green-500 mr-2" />
                <span>Desain profesional dengan coding berkualitas tinggi.</span>
              </li>
            </ul>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mx-auto">
              Pesan Sekarang dan Wujudkan Website Impian Anda
              <ArrowRight className="ml-2" />
            </button>
          </div>
          <div className="mt-8 text-xl font-semibold text-red-600 flex items-center justify-center">
            <Clock className="mr-2" />
            <span>Jangan Tunda Lagi! Penawaran ini berakhir dalam:</span>
          </div>
          <div className="text-5xl font-extrabold text-red-600 mt-4 bg-yellow-100 py-4 px-8 rounded-xl inline-block shadow-lg">
            {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
           
            <div className="text-center text-2xl font-bold text-yellow-800">
              Penawaran Spesial: Pesan sekarang dan dapatkan semuanya hanya dengan <span className="text-green-600">Rp600.000!</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}