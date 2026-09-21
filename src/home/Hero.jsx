import Sipers from "./siper/Sipers";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";

function Hero() {
  return (
    <>
      <header className="relative h-auto sm:h-screen">
        <div className="text-center flex flex-col items-center justify-center  pt-32 pb-16 sm:pt-12 lg:pt-32">
          <h1 className="text-2xl text-secondary font-bold tracking-tight sm:text-2xl lg:text-3xl">
            هوشمندانه انتخاب کنید، مطمئن دانلود کنید
          </h1>
          <p className="text-heading text-lg mt-1">
            مجموعه‌ ای جامع از به‌ روزترین نرم‌ افزارها و بازی‌ها، گردآوری‌ شده
            از منابع معتبر
          </p>
        </div>

        <div className="w-full max-w-3xl px-4 mx-auto mt-8 sm:px-6 lg:px-8">
          <label for="search" class="sr-only text-right">
            نرم افزار مورد نظر خود را جستجو کنید
          </label>
          <div className="flex flex-col rounded-full sm:flex-row sm:bg-white sm:p-1 sm:ring-1 sm:ring-inset sm:ring-gray-300">
            <div className="flex items-stretch grow focus-within:z-10">
              <button className="cursor-pointer bg-primary font-bold rounded-full px-12 py-2 text-white hover:bg-hover hover:text-white  ">
                <Search />
                جستجو
              </button>
              <div className="flex items-stretch grow focus-within:z-10">
                <input
                  className="block text-right w-full px-5 py-4 ml-0 text-sm text-gray-900 bg-white border-0 rounded-none rounded-t-2xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:ml-2 sm:rounded-r-full sm:px-6 sm:ring-0 "
                  type="text"
                  required
                  placeholder="نرم افزار خود را جستجو نماید"
                />
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-center text-gray-700">
            با بیش از ۸ هزار نرم افزار از فروشگاه های معتبر
          </p>
        </div>
        <div>
          <Sipers />
        </div>
        <div className="absolute bottom-0 left-1/2 transform mb-4 -translate-x-1/2 ">
          <Down />
        </div>
      </header>
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
