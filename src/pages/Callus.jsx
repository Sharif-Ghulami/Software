import { ChevronDown } from "lucide-react";
function Callus() {
  return (
    <div className=" bg-amber-200 mx-auto max-w-180 h-lvh  border-gray-100 rounded ">
      <div className="grid grid-cols-1 w-160 h-full bg-[#1f1f1f] mx-auto m-4">
        <form className="" method="get">
          <div className="space-y-2">
            <div className="flex flex-col space-y-2">
              <label className="text-right text-lg font-medium">
                نام خود را واردنمایید
              </label>
              <input
                required
                type="text"
                className="border bg-surface-secondary outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-gray-500 rounded-md border-none  text-right w-full h-8 "
                placeholder="نام خود را وارد نمایید"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-right text-lg font-medium">
                {" "}
                ایمل خودراوارد نمایید
              </label>

              <input
                required
                type="text"
                placeholder="ایمل خودراوارد نمایید"
                className="border bg-surface-secondary  outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-gray-500 rounded-lg border-none   text-right w-full mx-auto h-8"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start ">
              <div className="flex flex-col text-right  justify-center  gap-1 ">
                <label className=" text-white text-lg font-medium">
                  شماره خودراوارد کنید
                </label>
                <input
                  required
                  className="w-full bg-surface-secondary  outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-gray-500  px-3 py-2 rounded-md  text-right"
                  type="text"
                  placeholder="شماره خود را وارد کنید"
                />
              </div>

              <div className="flex  flex-col space-y-1" dir="rtl">
                <label className=" text-white text-right ">دسته بندی ها</label>
                <div className="relative">
                  <select
                    required
                    id=""
                    className="w-full bg-surface-secondary  appearance-none  px-3 py-2  rounded-md  outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-gray-500   "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      انتخاب کنید
                    </option>
                    <option value="سایر">سایر</option>
                    <option value="رابط کاربری">رابط کاربری</option>
                    <option value="مشکل فنی">مشکل فنی</option>
                  </select>

                  <ChevronDown
                    size={22}
                    className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-400
              pointer-events-none
            "
                  />
                </div>
              </div>
            </div>

            {/* Textarea */}
            <div className="flex flex-col gap-2 ">
              <label className="text-right text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
                توضیحات
              </label>
              <textarea
                className="w-full bg-surface-secondary  h-40 px-3 bg-gray-200 py-2 focus-visible:outline-none ring-offset-none  text-right text-base outline-none"
                name="message"
                rows={4}
                maxLength={250}
              >
                توضیحات بیشتر
              </textarea>
              <div className="text-gray-200 text-sm 1 text-right">0/300</div>
            </div>

            {/* <FormFields /> */}
            <input
              required
              type="submit"
              value="ارسال"
              placeholder="ارسال"
              className="bg-primary  text-white rounded-md border-none hover:bg-hover w-full h-12"
            />
          </div>
        </form>
      </div>
    </div>
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
