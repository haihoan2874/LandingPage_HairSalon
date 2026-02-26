import React from "react";
import about from "../assets/about.png";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="flex flex-col lg:flex-row gap-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full lg:w-1/2">
          <div className="absolute inset-0 bg-[#F59E0B] transform translate-x-4 translate-y-4 rounded-lg"></div>
          <img
            src={about}
            alt="Nam HairSalon"
            className="relative z-10 w-full rounded-lg shadow-2xl object-cover h-[500px]"
          />
          <div className="absolute -bottom-6 -left-6 bg-black rounded border border-[#1F2937]  px-8 py-6 z-20 flex items-center gap-4 shadow-slate-200">
            <div>
              <h4 className="text-white font-bold text-3xl">5+ Năm</h4>
              <p className="text-sm text-gray-400">Kinh nghiệm chuyên môn</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h4 className="text-[#F59E0B] font-bold uppercase tracking-widest mb-2">
            Về chúng tôi
          </h4>
          <h2 className="text-2xl md:text-5xl font-bold uppercase tracking-widest mb-6 text-white">
            Nghệ thuật trong từng{" "}
            <span className="text-[#F59E0B]">Đường Kéo</span>
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Nam HairSalon không chỉ là nơi để cắt tóc, mà là không gian để phái
            mạnh thư giãn và làm mới bản thân. Chúng tôi tự hào mang đến những
            kiểu tóc thời thượng nhất, phù hợp với khuôn mặt và phong cách cá
            nhân của từng khách hàng.
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Với đội ngũ nhân viên giàu kinh nghiệm, đam mê nghệ thuật chải chuốt
            cùng các sản phẩm chăm sóc tóc cao cấp, chúng tôi cam kết mang lại
            trải nghiệm hoàn hảo và sự hài lòng tuyệt đối cho bạn.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex gap-3">
              <div className="text-[#F59E0B] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <h5 className="text-white font-bold mb-1">
                  Thợ cắt chuyên nghiệp
                </h5>
                <p className="text-sm text-gray-400">Được đào tạo bài bản</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="text-[#F59E0B] item-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <h5 className="text-white font-bold mb-1">Sản phẩm cao cấp</h5>
                <p className="text-sm text-gray-400">Bảo vệ sức khoẻ tóc</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="text-[#F59E0B]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <h5 className="text-white font-bold mb-1">
                  Không gian hiện đại
                </h5>
                <p className="text-sm text-gray-400">Thoải mái, thư giãn</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="text-[#F59E0B] item-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <h5 className="text-white font-bold mb-1">Giá cả hợp lý</h5>
                <p className="text-sm text-gray-400">Chất lượng khỏi bàn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
