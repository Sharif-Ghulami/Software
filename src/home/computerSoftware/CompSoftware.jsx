import { Link } from "react-router-dom";
import Softwares from "./Softwares";

function CompSoftware() {
  return (
    <section className="mt-10 py-12 px-10 bg-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-amber-100">
        <div className="flex flex-col items-start justify-between gap-y-4 md:flex-row md:items-end">
          <Link to="/Computer">بیشر ببینید</Link>

          <div className="text-right  ">
            <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl tracking-tight text-balance">
              نرم‌افزارهای کامپیوتر
            </h1>

            <p className="mt-2 text-lg leading-7 text-gray-600">
              آخرین نرم‌افزارهای اضافه شده به دسته‌بندی‌های مختلف ما را بررسی
              کنید
            </p>
          </div>
        </div>

        {/* This is for Computer Software! */}
        <div>
          <Softwares />
        </div>
      </div>
    </section>
  );
}

export default CompSoftware;
