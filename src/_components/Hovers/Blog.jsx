import { useState } from "react";
import { DownIcon } from "../../../public/Icons";
import { Link } from "react-router-dom";


export default () => {
  const [isHovered, setIsHovered] = useState();
  const linkStyles=" block px-5 py-4 text-[#696969] border-b-2 hover:text-[#2A96FF] duration-300"

  return (
    <ul className="relative">
      <li
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
      >
        <Link to="/" className="flex items-center">
          Blog <DownIcon className="mt-[3px] text-base" />
        </Link>
        <div
          className={`absolute top-full left-0 mt-8 w-[250px] bg-white  shadow-lg transition  duration-700 ${
            isHovered ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
          style={{ transformOrigin: "40px 80px" }}
        >
          <Link to="/" className={linkStyles}>
            GRID(2 in ROW)
          </Link>
          <Link to="/" className={linkStyles}>
            GRID(3 in ROW)
          </Link>
          <Link to="/" className={linkStyles}>
            RIGHT-SIDEBAR
          </Link>
          <Link to="/" className={linkStyles}>
            BLOG-DATAILS
          </Link>
        </div>
      </li>
    </ul>
  );
};
