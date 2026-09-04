import Contact from "../pages/Contact";
import Icons from "./Icons";
import logo from "../../logo.png";
function Navbar() {
  return (
    <div className="flex items-center justify-around  ">
      <Contact/>
      <Icons />
     <img className="w-auto h-1/2 cursor-pointer " src={logo} alt="Logo" />
    </div>
  );
}

export default Navbar;
