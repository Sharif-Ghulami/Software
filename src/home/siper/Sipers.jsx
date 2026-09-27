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
  // ,
  // {
  //   source: x,
  //   title: "x",
  //   category: "شبکه های اجتماعی",
  // },
  // {
  //   source: x,
  //   title: "x",
  //   category: "شبکه های اجتماعی",
  // },
];

function Sipers() {
  return (
    <div className="w-full mt-6" dir="rtl">
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
    <div className="mt-16 w-2/3 bg-amber-300 ">
      <div className="group relative items-center gap-x-4 text-center transition bg-blue-300 ">
        {/* App Icon */}
        <div className=" relative mx-auto overflow-hidden rounded-3xl border bg-white lg:shrink-0 ">
          <img
            src={source}
            alt={title}
            className="size-full transition duration-300 group-hover:scale-110 scale-100 blur-0 grayscale-0 "
          />
        </div>

        {/* title/catagory */}
        <div>
          {/* Title */}
          <h3 className="mt-2 text-20 font-medium text-gray-800 truncate">
            {/* <a href="#"></a> */}
            {title}
          </h3>

          {/* Category */}
          <p className="mt-1 text-16 text-gray-500">{category}</p>
        </div>
      </div>
    </div>
  );
}

export default Sipers;
