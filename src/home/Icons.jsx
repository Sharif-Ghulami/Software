import { House } from "lucide-react";
import { Laptop } from "lucide-react";
import { Baby } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Joystick } from "lucide-react";

// import Child from "./../pages/Child";
import { Link } from "react-router-dom";

function Icons() {
  return (
    <div>
      <div className="flex justify-center items-center gap-6     ">
        <Link to="/" className="bg-primary btn-rounded size-16  ">
          <House className="text-white " />
        </Link>
        <Link to="/Computer">
          <Laptop className=" " />
        </Link>
        <Link to="/Game">
          <Joystick />
        </Link>
        <Link to="/Mobile">
          <Smartphone />
        </Link>
        <Link to="/Child">
          <Baby />
        </Link>
      </div>
    </div>
  );
}

export default Icons;
