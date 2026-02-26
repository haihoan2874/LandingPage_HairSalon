import React from "react";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Tác phẩm 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Tác phẩm 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    alt: "Tác phẩm 3",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Tác phẩm 4",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    alt: "Tác phẩm 5",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Tác phẩm 6",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Tác phẩm 7",
  },
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

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-lg cursor-pointer break-inside-avoid overflow-hidden"
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
            className="flex gap-2 justify-center text-[#F59E0B] font-bold uppercase tracking-widest hover:text-[#d97706] transition-colors duration-300"
          >
            Xem thêm trên facebook
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              class="size-6"
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
