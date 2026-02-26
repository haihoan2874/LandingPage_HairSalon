import React from "react";

const menuItems = [
  {
    id: 1,
    viName: "Cắt , Sấy , Tạo Kiểu",
    enName: "Cut, Dry, Style",
    price: "100k",
  },
  {
    id: 2,
    viName: "Cạo râu (Full)",
    enName: "Shave face (Full)",
    price: "40k",
  },
  { id: 3, viName: "Cạo mặt", enName: "Shave face", price: "20k" },
  {
    id: 4,
    viName: "Tattoo 1 bên đầu",
    enName: "Tattoo hair (half)",
    price: "100k",
  },
  {
    id: 5,
    viName: "Tattoo cả đầu",
    enName: "Tattoo hair (full)",
    price: "200k",
  },
  { id: 6, viName: "Tạo kiểu", enName: "Style hair", price: "30k" },
  {
    id: 7,
    viName: "Nhuộm cơ bản",
    enName: "Basic dyeing",
    price: "200k-300k",
  },
  {
    id: 8,
    viName: "Nhuộm thời trang",
    enName: "Fashion dyeing",
    price: "500k-750k",
  },
  { id: 9, viName: "Tẩy tóc", enName: "Hair bleaching", price: "250k" },
  { id: 10, viName: "Uốn xoăn", enName: "Hair perm", price: "300k-350k" },
  {
    id: 11,
    viName: "Uốn con sâu",
    enName: "Hair curling",
    price: "450k-600k",
  },
  {
    id: 12,
    viName: "Uốn Premlock",
    enName: "Premlock curling",
    price: "800k-900k",
  },
  {
    id: 13,
    viName: "Ép tóc",
    enName: "Hair straightening",
    price: "200k-250k",
  },
  { id: 14, viName: "Gội đầu", enName: "Head massage", price: "50k" },
];
const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#111111]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-[#F59E0B] font-bold uppercase tracking-widest mb-2">
            Price List
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">
            Bảng giá <span className="text-[#F59E0B]">dịch vụ</span>
          </h2>

          <div className="w-32 h-1 bg-[#F59E0B] mx-auto mt-6 rounded"></div>
        </div>

        <div className="bg-black border border-[#1F2937] rounded-xl p-6 md:p-12 shadow-2xl">
          {menuItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-6 group">
              <div className="flex gap-2 items-center">
                <h3 className="text-gray-300 text-sm md:text-lg font-bold group-hover:text-white uppercase transition-colors duration-300">
                  -- {item.viName}
                </h3>
                <span className="text-gray-600 text-xs md:text-sm font-medium uppercase hidden sm:inline-block">
                  /{item.enName}
                </span>
              </div>

              <div className="flex-1 border-b-2 border-gray-700 mx-4 opacity-45 group-hover:border-[#F59E0B]"></div>

              <p className="text-[#F59E0B] font-bold md:text-lg whitespace-nowrap">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
