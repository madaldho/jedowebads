import { motion } from "framer-motion";

const Header = () => {
    return (
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Website Super Cepat,<br />Bisnis Anda <span className="text-yellow-300">Melesat!</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hindari kehilangan pelanggan karena website lambat. Tingkatkan kecepatan, tingkatkan keuntungan!
          </p>
          <a href="#Testimoni" className="bg-yellow-400 text-gray-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition duration-300 shadow-lg">
            Pesan Sekarang 
          </a>
          <motion.img 
          src="/herojedoweb1.webp" 
          alt="hero jedo web 1" loading='eager'
          className="md:w-4/6 w-auto flex mx-auto py-10 rounded-3xl"
          animate={{ y: [0, -10, 0] }} // Gerakan naik-turun
          transition={{
            duration: 3, // Durasi satu siklus animasi
            repeat: Infinity, // Ulangi animasi tanpa henti
            repeatType: "loop", // Jenis pengulangan
          }}
        />
         
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-20"></div>
      </header>


    );
  };

  export default Header