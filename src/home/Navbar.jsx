import { Menu } from "lucide-react";
import Contact from "../pages/Contact";
import Icons from "./Icons";
import logo from "../../logo.png";
function Navbar() {
  return (
    <div className="fixed top-8 z-50 w-full ">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="hidden items-center justify-between rounded-full border pl-3.5 pr-5 backdrop-blur-sm lg:flex border-gray-300/80 bg-white">
          <Contact />
          <Icons />
          <img className="w-auto h-1/2 cursor-pointer " src={logo} alt="Logo" />
        </div>
        {/* /* Mobile Navbar */}
        <div className="flex items-center justify-between">
          <button>
            <Menu size={24} />
          </button>
          <img
            className="lg:hidden sm:w-auto h-1/2 cursor-pointer sm:px-4 "
            src={logo}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
