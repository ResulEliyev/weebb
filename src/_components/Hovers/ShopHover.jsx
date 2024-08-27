import { useState } from "react";
import { DownIcon } from "../../../public/Icons";
import { Link } from "react-router-dom";

export default () => {
  const [isHovered, setIsHovered] = useState();

  return (
    <ul className="relative">
      <li
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
      >
        <Link to="/" className="flex items-center">
          Shop <DownIcon className="mt-[3px] text-base" />
        </Link>
        <div
          className={`absolute top-full left-0 -translate-x-5 mt-2 w-[1200px] h-[350px] bg-white  shadow-lg transition-transform duration-1000 ${
            isHovered ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
          style={{ transformOrigin: "top  right" }}
        >
          <div className="grid grid-cols-4">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
              HOME-DEMO-1
            </Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
              HOME-DEMO-2
            </Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
              HOME-DEMO-3
            </Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
              HOME-DEMO-4
            </Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
              HOME-DEMO-4
            </Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
              HOME-DEMO-4
            </Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
              HOME-DEMO-4
            </Link>
          </div>
        </div>
      </li>
    </ul>
  );
};
