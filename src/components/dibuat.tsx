import React from 'react';
import { Calendar } from 'lucide-react';

const dibuat = () => {
  // Hitung jumlah hari
  const creationDate = new Date('2024-12-20')
  const today = new Date()
  const daysPassed = Math.floor((today.getTime() - creationDate.getTime()) / (1000 * 3600 * 24))

  return (
    <div className="flex items-center justify-center mb-4">
    <Calendar className="text-purple-500 mr-2" size={24} />
    <p className="text-lg font-semibold text-gray-700">
      Website ini baru dibuat {daysPassed} hari yang lalu
    </p>
  </div>
  );
};

export default dibuat;
