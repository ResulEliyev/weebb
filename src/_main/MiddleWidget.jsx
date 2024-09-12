import { Link } from "react-router-dom";
import Container from "../_components/Container";
import Widget from "../_components/Widget";
import { RightIcon } from "../../public/Icons";

export default () => {
  const imgStyles =
    "h-full w-full object-cover align-middle hover:scale-105 hover:ease-in-out duration-300";
  const textStyles = "absolute top-[10%] right-0 z-40 py-[24px] text-right ";
  const titleStyles = "text-[15px] text-[#696969] font-semibold  mb-[10px] mr-[20px]";
  const productStyles="text-[#111111] font-semibold text-[25px] bg-[#cae7d9] px-[20px]  rounded-l-2xl "
 
  return (
    <>
      <Container flex className="sm:h-full py-[30px]">
        <div className="grid grid-cols-3 w-full gap-x-10 "
        >
          <Widget
          text={<div className={textStyles}>
            <p className={titleStyles}>Special Deal</p>
            <p className={productStyles}>Mega Sale Mela</p>
            <span className="text-[#111111] font-semibold ">up to </span> 
            <span className="text-[#111111] font-semibold text-[25px] mr-[20px] "> 70% off</span>
                <div className="mt-[20px] mr-[20px] ">
            
            <Link to="/" className="text-[#111111] font-semibold  hover:text-[#2A96FF] duration-300 flex text-right items-center justify-end">Shop Now 
            <RightIcon/>

            </Link>
                </div>

          </div>
          }
            img={
              <img className={imgStyles}
                src="https://medq-react.envytheme.com/img/promotions/promotions-img1.jpg"
                alt="why u can't see?"
              />
            }
          />

          <Widget 
            text={<div className={textStyles}>
            <p className={titleStyles}>New Arrivals</p>
            <p className="text-[#111111] font-semibold text-[25px] bg-[#f1e6b9] px-[20px]  rounded-l-2xl">Hand Washer</p>
            <span className="text-[#111111] font-semibold ">up to </span> 
            <span className="text-[#111111] font-semibold text-[25px] mr-[20px] "> $49.00</span>
            <div className="mt-[20px] mr-[20px] ">
            
            <Link to="/" className="text-[#111111] font-semibold  hover:text-[#2A96FF] duration-300 flex text-right items-center justify-end">Shop Now 
            <RightIcon/>

            </Link>
                </div>

          </div>
          }
          
          img={
            <img className={imgStyles}
            src="https://medq-react.envytheme.com/img/promotions/promotions-img2.jpg"
            alt="why u can't see?"

            />
          }
          
          />
          <Widget
            text={<div className={textStyles}>
            <p className={titleStyles}>Hot Collection</p>
            <p className= "text-[#111111] font-semibold text-[25px] bg-[#b6d2f1] px-[20px]  rounded-l-2xl">Clucose Meter</p>
            <span className="text-[#111111] font-semibold ">up to </span> 
            <span className="text-[#111111] font-semibold text-[25px] mr-[20px] "> 20% off</span>
            <div className="mt-[20px] mr-[20px] ">
            
            <Link to="/" className="text-[#111111] font-semibold  hover:text-[#2A96FF] duration-300 flex text-right items-center justify-end">Shop Now 
            <RightIcon/>

            </Link>
                </div>

          </div>
          }
          
          img={
            <img className={imgStyles}
            src="https://medq-react.envytheme.com/img/promotions/promotions-img3.jpg"
            alt="why u can't see?"

            />
          }
          />
        </div>
      </Container>
    </>
  );
};
