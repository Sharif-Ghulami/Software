import { Link } from "react-router-dom";
import ComputerGameCards from "./ComputerGameCards";
function ComputerGame() {
  return (
    <section className="mt-10 py-12 px-10 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col items-start justify-between gap-y-4 md:flex-row md:items-end">
          <Link to="/Computer">بیشر ببینید</Link>

          <div className="text-right  ">
            <h2 className="text-2xl font-semibold text-secondary sm:text-3xl tracking-tight text-balance">
              بازی های کامپیوتر
            </h2>

            <p className="mt-2 text-lg leading-7 text-heading  ">
              بهترین بازی‌های کامپیوتر در دسته‌بندی‌های متفاوت را اینجا دریابید
            </p>
          </div>
        </div>

        {/* This is for Computer Software! */}
        <div>
          <ComputerGameCards />
        </div>
      </div>
    </section>
  );
}

export default ComputerGame;
