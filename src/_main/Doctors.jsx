import { Link } from "react-router-dom";
import Container from "../_components/Container";
import Heading from "../_components/Heading";
import Flex from "../_components/Flex";

export default () => {
  const imgStyles =
    "h-[]  object-cover w-full   hover:scale-105 hover:ease-in-out duration-500 ";
  const nameStyles =
    "font-semibold text-sm text-[#696969]  hover:text-[#2A96FF] duration-300";
  const dateStyles =
    "font-semibold text-sm text-[#696969] border-r-1 border-[#696969]";
  return (
    <Container>
      <Heading>Our Blog</Heading>
      <div className="grid grid-cols-3 gap-x-7 h-[600px] mt-[40px]  ">
            <div  className="w-full h-[500px]">
          <div >
            <div className="w-full h-full overflow-hidden">
            <img
              className={imgStyles}
              src="
              https://medq-react.envytheme.com/img/blog/blog-img1.jpg
              "
              alt=""
              />
              </div>
          </div>
          <h3 className="text-2xl font-semibold text-[#111111] my-[20px] hover:text-[#2A96FF] duration-300">
            <Link to="/">
              A researcher is conducting research on coronavirus in the lab
            </Link>
          </h3>
          <Flex className="items-center" gap={10}>
            <span>
              <img
                className="w-[35px] h-[35px] rounded-full"
                src="https://medq-react.envytheme.com/img/user1.jpg"
                alt=""
              />
            </span>
            <span className={nameStyles}>Nathan Oritz</span>
            <div className="text-[#e3e3e3]">|</div>
            <span className={dateStyles}>06-06-2020</span>
          </Flex>
        </div>
        <div  className="w-full h-[500px]">
          <div >
            <div className="w-full h-full overflow-hidden">
            <img
              className={imgStyles}
              src="
              https://medq-react.envytheme.com/img/blog/blog-img2.jpg
              "
              alt=""
              />
              </div>
          </div>
          <h3 className="text-2xl font-semibold text-[#111111] my-[20px] hover:text-[#2A96FF] duration-300">
            <Link to="/">
            You have to wash your hands for 20 seconds to keep yourself free
            </Link>
          </h3>
          <Flex className="items-center" gap={10}>
            <span>
              <img
                className="w-[35px] h-[35px] rounded-full"
                src="https://medq-react.envytheme.com/img/user2.jpg"
                alt=""
              />
            </span>
            <span className={nameStyles}>Randy Osborne</span>
            <div className="text-[#e3e3e3]">|</div>
            <span className={dateStyles}>
            05-06-2020</span>
          </Flex>
        </div>
        <div  className="w-full h-[500px]">
          <div >
            <div className="w-full h-full overflow-hidden">
            <img
              className={imgStyles}
              src="
              https://medq-react.envytheme.com/img/blog/blog-img3.jpg
              "
              alt=""
              />
              </div>
          </div>
          <h3 className="text-2xl font-semibold text-[#111111] my-[20px] hover:text-[#2A96FF] duration-300">
            <Link to="/">
            It is very important to wear proper clothing to keep yourself free
            </Link>
          </h3>
          <Flex className="items-center" gap={10}>
            <span>
              <img
                className="w-[35px] h-[35px] rounded-full"
                src="https://medq-react.envytheme.com/img/user3.jpg"
                alt=""
              />
            </span>
            <span className={nameStyles}>Patricia Marcus</span>
            <div className="text-[#e3e3e3]">|</div>
            <span className={dateStyles}>04-06-2020</span>
          </Flex>
        </div>
    
      </div>
    </Container>
  );
};
