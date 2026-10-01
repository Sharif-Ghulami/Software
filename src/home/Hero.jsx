import Sipers from "./siper/Sipers";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";

//

const handleScroll = () => {
  document.getElementById("scrollToComputer")?.scrollIntoView({
    behavior: "smooth",
  });
};

// const handleScroll = () => {
//   document.getElementById("scrollToComputer")?.scrollIntoView({
//     behavior: "smooth",
//   });
// };

function Hero() {
  return (
    <>
      <header className="relative h-auto sm:h-screen">
        <div className="text-center flex flex-col items-center justify-center  pt-32 pb-10 lg:pt-32">
          <h1 className="text-2xl text-secondary font-bold tracking-tight sm:text-2xl lg:text-3xl">
            هوشمندانه انتخاب کنید، مطمئن دانلود کنید
          </h1>
          <p className="text-heading text-lg mt-1">
            مجموعه‌ ای جامع از به‌ روزترین نرم‌ افزارها و بازی‌ها، گردآوری‌ شده
            از منابع معتبر
          </p>
        </div>

        <div className="w-full max-w-3xl px-4 mx-auto sm:px-6  lg:px-8">
          <label htmlFor="search" className="sr-only">
            نرم افزار مورد نظر خود را جستجو کنید
          </label>

          <div
            className="
                  flex flex-col
                  overflow-hidden
                  rounded-3xl
                  border border-gray-300
                  bg-white

                  sm:flex-row
                  sm:rounded-full
                  sm:border-0
                  sm:p-1
                  sm:ring-1
                  sm:ring-inset
                  sm:ring-gray-300
    "
          >
            {/* Button */}
            <button
              className="
                    order-2
                    w-full
                  
                    flex items-center justify-center gap-3
                    bg-primary
                    font-bold
                    text-white
                    cursor-pointer

                    sm:order-1
                    sm:w-auto
                    h-12
                    sm:h-auto
                    sm:rounded-full
                    sm:px-8
                    sm:py-2.5

                    hover:bg-hover
      "
            >
              <Search size={25} />

              <span>جستجو</span>
            </button>

            {/* Input */}
            <div
              className="
              order-1
              flex grow
              sm:order-2
      "
            >
              <input
                id="search"
                type="text"
                required
                placeholder="نرم افزار خود را جستجو نمایید"
                className="
                        block
                        w-full
                        h-12
                        py-4.5
                        px-5
                        text-right
                        text-sm
                        text-gray-900
                        bg-white
                        border-0
                        outline-none
                        placeholder:text-gray-400

                        sm:h-auto
                        sm:px-6
                        sm:py-4
                        sm:rounded-r-full
                        sm:ring-0
        "
              />
            </div>
          </div>

          <p className="mt-5 text-sm text-center text-gray-700">
            با بیش از ۸ هزار نرم افزار از فروشگاه های معتبر
          </p>
        </div>
        <div className="mt-10">
          <Sipers className="" />
        </div>
        <div className="absolute bottom-0 left-1/2 transform mb-4 -translate-x-1/2 z-50 ">
          <Down />
        </div>
      </header>
    </>
  );
}

export default Hero;

export function Down() {
  return (
    <div
      onClick={handleScroll}
      className="animate-bounce flex items-center justify-center size-8 text-gray-600 cursor-pointer hover:text-primary transition-colors"
    >
      <ChevronDown size={32} />
    </div>
  );
}
