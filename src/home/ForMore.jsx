import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ForMore({ to }) {
  return (
    <Link className="know-more flex items-center justify-center gap-1" to={to}>
      <ChevronLeft size={18} />
      <span className="text-md  "> بیشر ببینید</span>
    </Link>
  );
}
