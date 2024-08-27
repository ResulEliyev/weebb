// import { useState } from "react";
// import { DownIcon } from "../../../public/Icons";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "./blog.css"

export default()=>{
  // const[isHovered,setIsHovered]=useState()

    return(
      //   <ul className="relative">
      //   <li
      //     onMouseEnter={() => setIsHovered(true)}
      //     onMouseLeave={() => setIsHovered(false)}
      //     className="relative"
      //   >
      //     <Link to="/" className="flex items-center">
      //       Blog <DownIcon className="mt-[3px] text-base" />
      //     </Link>
      //     <div
      //       className={`absolute top-full left-0 mt-2 w-[170px] bg-white  shadow-lg transition-transform duration-700 ${
      //         isHovered ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
      //       }`}
      //       style={{ transformOrigin: "40px 80px" }}
      //     >
            
      //       <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
      //           GRID(2 in ROW)
      //       </Link>
      //       <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
      //       GRID(3 in ROW)
      //       </Link>
      //       <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
      //       RIGHT-SIDEBAR
      //       </Link>
      //       <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
      //       BLOG-DATAILS
      //       </Link>
      //     </div>
      //   </li>
      // </ul>
      <ul>

      <li className="dropdown-li">
                    <Link href={"/"} className="flex items-center ">
                      HOMMMEEEE
                      <FaChevronDown />
                    </Link>
                    <ul>
                      <li><Link href={"/"}>Home 1</Link></li>
                      <li><Link href={"/"}>Home 2</Link></li>
                    </ul>
                  </li>
      </ul>
    )
}