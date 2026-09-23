// import { House } from "lucide-react";
// import { Laptop } from "lucide-react";
// import { Baby } from "lucide-react";
// import { Smartphone } from "lucide-react";
// import { Joystick } from "lucide-react";

// // import Child from "./../pages/Child";
// import { Link } from "react-router-dom";

// function Icons({ mobile = false }) {
//   return (
//     <div>
//       <div
//         className={
//           mobile
//             ? "flex flex-col justify-center items-center gap-6 "
//             : "flex justify-center items-center gap-8"
//         }
//       >
//         <Link to="/Child">
//           <Baby />
//         </Link>

//         <Link to="/Mobile">
//           <Smartphone />
//         </Link>
//         <Link to="/Game">
//           <Joystick />
//         </Link>
//         <Link to="/Computer">
//           <Laptop className=" " />
//         </Link>
//         <Link to="/" className="bg-primary btn-rounded size-12  ">
//           <House className="text-white " />
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Icons;
import { House, Laptop, Baby, Smartphone, Joystick } from "lucide-react";

import { Link } from "react-router-dom";

function Icons({ mobile = false }) {
  return (
    <div
      className={
        mobile
          ? "flex flex-col items-center gap-5   "
          : "flex flex-row-reverse  items-center gap-8   "
      }
    >
      <Link
        to="/"
        className="bg-primary btn-rounded size-10 hover:size-20 hover:translate-y-4  "
      >
        <House className="text-white " />
      </Link>
      <IconLink to="/Computer">
        <Laptop size={24} />
      </IconLink>

      <IconLink to="/Child">
        <Baby size={24} />
      </IconLink>

      <IconLink to="/Mobile">
        <Smartphone size={24} />
      </IconLink>

      <IconLink to="/Game">
        <Joystick size={24} />
      </IconLink>
    </div>
  );
}

export default Icons;

export function IconLink({ to, children }) {
  return (
    <Link
      className=" size-9 border border-gray-400 rounded-full flex items-center justify-center "
      to={to}
    >
      {children}
    </Link>
  );
}
