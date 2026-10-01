import { ChevronDown } from "lucide-react";
function Callus() {
  return (
    <form className="bg-black" method="get">
      <div className=" bg-amber-200 mx-auto max-w-180 h-lvh  border-gray-100 rounded ">
        <div className="grid grid-cols-1 w-160 h-full bg-gray-400 mx-auto m-4">
          نام خود را واردنمایید
          <input
            type="text"
            className="border rounded-2xl bg-gray-200 text-right "
            placeholder="نام خود را وارد نمایید"
          />
          ایمل خودراوارد نمایید
          <input
            type="text"
            placeholder="ایمل خودراوارد نمایید"
            className="border rounded-2xl bg-gray-200 text-right"
          />
          <div className=" grid grid-cols-1  sm:grid-cols-2 gap-4 ">
            <div className="flex flex-col text-right  justify-center  gap-2">
              <label className=" text-white text-lg font-medium">
                شماره خودراوارد کنید
              </label>
              <input
                className="w-full px-3 py-2 border rounded-2xl bg-gray-200 text-right"
                type="text"
                placeholder="شماره خود را وارد کنید"
              />
            </div>

            <div className="flex  flex-col gap-2  " dir="rtl">
              <label className=" text-white text-right ">دسته بندی ها</label>
              <select
                id=""
                className="w-full px-3 py-2 border rounded-2xl bg-gray-200 "
                defaultValue=""
              >
                <option value="" disabled>
                  انتخاب کنید
                </option>
                <option value="سایر">سایر</option>
                <option value="رابط کاربری">رابط کاربری</option>
                <option value="مشکل فنی">مشکل فنی</option>
              </select>
            </div>
          </div>
          {/* <FormFields /> */}
          <input
            type="submit"
            value="ارسال"
            placeholder="ارسال"
            className="bg-primary text-white rounded-2xl hover:bg-hover w-full h-12"
          />
        </div>
      </div>
    </form>
  );
}

export default Callus;

// export function FormFields() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" dir="rtl">
//       {/* Phone Number */}
//       <div className="flex flex-col gap-2">
//         <label className="text-white text-lg font-medium">
//           شماره خود را وارد کنید
//         </label>

//         <input
//           type="text"
//           placeholder="شماره خود را وارد کنید"
//           className="
//             w-full
//             h-12
//             rounded-lg
//             bg-[#383838]
//             px-4
//             text-white
//             placeholder:text-gray-500
//             outline-none
//             focus:ring-2
//             focus:ring-gray-500
//           "
//         />
//       </div>

//       {/* Category */}
//       <div className="flex flex-col gap-2">
//         <label className="text-white text-lg font-medium">دسته بندی</label>

//         <div className="relative">
//           <select
//             className="
//               w-full
//               h-12
//               appearance-none
//               rounded-lg
//               bg-[#383838]
//               px-4
//               text-white
//               outline-none
//               cursor-pointer
//               focus:ring-2
//               focus:ring-gray-500
//             "
//             defaultValue=""
//           >
//             <option value="" disabled>
//               انتخاب کنید
//             </option>

//             <option value="software">نرم افزار</option>
//             <option value="game">بازی</option>
//             <option value="mobile">موبایل</option>
//           </select>

//           <ChevronDown
//             size={22}
//             className="
//               absolute
//               left-4
//               top-1/2
//               -translate-y-1/2
//               text-gray-400
//               pointer-events-none
//             "
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
