import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import capcut from "./siperPhotos/capcut.png";
import facebook from "./siperPhotos/facebook.png";
import x from "./siperPhotos/x.png";
import telegram from "./siperPhotos/telegram.png";

const cards = [
  {
    source: capcut,
    title: "capcut",
    category: "شبکه های اجتماعی",
  },
  {
    source: facebook,
    title: "Facebook",
    category: "شبکه های اجتماعی",
  },
  {
    source: telegram,
    title: "telegram",
    category: "فوتوگرافی",
  },
  {
    source: x,
    title: "x",
    category: "شبکه های اجتماعی",
  },
];

function Sipers() {
  return (
    <div className="w-full mt-10" dir="rtl">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={28}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },

          640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 26,
          },

          1280: {
            slidesPerView: 5,
            spaceBetween: 28,
          },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.title}>
            <Card
              source={card.source}
              title={card.title}
              category={card.category}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function Card({ source, title, category }) {
  return (
    <div className="mt-16 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center select-none cursor-pointer  ">
          {/* App Icon */}
          <div className=" w-25 h-25 max-w-[200px] mx-auto overflow-hidden rounded-3xl border border-gray-200 bg-white">
            <img
              src={source}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* title/catagory */}
          <div>
            {/* Title */}
            <h3 className="mt-3 text-[20px] font-medium text-gray-800 truncate">
              {/* <a href="#"></a> */}
              {title}
            </h3>

            {/* Category */}
            <p className="mt-1 text-[17px] text-gray-500">{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sipers;
