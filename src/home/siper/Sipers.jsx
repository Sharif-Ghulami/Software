import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import inshot from "./siperPhotos/inshot.png";
import capcut from "./siperPhotos/capcut.png";
import youtube from "./siperPhotos/youtube.png";
import tiktok from "./siperPhotos/tiktok.png";
import facebook from "./siperPhotos/facebook.png";
import messenger from "./siperPhotos/messenger.png";
import telegram from "./siperPhotos/telegram.png";
import whatsapp from "./siperPhotos/whatsapp.png";

function Sipers() {
  const cards = [
    {
      image: inshot,
      title: "CapCut Video",
      category: "فوتوگرافی",
    },
    {
      image: capcut,
      title: "CapCut Video",
      category: "فوتوگرافی",
    },
    {
      image: youtube,
      title: "YouTube",
      category: "شبکه های اجتماعی",
    },
    {
      image: tiktok,
      title: "TikTok",
      category: "شبکه های اجتماعی",
    },
    {
      image: facebook,
      title: "Facebook",
      category: "شبکه های اجتماعی",
    },
    {
      image: messenger,
      title: "Messenger",
      category: "شبکه های اجتماعی",
    },
    {
      image: telegram,
      title: "Telegram",
      category: "شبکه های اجتماعی",
    },
    {
      image: whatsapp,
      title: "WhatsApp",
      category: "شبکه های اجتماعی",
    },
  ];

  return (
    <div className="w-full " dir="rtl">
      <Swiper
        className=""
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 7,
          },
          1536: {
            slidesPerView: 8,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center group transition ">
              {/* Image */}
              <div className=" size-36 overflow-hidden rounded-4xl  border-gray-200 ">
                <img
                  src={card.image}
                  alt={card.title}
                  className="size-full transition duration-300 group-hover:scale-110 scale-100 blur-0 grayscale-0 object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="mt-3 w-full truncate text-lg font-medium transition group-hover:text-primary-600 ">
                {card.title}
              </h3>

              {/* Category */}
              <p className="mt-1 w-full truncate text-base text-gray-500 ">
                {card.category}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// function Card({ source, title, category }) {
//   return (
//     <div className="mt-16 w-2/3  ">
//       <div className="group relative items-center gap-x-4 text-center transition ">
//         {/* App Icon */}
//         <div className=" relative mx-auto overflow-hidden rounded-3xl border bg-white lg:shrink-0 ">
//           <img
//             src={source}
//             alt={title}
//             className="size-full transition duration-300 group-hover:scale-110 scale-100 blur-0 grayscale-0 "
//           />
//         </div>

//         {/* title/catagory */}
//         <div>
//           {/* Title */}
//           <h3 className="mt-2 text-20 font-medium text-gray-800 truncate">
//             {/* <a href="#"></a> */}
//             {title}
//           </h3>

//           {/* Category */}
//           <p className="mt-1 text-16 text-gray-500">{category}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Sipers;
