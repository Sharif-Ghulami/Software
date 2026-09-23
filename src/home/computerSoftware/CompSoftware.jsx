import { Link } from "react-router-dom";
import Softwares from "./Softwares";
import { ChevronLeft } from "lucide-react";

function CompSoftware() {
  return (
    <section id="scrollToComputer"className="mt-10 py-12 px-10 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col items-start justify-between gap-y-4 md:flex-row md:items-end">
          <div className="flex items-center justify-center gap-1">
            <Link
              className="know-more flex items-center justify-center gap-1"
              to="/Computer"
            >
              <ChevronLeft size={18} />{" "}
              <span className="text-md  "> بیشر ببینید</span>
            </Link>
          </div>

          <div className="text-right  ">
            <h2 className="text-2xl font-semibold text-secondary sm:text-3xl tracking-tight text-balance">
              نرم‌افزارهای کامپیوتر
            </h2>

            <p className="mt-2 text-lg leading-7 text-heading  ">
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
