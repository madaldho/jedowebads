import { defaults, use } from "marked";
import { useEffect, useState } from "react";
useState

const Trust = () => {
    const [counts, setCounts] = useState({ clients: 0, satisfaction: 0, speedIncrease: 0 });
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setCounts({ clients: 5, satisfaction: 100, speedIncrease:3 });
      }, 500);
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">{counts.clients}+</h3>
              <p className="text-lg">Tahun Pengalaman</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">{counts.satisfaction}%</h3>
              <p className="text-lg">Kepuasan Dijamin</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2"> &lt;{counts.speedIncrease} Detik</h3>
              <p className="text-lg">Rata-rata Load Web Yang Kami Buat</p>
            </div>
            
          </div>
        </div>
      </section>
    );
  };
  
  export default Trust