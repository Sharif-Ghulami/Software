import Adobe_Dimension_Logo from "./images/Adobe_Dimension_Logo.png";
import Adobe_substance_logo from "./images/Adobe_substance_logo.png";
import Adobe_express_logo from "./images/Adobe_Express_logo.png";
import Canva_Logo from "./images/Canva_Logo.png";
import Youtube_download_logo from "./images/Youtube_download_logo.png";
import Ytd_logo from "./images/YT-Downloader.png";
import Movavi_logo from "./images/Movavi_logo.png";
import Wysiwyg_logo from "./images/Wysiwyg_logo.png";
import Allavsoft_logo from "./images/Allavsoft_logo.png";
const cards = [
  {
    id: 1,
    title: "Adobe Dimension",
    description:
      "Adobe Dimension CC محصولی دیگر از کمپانی مورد علاقه ی طراحان و گرافیست های خلاق یعنی ادوبی است که با این هدف ارائه شده که کار طراحان را در ایجاد تصاویر سه بعدی با",
    image: Adobe_Dimension_Logo,
  },

  {
    id: 2,
    title: "Adobe Substance 3D Sampler",
    description:
      "نرم افزار Substance 3D Sampler یا Substance Alchemist امکانات...",
    image: Adobe_substance_logo,
  },

  {
    id: 3,
    title: "Adobe Express Photos",
    description: "Adobe Express Photos که قبلاً Photoshop Express نام داشت...",
    image: Adobe_express_logo,
  },

  {
    id: 4,
    title: "Canva AI for Windows Desktop",
    description:
      "Canva به عنوان یک نرم افزار طراحی گرافیک، با دارا بودن امکانات...",
    image: Canva_Logo,
  },

  {
    id: 5,
    title: "Free YouTube Download",
    description:
      "نرم افزار Free YouTube Download برای دانلود آسان و بی دردسر فیلم...",
    image: Youtube_download_logo,
  },

  {
    id: 6,
    title: "YT Downloader",
    description: "YT Downloader که بیشتر با عنوان YTD شناخته می‌شود...",
    image: Ytd_logo,
  },

  {
    id: 7,
    title: "Movavi Video Editor Plus",
    description:
      "یک نرم افزار بسیار خوب و ساده ویرایش فیلم برای سیستم عامل ویندوز...",
    image: Movavi_logo,
  },

  {
    id: 8,
    title: "WYSIWYG Web Builder",
    description: "WYSIWYG Web Builder نام نرم افزاری است که توسط شرکت...",
    image: Wysiwyg_logo,
  },

  {
    id: 9,
    title: "Allavsoft Video Downloader",
    description: "Allavsoft نرم افزاری برای دانلود فیلم، موزیک، ویدئو...",
    image: Allavsoft_logo,
  },
];

function Card({ title, description, image }) {
  return (
    <div className="group relative flex cursor-pointer items-center gap-4 rounded-2xl border bg-white p-5 transition hover:border-gray-400/70 hover:bg-gray-50">
      {/* Text */}
      <div className="flex-1 text-right">
        <h3 className="line-clamp-1 font-inter text-base font-medium text-gray-900">
          {title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm">{description}</p>
      </div>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="size-18 rounded-xl mx-auto shrink-0 overflow-hidden"
      />
    </div>
  );
}

function Softwares() {
  return (
    <div className="grid grid-cols-1 gap-5 mt-8 lg:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
}

export default Softwares;
