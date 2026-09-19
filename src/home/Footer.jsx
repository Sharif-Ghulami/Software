// import { Instagram, Facebook, Send } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer dir="rtl" className="bg-[#f8f9fa] text-gray-700">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {/* Brand / About */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="mb-5 inline-block text-3xl font-bold tracking-tight text-gray-900"
            >
              s<span className="text-primary-600">⚙</span>ftware.af
            </Link>

            <p className="max-w-82.5 text-sm leading-8 text-gray-600">
              با همت تیم کُنار اینترنت با کیفیت و خدمات عالی از بزرگترین مرجع و
              بروزترین نرم افزار ها در دنیا بهره مند شوید.
            </p>

            {/* Social Icons
            <div className="mt-7 flex items-center gap-5">
              <a
                href="#"
                aria-label="Telegram"
                className="text-gray-500 transition hover:text-primary-600"
              >
                <Send size={21} strokeWidth={1.8} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-500 transition hover:text-primary-600"
              >
                <Facebook size={21} strokeWidth={1.8} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-500 transition hover:text-pink-500"
              >
                <Instagram size={21} strokeWidth={1.8} />
              </a>
            </div> */}
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-6 text-base font-semibold text-gray-900">
              دسته بندی ها
            </h3>

            <ul className="space-y-5 text-sm">
              <li>
                <Link
                  to="/Computer"
                  className="transition-colors hover:text-primary-600"
                >
                  کامپیوتر
                </Link>
              </li>

              <li>
                <Link
                  to="/Game"
                  className="transition-colors hover:text-primary-600"
                >
                  بازی
                </Link>
              </li>

              <li>
                <Link
                  to="/Mobile"
                  className="transition-colors hover:text-primary-600"
                >
                  موبایل
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-base font-semibold text-gray-900">
              پشتیبانی
            </h3>

            <ul className="space-y-5 text-sm">
              <li>
                <Link
                  to="/faq"
                  className="transition-colors hover:text-primary-600"
                >
                  سوالات متداول
                </Link>
              </li>

              <li>
                <Link
                  to="/request"
                  className="transition-colors hover:text-primary-600"
                >
                  درخواست نرم افزار
                </Link>
              </li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="mb-6 text-base font-semibold text-gray-900">
              سازمان
            </h3>

            <ul className="space-y-5 text-sm">
              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-primary-600"
                >
                  خانه
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-primary-600"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Rules */}
          <div className="lg:col-span-1">
            <h3 className="mb-6 text-base font-semibold text-gray-900">
              قوانین و مقررات
            </h3>

            <ul className="space-y-5 text-sm">
              <li>
                <Link
                  to="/terms"
                  className="transition-colors hover:text-primary-600"
                >
                  شرایط استفاده
                </Link>
              </li>

              <li>
                <Link
                  to="/copyright"
                  className="transition-colors hover:text-primary-600"
                >
                  مجوز و حقوق مالکیت
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-200 py-8">
          <p className="text-right text-xs text-gray-500">
            © ۱۴۰۴ سافت ویر. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
