import React from "react";

const galleryItems = [
  { id: 1, src: "/gallery/TP1.png", alt: "Tác phẩm 1" },
  { id: 2, src: "/gallery/TP2.png", alt: "Tác phẩm 2" },
  { id: 3, src: "/gallery/TP3.png", alt: "Tác phẩm 3" },
  { id: 4, src: "/gallery/TP4.png", alt: "Tác phẩm 4" },
  { id: 5, src: "/gallery/TP5.png", alt: "Tác phẩm 5" },
  { id: 6, src: "/gallery/TP6.png", alt: "Tác phẩm 6" },
  { id: 7, src: "/gallery/TP7.png", alt: "Tác phẩm 7" },
  { id: 8, src: "/gallery/TP8.png", alt: "Tác phẩm 8" },
  { id: 9, src: "/gallery/TP9.png", alt: "Tác phẩm 9" },
  { id: 10, src: "/gallery/TP10.png", alt: "Tác phẩm 10" },
  { id: 11, src: "/gallery/TP11.png", alt: "Tác phẩm 11" },
  { id: 12, src: "/gallery/TP12.png", alt: "Tác phẩm 12" },
];
const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-[#F59E0B] font-bold uppercase tracking-widest mb-2">
            Tác phẩm
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">
            Hình ảnh <span className="text-[#F59E0B]">khách hàng</span>
          </h2>
          <div className="w-32 h-1 bg-[#F59E0B] mx-auto mt-6 rounded"></div>
        </div>

        <div
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 scroll-smooth "
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="shrink-0 snap-center w-[85%] sm:w-[280px] md:w-[350px] h-auto group rounded-lg cursor-pointer border border-[#F59E0B] overflow-hidden"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="https://www.facebook.com/search/top?q=nam%20hairsalon"
            target="_blank"
            className="flex gap-2 justify-center text-[#F59E0B] font-bold uppercase tracking-widest hover:text-[#d97706] transition-transform duration-300 transform hover:scale-110"
          >
            Xem thêm trên facebook
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
