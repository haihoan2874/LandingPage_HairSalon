import React from "react";
import bgSalon from "../assets/bg_salon.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center bg-cover bg-no-repeat bg-center "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.5)),url(${bgSalon})`,
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="max-w-4xl">
          <div className="inline-block bg-[#F59E0B]/20 border border-[#F59E0B] text-[#F59E0B] px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase mb-6">
            Đẳng cấp phái mạnh
          </div>
          <h1 className="uppercase text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Định hình <br />
            <span className="text-[#F59E0B]">phong cách</span> của bạn
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Trải nghiệm không gian cắt tóc nam chuyên nghiệp, nơi sự tỉ mỉ trong
            từng đường kéo tạo sự tự tin và cuốn hút cho mọi quý ông.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#F59E0B] hover:bg-[#d97706] text-white text-center px-8 py-4 uppercase tracking-widest font-bold rounded transition transform hover:scale-105 shadow-lg">
              Đặt lịch ngay
            </button>
            <button className="border border-white hover:border-[#F59E0B] hover:text-[#F59E0B] px-8 py-4 rounded text-lg uppercase font-bold tracking-wide transition transform ">
              Xem đánh giá
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
