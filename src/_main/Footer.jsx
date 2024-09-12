import { Link } from "react-router-dom";
import {
  FbIcon,
  InstIcon,
  LinkedinIcon,
  PinteresIcon,
  ReturnIcon,
  SecureIcon,
  SupportIcon,
  TrackIcon,
  TWitIcon,
} from "../../public/Icons";

import Container from "../_components/Container";
import Flex from "../_components/Flex";
import "./footer.css";

export default () => {
  const spanStyles = "text-sn text-[#111111]  font-bold";
  const linkStyles = "text-sm text-[#696969] hover:text-[#2A96FF] duration-300";
  const iconStyle = "text-[22px]";
  const H3Styles =
    "relative text-[#212529] text-[22px] font-bold mb-[25px] after:absolute after:bottom-0 after:left-0 after:w-[80px] after:bg-[#2A96FF] after:h-[1px]";
  const likeul =
    "beforee  relative  text-sm text-[#696969] font-semibold  mb-[8px]";
  return (
    <>
      <div className="bg-[#F7F8FA]">
        <Container>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 h-[200px]   pt-[70px] pb-[40px]  ">
            <Flex className=" px-[12px] border-r-2">
              <TrackIcon className="text-[45px] text-[#2A96FF]  " />
              <div
                // flexDirection={"column"}
                className="pl-[30px]  "
              >
                <p className="text-[22px] text-[#212529] font-bold">
                  Free Shipping
                </p>
                <p className="text-sm text-[#696969]">
                  Free shipping world wide
                </p>
              </div>
            </Flex>

            <Flex className=" px-[12px] border-r-2">
              <SupportIcon className="text-[45px] text-[#2A96FF] ml-[15px]" />
              <div className="pl-[30px]">
                <p className="text-[22px] text-[#212529] font-bold">
                  Support 24/7
                </p>
                <p className="text-sm text-[#696969]">
                  Contact us 24 hours a day
                </p>
              </div>
            </Flex>

            <Flex className=" px-[24px] border-r-2">
              <SecureIcon className="text-[45px] text-[#2A96FF] ml-[15px]" />
              <div className="pl-[30px]">
                <p className="text-[22px] text-[#212529] font-bold">
                  Secure Payments
                </p>
                <p className="text-sm text-[#696969]">
                  Contact us 24 hours a day
                </p>
              </div>
            </Flex>

            <Flex className=" px-[30px] ">
              <ReturnIcon className="text-[45px] text-[#2A96FF] ml-[15px]" />
              <div className="pl-[22px]">
                <p className="text-[22px] text-[#212529] font-bold">
                  Easy Return
                </p>
                <p className="text-sm text-[#696969]">Simple returns policy</p>
              </div>
            </Flex>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className=" grid grid-cols-4 pt-[70px] pb-[40px]">
            <div>
              <Link to="/" className="mr-[20px]">
                <img
                  src="https://medq-react.envytheme.com/img/logo.png"
                  alt="you cant see this photo"
                  className="h-36px "
                />
              </Link>

              <div className="mb-[10px]">
                <span className={spanStyles}>Hotline:</span>
                <span className={linkStyles}>
                  <Link to="/"> 16768</Link>
                </span>
              </div>
              <div className="mb-[10px]">
                <span className={spanStyles}>Phone:</span>
                <span className={linkStyles}>
                  <Link to="/"> (+994) 51-660-24-21</Link>
                </span>
              </div>
              <div className="mb-[10px]">
                <span className={spanStyles}>Email:</span>
                <span className={linkStyles}>
                  <Link to="/"> resul.eliyev97@gmail.com</Link>
                </span>
              </div>
              <div className="mb-[10px]">
                <span className={spanStyles}>Adress:</span>
                <span className={linkStyles}>
                  <Link to="/"> 6890 Blvd Baku IceriSheren Azerbaycan</Link>
                </span>

                <Flex className="mt-[10px]" gap={10}>
                  <FbIcon className={iconStyle} />
                  <TWitIcon className={iconStyle} />
                  <InstIcon className={iconStyle} />
                  <LinkedinIcon className={iconStyle} />
                  <PinteresIcon className={iconStyle} />
                </Flex>
              </div>
            </div>
            <div>
              <div>
                <h3 className={H3Styles}>Information</h3>
              </div>

              <div className={likeul}>About us</div>
              <div className={likeul}>Contact us</div>
              <div className={likeul}>Privacy Policy</div>
              <div className={likeul}>Terms & Conditions</div>
              <div className={likeul}>Delivery Information</div>
              <div className={likeul}>Orders and Returns</div>
            </div>
            <div>
              <div>
                <h3 className={H3Styles}>Customer Care</h3>
              </div>

              <div className={likeul}>Help & FAQs</div>
              <div className={likeul}>My Account</div>
              <div className={likeul}>Order History</div>
              <div className={likeul}>Wishlist</div>
              <div className={likeul}>Newsletter</div>
              <div className={likeul}>Purchasing Policy</div>
            </div>
            <div>
              <div>
                <h3 className={H3Styles}>Newsletter</h3>
              </div>
              <div className="text-sm text-[#696969] font-semibold  w-[284px] mb-[10px]">
                Sign up for our mailing list to get the latest updates & offers.
              </div>
              <input
                type="text"
                placeholder="Enter your Email adress"
                className="w-[284px] h-[50px] border rounded px-[8px] hover:border-[#2A96FF] duration-300 "
              />
              
            <button className=" button w-[283px] mt-[12px] h-[50px] p-[11px_25px]  bg-[#2A96FF] rounded  text-white font-semibold hover:bg-white  hover:text-[#333] duration-300 ">Subscribe now</button>
            </div>
            {/* py-[18px] px-[11px] */}
          </div>
        </Container>
      </div>

     <div className="bg-[#F7F8FA]">
     
    <Container flex className="mt-[40px] py-[25px] justify-between">
    <div 
    >
        <div className="text-[#696969] font-semibold">Copyright &copy; 2024 MedQ. Designed By <span className="text-[#2a96FF] font-bold">MrAliyev</span></div>


    </div>
        <Flex
        alingItems={"center"}
        gap={10}
        >
            We accept payment via: 
            <img src="https://medq-react.envytheme.com/img/payment-types/visa.png" alt=""  />
            <img src="https://medq-react.envytheme.com/img/payment-types/mastercard.png" alt="" />
            <img src="https://medq-react.envytheme.com/img/payment-types/paypal.png" alt="" />
            <img src="https://medq-react.envytheme.com/img/payment-types/descpver.png" alt="" />
            <img src="https://medq-react.envytheme.com/img/payment-types/american-express.png" alt="" />

        </Flex>
    
    </Container> 




     </div> 
    </>
  );
};
