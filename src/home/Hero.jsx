import Sipers from "./siper/Sipers";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";

function Hero() {
  return (
    <>
      <div className="">
        <div className="text-center ">
          <h1 className="text-2xl fo text-black-900 font-medium">
            هوشمندانه انتخاب کنید، مطمئن دانلود کنید
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            مجموعه‌ ای جامع از به‌ روزترین نرم‌ افزارها و بازی‌ها، گردآوری‌ شده
            از منابع معتبر
          </p>
        </div>
        <div className="w-full max-w-3xl px-4 mx-auto mt-8 sm:px-6 lg:px-8">
          <div className="flex flex-colflex flex-col rounded-full sm:flex-row sm:bg-white sm:p-1 sm:ring-1 sm:ring-inset sm:ring-gray-300">
            <div className="flex items-stretch grow focus-within:z-10">
              <button className="cursor-pointer bg-primary font-bold rounded-full px-12 py-2 text-white   ">
                <Search />
                جستجو
              </button>

              <input
                className="block text-left w-full px-5 py-4 ml-0 text-sm text-gray-900 bg-white border-0 rounded-none rounded-t-2xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:ml-2 sm:rounded-r-full sm:px-6 sm:ring-0 "
                type="text"
                required
                placeholder="نرم افزار خود را جستجو نماید"
              />
            </div>
          </div>
          <p className="mt-3 text-sm text-center text-gray-700">
            با بیش از ۸ هزار نرم افزار از فروشگاه های معتبر
          </p>
        </div>
        <div>
          <Sipers />
        </div>
        <div className="absolute bottom-0 left-1/2 transform mb-4 -translate-x-1/2 ">
          <Down />
        </div>
      </div>
    </>
  );
}

export default Hero;

export function Down() {
  return (
    <div className="animate-bounce size-12 text-gray-500  ">
      <ChevronDown />
    </div>
  );
}
