// import { X, Menu } from "lucide-react";
// import Contact from "../pages/Contact";
// import Icons from "./Icons";
// import logo from "../../logo.png";
// import { useState } from "react";

// function Navbar() {
//   function handleToggle() {
//     setIsOpen((isOpen) => !isOpen);
//   }
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="fixed top-8 z-50 w-full ">
//       <div className="max-w-5xl mx-auto px-6 lg:px-8">
//         <div className="hidden items-center justify-between rounded-full border pl-3.5 pr-5 backdrop-blur-sm lg:flex border-gray-300/80 bg-white">
//           <Contact />
//           <Icons />
//           <img className="w-auto h-1/2 cursor-pointer " src={logo} alt="Logo" />
//         </div>
//         {/* /* Mobile Navbar */}
//         <div className="lg:hidden relative flex items-center justify-between rounded-full border pl-3.5 pr-5 backdrop-blur-sm lg:flex border-gray-300/80 bg-white">
//           <div>
//             <button className="" onClick={handleToggle}>
//               {isOpen ? <X /> : <Menu size={24} />}
//             </button>
//             <Icons className="absolute flex-col gap-2 rounded-full border p-2 shadow-lg border-gray-300/80 bg-white shadow-gray-900/10col" />
//           </div>
//           <img
//             className="sm:w-auto h-1/2 cursor-pointer sm:px-4 "
//             src={logo}
//             alt="Logo"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import { X, Menu } from "lucide-react";
import Contact from "../pages/Contact";
import Icons from "./Icons";
import logo from "../../logo.png";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="fixed top-8 z-50 w-full">
      <div className="max-w-5xl mx-auto px-6  lg:px-8">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex py-2 items-center justify-between rounded-full border pl-3.5 pr-5  border-gray-300/80 bg-white backdrop-blur-sm">
          <Contact />
          <Icons />

          <a href="/" className="flex items-center justify-center ">
            <img className=" cursor-pointer w-auto h-6" src={logo} alt="Logo" />
          </a>
        </div>

        {/* Mobile Navbar */}
        <div className="relative flex p-2 lg:hidden items-center justify-between rounded-full border pl-3.5 pr-5 border-gray-300/80 bg-white backdrop-blur-sm">
          {/* Menu */}
          <div className="relative">
            <button onClick={handleToggle} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Icons */}
            {isOpen && (
              <div className="absolute px-1 top-full left-0 mt-5 py-2 rounded-2xl border border-gray-300/80 bg-white shadow-lg">
                <Icons mobile />
              </div>
            )}
          </div>

          {/* Logo */}
          <img
            className="h-5 w-auto cursor-pointer sm:px-4 "
            src={logo}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
