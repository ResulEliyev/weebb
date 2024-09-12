import { ShoppIcon } from "../../public/Icons";
import Container from "../_components/Container";
import Flex from "../_components/Flex";
import Timer from "../_components/Timer";
import "./timeBackround.css";

export default () => {
  return (
    <>
      <div className="important py-[70px] relative">
        <Container>
          <div className=" px-[12px]">
              <div className="background  ">2020</div>
            <Flex
              flexDirection={"column"}
              gap={10}
              alignItems={"center"}
              justifyContent={'flex-start'}
              className="w-[590px] h-[600px] text-center "
            >
              <div className=" text-[15px] text-[#2A96FF]  font-bold mb-[20px]">
                Deal of the Month
              </div>

                <div className=" text-center  font-bolt text-[70px] text-[#111111] w-[590px]">
                  Up to <span className="text-[#2A96FF]  font-bold">80%</span>{" "}
                  OFF. All Sales Are Final!
                </div>
                <Timer className="text-[#111111]" />
                {/* <Flex  className="absolute top-[63%]  left-75  font-bolt"
            ><Timer /></Flex> */}
                <button className="flex items-center  gap-2 font-bold bg-[#2A96FF] p-[11px_22px] text-white  rounded hover:bg-white hover:text-[#2A96FF] duration-500 ease-in-out text-[20px] ">
                  <ShoppIcon /> Shop Now
                </button>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};
