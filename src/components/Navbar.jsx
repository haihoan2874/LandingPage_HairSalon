import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#000000]/95 backdrop-blur border-b border-[#1F2937]">
      <div className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
        <h1 className="font-bold text-3xl tracking-wide text-white">
          NAM <span className="text-[#F59E0B]">HAIRSALON</span>
        </h1>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-[#F59E0B] transition-colors focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* MENU NGANG (Hien desktop, an tren mobile) */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <a
            href="#home"
            className=" text-gray-300 hover:text-[#F59E0B] transition-colors duration-300 font-medium uppercase tracking-wide"
          >
            Trang chủ
          </a>
          <a
            href="#about"
            className=" text-gray-300 hover:text-[#F59E0B] transition-colors duration-300 font-medium uppercase tracking-wide"
          >
            Giới thiệu
          </a>
          <a
            href="#services"
            className=" text-gray-300 hover:text-[#F59E0B] transition-colors duration-300 font-medium uppercase tracking-wide"
          >
            Bảng giá
          </a>
          <a
            href="#gallery"
            className=" text-gray-300 hover:text-[#F59E0B] transition-colors duration-300 font-medium uppercase tracking-wide"
          >
            Ảnh
          </a>
          <a
            href="#reviews"
            className=" text-gray-300 hover:text-[#F59E0B] transition-colors duration-300 font-medium uppercase tracking-wide"
          >
            Đánh giá
          </a>
          <a
            href="#contact"
            className="bg-[#F59E08] hover:bg-[#d97706] text-white px-6 py-2.5 rounded tracking-wide uppercase transition transform hover:scale-105 shadow-lg"
          >
            Đặt lịch ngay
          </a>
        </div>
      </div>

      {/* MENU DOC (Hien tren mobile ) */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-[#1F2937]">
          <div className="px-4 pt-2 pb-6 flex flex-col space-y-4">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className=" text-gray-300 hover:text-[#F59E0B] transition-colors duration-300 font-medium uppercase tracking-wide "
            >
              Trang chủ
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className=" text-gray-300 hover:text-[#F59E0B] transition-colors duration-300 font-medium uppercase tracking-wide"
            >
              Giới thiệu
            </a>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className=" text-gray-300 hover:text-[#F59E0B] transition-colors duration-300 font-medium uppercase tracking-wide"
            >
              Bảng giá
            </a>
            <a
              href="#gallery"
              onClick={() => setIsOpen(false)}
              className=" text-gray-300 hover:text-[#F59E0B] transition-colors duration-300 font-medium uppercase tracking-wide"
            >
              Ảnh
            </a>
            <a
              href="#reviews"
              onClick={() => setIsOpen(false)}
              className=" text-gray-300 hover:text-[#F59E0B] transition-colors duration-300 font-medium uppercase tracking-wide"
            >
              Đánh giá
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#F59E08] hover:bg-[#d97706] text-white px-6 py-2.5 rounded tracking-wide uppercase transition transform hover:scale-105 shadow-lg"
            >
              Đặt lịch ngay
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
