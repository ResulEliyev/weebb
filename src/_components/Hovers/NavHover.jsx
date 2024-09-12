import { Link } from "react-router-dom";
import Flex from "../Flex";
import { DownIcon } from "../../../public/Icons";
import { useState } from "react";

export default () => {
  const divStyle =
    "border-b-2 border-[#e3e3e3] text-[#111111] pb-[8px] mb-[20px]";
  const liStyles = "  flex items-center hover:text-[#2A96FF] duration-300 ";

  const [isHovered, setIsHovered] = useState();
  const [isPages, setIsPages] = useState();
  const [isCategory, setIsCategory] = useState();

  const liStyle = "  text-[#666666] hover:text-[#2A96FF] duration-300";
  const AoverStyle = "mt-[14px]";
  const imgStyles =
    " h-full w-full  object-contain   hover:scale-105 hover:ease-in-out duration-300 ";
  return (
    <nav>
      <Flex as="ul" flexDirection={"row"} gap={30}>
        <li
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link to="/" className={liStyles}>
            Shop <DownIcon className="mt-[3px] text-base" />
          </Link>

          <div
            className={`absolute  left-0  w-full  h-[360px] mt-8   bg-white  transition duration-700
              grid grid-cols-4 py-[30px]  px-[10%] 
              ${isHovered ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
          style={{ transformOrigin: "50px 50px" }}

          >
            <ul className="w-[283px]">
              <div className={divStyle}>Shop Styles</div>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar With Categories
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Right Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  \Over Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Without Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Left Sidebar FullWidht
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Life Sidebar FullWidht
                </Link>
              </li>
            </ul>

            <ul className="w-[283px]">
              <div className={divStyle}>Shop Styles</div>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar With Categories
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Right Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  \Over Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Without Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Left Sidebar FullWidht
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Life Sidebar FullWidht
                </Link>
              </li>
            </ul>

            <ul className="w-[283px]">
              <div className={divStyle}>Shop Styles</div>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar With Categories
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Right Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  \Over Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Without Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Left Sidebar FullWidht
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Life Sidebar FullWidht
                </Link>
              </li>
            </ul>

            <ul className="w-[283px]">
              <div className={divStyle}>Shop Styles</div>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar With Categories
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Right Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  \Over Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Without Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Left Sidebar FullWidht
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Life Sidebar FullWidht
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li
          onMouseEnter={() => setIsPages(true)}
          onMouseLeave={() => setIsPages(false)}
        >
          <Link to="/" className={liStyles}>
            Pages <DownIcon className="mt-[3px] text-base" />
          </Link>

          <div
            className={`absolute  left-0  w-full  h-[360px] mt-8   bg-white  transition duration-700
              grid grid-cols-4 py-[30px]  px-[10%] 
              ${isPages ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
          style={{ transformOrigin: "50px 50px" }}

          >
            <ul className="w-[283px]">
              <div className={divStyle}>Shop Styles</div>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar With Categories
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Right Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  \Over Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Without Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Left Sidebar FullWidht
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Life Sidebar FullWidht
                </Link>
              </li>
            </ul>

            <ul className="w-[283px]">
              <div className={divStyle}>Shop Styles</div>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar With Categories
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Right Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  \Over Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Without Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Left Sidebar FullWidht
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Life Sidebar FullWidht
                </Link>
              </li>
            </ul>

            <ul className="w-[283px]">
              <div className={divStyle}>Shop Styles</div>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar With Categories
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Right Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  \Over Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Without Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Left Sidebar FullWidht
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Life Sidebar FullWidht
                </Link>
              </li>
            </ul>

            <ul className="w-[283px]">
              <div className={divStyle}>Shop Styles</div>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar With Categories
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Right Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  \Over Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Without Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Left Sidebar FullWidht
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Life Sidebar FullWidht
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          onMouseEnter={() => setIsCategory(true)}
          onMouseLeave={() => setIsCategory(false)}
        >
          <Link to="/" className={liStyles}>
            Collections <DownIcon className="mt-[3px] text-base" />
          </Link>
          <div
            className={`absolute  left-0  w-full  h-[450px] mt-8   bg-white  transition duration-700
              grid grid-cols-4 py-[30px]  px-[10%] 
              ${
                isCategory ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
              }`}
          style={{ transformOrigin: "50px 50px" }}

          >
            <ul className="w-[283px]">
              <div className={divStyle}>Shop Styles</div>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar With Categories
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Right Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  \Over Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Without Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Left Sidebar FullWidht
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Life Sidebar FullWidht
                </Link>
              </li>
            </ul>

            <ul className="w-[283px]">
              <div className={divStyle}>Shop Styles</div>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar With Categories
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Right Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  \Over Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Without Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Left Sidebar FullWidht
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Life Sidebar FullWidht
                </Link>
              </li>
            </ul>

            <ul className="w-[283px]">
              <div className={divStyle}>Shop Styles</div>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Life Sidebar With Categories
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Right Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  \Over Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  Without Sidebar
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Left Sidebar FullWidht
                </Link>
              </li>
              <li className={AoverStyle}>
                <Link to="/" className={liStyle}>
                  {" "}
                  With Life Sidebar FullWidht
                </Link>
              </li>
            </ul>

            <Flex flexDirection={"column"} gap={10} className="w-[283px] ">
              <div className="  overflow-hidden relative  w-[283px] h-[190px] [&>a]:hover:-translate-y-5  ">
                <img
                  className={imgStyles}
                  src="https://medq-react.envytheme.com/img/navbar/navbar-img1.jpg"
                  alt=""
                />
                <Link to="/" className="absolute bottom-1 bg-white  p-[5px]  left-[20%] text-center w-[200px] duration-300 ">
                TOP TRENNING
                 </Link>
              </div>

              <div className=" overflow-hidden relative  w-[283px] h-[190px] [&>a]:hover:-translate-y-5">
                <img
                  className={imgStyles}
                  src="https://medq-react.envytheme.com/img/navbar/navbar-img2.jpg"
                  alt=""
                />
                 <Link to="/" className="absolute bottom-1 bg-white  p-[5px]  left-[20%] text-center w-[200px]  duration-300 ">
                POPULAR PRODUCT
                 </Link>
              </div>
            </Flex>
          </div>
        </li>
      </Flex>
    </nav>
  );
};


