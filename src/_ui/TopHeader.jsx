import Container from "../_components/Container";
import { DownIcon, LocationIcon, PhoneIcon } from "../../public/Icons";
import Flex from "../_components/Flex";
import TopHeaderList from "../HelpersUi/TopHeaderList";
import { Link } from "react-router-dom";
import { useState } from "react";

export default () => {
  const [isHovered, setIsHovered] = useState();
  const info = [
    {
      label: "(+994) 51-660-24-21",
      path: "/",
      icon: PhoneIcon,
    },
    {
      label: "6890 Blvd, The Bronx, NY 1058, USA",
      path: "/",
      icon: LocationIcon,
    },
  ];

  const divStyles = "bg-[#F7F8FA] font-semibold ";
  const containerStyle = "py-[10px] ";

  return (
    <div className={divStyles}>
      <Container
        justifyContent={"space-between"}
        flex
        className={containerStyle}
      >
        <Flex as="ul" gap={20} className="right">
          {info.map((label, index) => (
            <TopHeaderList key={index} nav={label} />
          ))}
        </Flex>

        <Flex gap={10} className="left">
          <ul className="relative">
            <li
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative"
            >
              <Link to="/" className="flex items-center">
                USD <DownIcon className="mt-[3px] text-base" />
              </Link>
              <div
                className={`absolute top-full left-0 mt-2 w-[170px] bg-white  shadow-lg transition-transform duration-1000 ${
                  isHovered ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                }`}
                style={{ transformOrigin: "40px 80px" }}
              >
                <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
                  USD
                </Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
                  Euro
                </Link>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
                  AZN
                </Link>
              </div>
            </li>
          </ul>

          <div className="text-[#e3e3e3]">|</div>
          <Link to="/">My Account</Link>
        </Flex>
      </Container>
    </div>
  );
};
