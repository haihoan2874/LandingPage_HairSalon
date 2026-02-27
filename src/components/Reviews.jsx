import React from "react";

const reviews = [
  {
    id: 1,
    name: "Václav Pail",
    content:
      "Trải nghiệm tuyệt vời! Kiểu tóc cắt rất hoàn hảo, đúng như tôi tưởng tượng. Nhân viên rất dễ thương, thân thiện và đồng thời cực kỳ chuyên nghiệp. Tôi cảm thấy thoải mái và được chăm sóc chu đáo suốt thời gian ở đó. Tôi cũng đánh giá cao mức giá hợp lý so với chất lượng dịch vụ. Tôi chắc chắn sẽ quay lại đây và chỉ có thể giới thiệu tiệm làm tóc này.",
    rating: 5,
  },
  {
    id: 2,
    name: "Tomas Nguyen",
    content:
      "Quản lý rất nhiệt tình và tốt bụng, nếu bạn có thắc mắc gì, cô ấy đã giúp đỡ mọi thứ. Cô ấy cắt tóc rất đẹp. Có thể thanh toán bằng thẻ. Thậm chí còn có giảm giá cho người về hưu. Tôi thực sự khuyên bạn nên ghé tiệm làm tóc này. 🙏👍",
    rating: 5,
  },
  {
    id: 3,
    name: "Roman Uhýrek",
    content:
      "Anh ấy đã rất tỉ mỉ trong việc cắt tỉa cả phần tóc hai bên và râu, tôi chỉ có thể hết lòng giới thiệu anh ấy 🙏 ",
    rating: 5,
  },
  {
    id: 4,
    name: "Pavel Chrenko",
    content:
      "Tôi đi cắt tóc hôm nay lúc 10 giờ sáng, tuyệt vời, thợ cắt tóc dễ thương, kiểu tóc hoàn hảo và giá cả phải chăng.",
    rating: 5,
  },
  {
    id: 5,
    name: "Hanz Nguyen",
    content:
      "Là một khách hàng lâu năm, tôi rất hài lòng. Anh ấy luôn cắt tóc cho tôi sao cho tạo kiểu đẹp để tóc mọc ra đúng kiểu tôi thích 😎",
    rating: 5,
  },
  {
    id: 6,
    name: "Lucia Janulíková",
    content:
      "Làm việc rất tốt, thái độ dễ chịu và tử tế. Con trai tôi cũng rất hài lòng với kiểu tóc mới.",
    rating: 5,
  },
  {
    id: 7,
    name: "Lukas Kotula",
    content:
      "Cách tiếp cận khách hàng hoàn hảo và chuyên nghiệp. Tôi thực sự muốn giới thiệu dịch vụ này đến tất cả mọi người. Tôi đến với mái tóc dài, chưa tạo kiểu gì cả, và chủ tiệm đã cắt cho tôi một kiểu tóc hoàn hảo. Cảm ơn rất nhiều, giờ tôi biết phải đến đâu và gặp ai rồi.",
    rating: 5,
  },
  {
    id: 8,
    name: "Limi Ted",
    content:
      "Tiệm cắt tóc rất dễ chịu và trên hết là chuyên nghiệp. Cắt tóc đúng như mong đợi. Chính xác. Tuyệt vời. Tôi sẽ quay lại, tôi sẽ không đi đâu khác😉Cảm ơn anh thợ cắt tóc.",
    rating: 4,
  },
  {
    id: 9,
    name: "Jarda Stromšík",
    content:
      "Tôi và con trai đã đến đây lần thứ hai và một lần nữa cả hai chúng tôi đều vô cùng hài lòng. Cô ấy rất giỏi và luôn sẵn lòng giúp đỡ.",
    rating: 4,
  },
  {
    id: 10,
    name: "Adam Vasek",
    content:
      "Cách tiếp cận hoàn hảo. Dịch vụ chất lượng. Tiệm cắt tóc đầu tiên mà cậu con trai 2 tuổi của tôi không khóc.",
    rating: 4,
  },
  {
    id: 11,
    name: "NOKKU",
    content:
      "Giá cả, tỷ lệ, hiệu năng đều tốt nhất, không có gì để phàn nàn. Rất tuyệt vời thưa bà.",
    rating: 5,
  },
  {
    id: 12,
    name: "Marek Hodulak",
    content: "Giá cả tuyệt vời và chất lượng hàng đầu",
    rating: 5,
  },
  {
    id: 13,
    name: "Lavadrake",
    content: "Phong cách chuyên nghiệp 😊 …",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-[#F59E0B] font-bold uppercase tracking-widest mb-2">
            Đánh giá
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">
            Khách hàng <span className="text-[#F59E0B]">nói gì ?</span>
          </h2>
          <div className="w-32 h-1 bg-[#F59E0B] mx-auto mt-6 rounded"></div>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scroll-smooth">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="w-80 flex flex-col bg-black rounded-xl p-6 shrink-0 hover:border-[#F59E0B] border border-[#1F2937] transition-colors duration-300"
            >
              <div className="flex gap-1 mb-6 text-[#F59E0B]">
                {[...Array(item.rating)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-400 italic mb-8 flex-grow">
                {item.content}
              </p>
              <div className="shrink-0 flex items-center gap-4 border-t pt-6 mt-auto">
                <div className="bg-gray-500 w-12 h-12 items-center flex justify-center  rounded-full font-bold text-xl">
                  {item.name.charAt(0)}
                </div>
                <div className="text-white font-bold text-left">
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
