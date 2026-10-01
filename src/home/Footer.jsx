import { Send } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../Logo.png";

function Footer() {
  return (
    <footer dir="rtl" className="bg-[#f8f9fa] text-gray-700 px-10 ">
      <div className="mx-auto max-w-330 px-6 sm:px-8 lg:px-10">
        {/* Main Footer */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand / About */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="mb-5 inline-block text-3xl font-bold tracking-tight text-gray-900"
            >
              <img src={logo} alt="logo" className="w-auto h-7 " />
            </Link>

            <p className="max-w-82.5 text-sm leading-8 text-gray-600">
              با بریج در کنار اینترنت با کیفیت و خدمات عالی، از بزرگترین مرجع و
              بروزترین نرم افزار های روز دنیا بهره مند شوید.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-5">
              <a
                href="#"
                aria-label="Telegram"
                className="text-gray-500 transition hover:text-blue-500"
              >
                <Send size={21} strokeWidth={1.8} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-500 transition  hover:text-blue-500"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-500 transition hover:text-pink-500"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8 ">
              {/* Categories */}
              <div className="mb-10">
                <h3 className="mb-6 text-base font-semibold text-gray-900">
                  دسته بندی ها
                </h3>

                <ul className="space-y-5 text-sm">
                  <li>
                    <Link
                      to="/Computer"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      کامپیوتر
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Game"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      بازی
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Mobile"
                      className="text-sm text-gray-600 hover:text-gray-900"
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
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      سوالات متداول
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/request"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      درخواست نرم افزار
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8 ">
              {/* Organization */}
              <div className="mb-10">
                <h3 className="mb-6 text-base font-semibold text-gray-900">
                  سازمان
                </h3>

                <ul className="space-y-5 text-sm">
                  <li>
                    <Link
                      to="/"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      خانه
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/contact"
                      className="text-sm text-gray-600 hover:text-gray-900"
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
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      شرایط استفاده
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/copyright"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      مجوز و حقوق مالکیت
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Border */}
      <div className="border-t border-gray-200 py-8 px-10">
        <p className="text-right text-md text-gray-500">
          © ۱۴۰۴ سافت ویر. تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

// export function FooterLink({ to }) {
//   <Link to={to} style={"transition-colors,text-hover"}>
//     <div className=""></div>
//   </Link>;
// }
