import { useState } from "react";
import { Link } from "react-router-dom";
import { DownIcon } from "../../../public/Icons";

export default () => {
  const [isHovered, setIsHovered] = useState();
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  return (
    <ul className="relative">
      <li
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
      >
        <Link to="/" className="flex items-center">
          {selectedCurrency}
          <DownIcon className="mt-[3px] text-base" />
        </Link>
        <div
          className={`absolute top-full left-0 mt-2 w-[170px] !bg-white  z-[60] shadow-lg transition-transform duration-1000 ${
            isHovered ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
          style={{ transformOrigin: "40px 80px" }}
        >
          <Link to="/" className="block px-4 py-2 hover:bg-gray-200"
          onClick={()=>setSelectedCurrency("USD")}
          >
            USD
          </Link>
          <Link to="/" className="block px-4 py-2 hover:bg-gray-200"
          onClick={()=>setSelectedCurrency("EURO")}
          
          >
            Euro
          </Link>
          <Link to="/" className="block px-4 py-2 hover:bg-gray-200"
          onClick={()=>setSelectedCurrency("AZN")}
          
          >
            AZN
          </Link>
        </div>
      </li>
    </ul>
  );
};
