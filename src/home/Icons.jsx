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
          ? "flex flex-col items-center gap-5"
          : "flex flex-row-reverse  items-center gap-8   "
      }
    >
      <IconLink to="/" label="خانه" active mobile={mobile}>
        <House />
      </IconLink>

      <IconLink to="/Computer" label="کامپیوتر" mobile={mobile}>
        <Laptop size={24} />
      </IconLink>

      <IconLink to="/Child" label="کودک" mobile={mobile}>
        <Baby size={24} />
      </IconLink>

      <IconLink to="/Mobile" label="موبایل" mobile={mobile}>
        <Smartphone size={24} />
      </IconLink>

      <IconLink to="/Game" label="بازی" mobile={mobile}>
        <Joystick size={24} />
      </IconLink>
    </div>
  );
}

export default Icons;

export function IconLink({ to, children, label, active, mobile }) {
  return (
    <Link
      to={to}
      className="
        group relative
        flex size-11
        items-center justify-center
      "
    >
      {/* Icon */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 flex size-11 items-center justify-center rounded-full border border-gray-300 ${
          active ? "bg-primary text-white" : "bg-white text-gray-600"
        } ${
          mobile
            ? !active
              ? "hover:bg-gray-100"
              : ""
            : "transition-all duration-300 ease-out group-hover:scale-125 group-hover:translate-y-3 group-hover:shadow-lg"
        }`}
      >
        {children}
      </div>

      {/* Label - desktop only */}
      {!mobile && (
        <span
          className="
            absolute
            -bottom-7
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            text-md
            font-medium
            text-gray-600
            border border-gray-300
            size-14
            w-12
            h-8
            rounded-3xl
            flex items-center justify-center
            opacity-0
            translate-y-4
            transition-all
            duration-300
            group-hover:opacity-100
            group-hover:translate-y-6
            bg-white
          "
        >
          {label}
        </span>
      )}
    </Link>
  );
}

// export function IconLink({ to, children, label, active, mobile }) {
//   return (
//     <lInk>
//       <div className="" to={to}>
//         {children}
//       </div>
//       <div className="">{label}</div>
//     </lInk>
//   );
// }
