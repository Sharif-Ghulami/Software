import { useState } from "react";

// Multimedia
import media1 from "./images/computer/multimedia/media_1.png";
import zoom from "./images/computer/multimedia/zoom.png";
import br from "./images/computer/multimedia/br.png";
import x from "./images/computer/multimedia/x.png";
import flStudio from "./images/computer/multimedia/fl_studio.png";

// Utility
import utility1 from "./images/computer/utility/utility_1.png";
import utility2 from "./images/computer/utility/utility_2.png";
import utility3 from "./images/computer/utility/utility_3.png";
import utility4 from "./images/computer/utility/utility_4.png";
import utility5 from "./images/computer/utility/utility_5.png";

// Graphic Design
import graphic1 from "./images/computer/graphic_design/graphic_1.png";
import md from "./images/computer/graphic_design/md.png";
import ai from "./images/computer/graphic_design/ai.png";
import sa from "./images/computer/graphic_design/sa.png";
import cinema4d from "./images/computer/graphic_design/cinema_4d.png";

// Photo Editing
import photo1 from "./images/computer/photo_editing/photo_1.png";
import photo2 from "./images/computer/photo_editing/photo_2.png";
import photo3 from "./images/computer/photo_editing/photo_3.png";
import photo4 from "./images/computer/photo_editing/photo_4.png";
import photo5 from "./images/computer/photo_editing/photo_5.png";

// Video Editing
import video1 from "./images/computer/video_editing/video_1.png";
import video2 from "./images/computer/video_editing/video_2.png";
import video3 from "./images/computer/video_editing/video_3.png";
import video4 from "./images/computer/video_editing/video_4.png";
import video5 from "./images/computer/video_editing/video_5.png";

// // Backup & Recovery
import backup1 from "./images/computer/backup_recovery/backup_1.png";
import backup2 from "./images/computer/backup_recovery/backup_2.png";
import backup3 from "./images/computer/backup_recovery/backup_3.png";
import backup4 from "./images/computer/backup_recovery/backup_4.png";
import backup5 from "./images/computer/backup_recovery/backup_5.png";

// Programming
import programming1 from "./images/computer/programming/programming_1.png";
import programming2 from "./images/computer/programming/programming_2.png";
import git from "./images/computer/programming/git.png";
import vscode from "./images/computer/programming/vscode.png";
import programming5 from "./images/computer/programming/programming_5.png";

// Internet
import internet1 from "./images/computer/internet/internet_1.png";
import music from "./images/computer/internet/music.png";
import internet3 from "./images/computer/internet/internet_3.png";
import internet4 from "./images/computer/internet/internet_4.png";
import internet5 from "./images/computer/internet/internet_5.png";

const computerCategories = [
  {
    title: "مولتی مدیا",
    icons: [media1, zoom, br, x, flStudio],
  },
  {
    title: "کاربردی",
    icons: [utility1, utility2, utility3, utility4, utility5],
  },
  {
    title: "طراحی گرافیک",
    icons: [graphic1, md, ai, sa, cinema4d],
  },
  {
    title: "ویرایش عکس",
    icons: [photo1, photo2, photo3, photo4, photo5],
  },
  {
    title: "ویرایش ویدئو",
    icons: [video1, video2, video3, video4, video5],
  },
  {
    title: "پشتیبان گیری و بازیابی",
    icons: [backup1, backup2, backup3, backup4, backup5],
  },
  {
    title: "برنامه نویسی",
    icons: [programming1, programming2, git, vscode, programming5],
  },
  {
    title: "اینترنت",
    icons: [internet1, music, internet3, internet4, internet5],
  },
];

function CategoryCard({ title, icons }) {
  return (
    <div className="min-w-0 rounded-3xl border border-gray-300 bg-white px-7 py-6">
      <h3 className="mb-7 text-right text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <div className="grid grid-cols-5 gap-2" dir="ltr">
        {icons.map((icon, index) => (
          <div key={index} className="flex min-w-0 items-center justify-center">
            <img
              src={icon}
              alt=""
              className="
                aspect-square
                w-full
                max-w-14
                object-contain
                transition-transform
                duration-200
                hover:scale-110
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PopularCategories() {
  const [platform, setPlatform] = useState("computer");

  return (
    <section className="w-full overflow-x-clip  mt-10 py-12 px-18 " dir="rtl">
      {/* Platform tabs */}
      <div className="mb-8 flex items-center justify-end gap-8 border-b border-gray-300  ">
        <button
          onClick={() => setPlatform("computer")}
          className={`
            relative pb-5 text-lg transition-colors
            ${
              platform === "computer"
                ? "font-semibold text-primary"
                : "text-gray-500"
            }
          `}
        >
          کامپیوتر
          {platform === "computer" && (
            <span className="absolute bottom-0 right-0 h-0.5 w-full bg-primary" />
          )}
        </button>

        <button
          onClick={() => setPlatform("mobile")}
          className={`
            relative pb-5 text-lg transition-colors
            ${
              platform === "mobile"
                ? "font-semibold text-primary"
                : "text-gray-500"
            }
          `}
        >
          موبایل
          {platform === "mobile" && (
            <span className="absolute bottom-0 right-0 h-0.5 w-full bg-primary" />
          )}
        </button>
      </div>

      {/* Categories */}
      {platform === "computer" && (
        <div className="grid min-w-0 grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {computerCategories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              icons={category.icons}
            />
          ))}
        </div>
      )}
    </section>
  );
}
