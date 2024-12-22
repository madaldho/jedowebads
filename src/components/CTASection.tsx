import { Clock, Check, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <div className="bg-blue-50 py-16">
      
      <div className="container mx-auto px-4">
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">
            Siap Tingkatkan Website Anda Sekarang?
          </h2>
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Harga Spesial Hanya{" "}
              <span className="text-green-600">Rp660.000</span>!
            </h3>
            <div className="mb-6">
              <p className="text-2xl text-gray-500 line-through">Rp1.200.000</p>
              <p className="text-5xl font-extrabold text-red-600">Rp660.000</p>
              <p className="text-sm text-gray-700 mt-2">
                Diskon besar untuk waktu terbatas!
              </p>
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
                <span>
                  Desain profesional dengan coding berkualitas tinggi.
                </span>
              </li>
            </ul>
            <motion.a
      href="https://wa.me/6282128582738?text=Hallo%20Jedo%20Web,%20Saya%20mau%20Buat%20Websitenya%20dong,%20Terima%20Kasih"
      className="bg-red-600 text-white font-bold py-4 px-8 rounded-full text-xl flex items-center justify-center mx-auto"
      whileHover={{
        scale: 1.1,
        backgroundColor: "#dc2626", // Darker red on hover
        boxShadow: "0px 0px 10px rgb(220, 38, 38)",
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{ duration: 0.3 }}
    >
      Pesan Sekarang dan Wujudkan Website Impian Anda
      <ArrowRight className="ml-2" />
    </motion.a>
          </div>
          <div className="mt-8 text-xl font-semibold text-red-600 flex items-center justify-center">
            <Clock className="mr-2" />
            <span>Jangan Tunda Lagi! Penawaran ini berakhir dalam:</span>
          </div>
          <div className="text-5xl font-extrabold text-red-600 mt-4 bg-yellow-100 py-4 px-8 rounded-xl inline-block shadow-lg">
            {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
            <div className="text-center text-2xl font-bold text-yellow-800">
              Penawaran Spesial: Pesan sekarang dan dapatkan semuanya hanya
              dengan <span className="text-green-600">Rp660.000!</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
