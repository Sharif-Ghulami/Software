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
          ? "flex flex-col items-center gap-5  "
          : "flex items-center gap-5 "
      }
    >
      <Link to="/" className="bg-primary btn-rounded size-10  ">
        <House className="text-white " />
      </Link>
      <Link to="/Computer">
        <Laptop size={24} />
      </Link>

      <Link to="/Child">
        <Baby size={24} />
      </Link>

      <Link to="/Mobile">
        <Smartphone size={24} />
      </Link>

      <Link to="/Game">
        <Joystick size={24} />
      </Link>
    </div>
  );
}

export default Icons;
