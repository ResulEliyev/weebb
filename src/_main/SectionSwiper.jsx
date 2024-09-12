import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./firstSwiper.css";

import { Autoplay, Navigation } from "swiper/modules";
import Flex from "../_components/Flex";
import Button from "../_components/Button";
import { AddIcon } from "../../public/Icons";

export default () => {
  const bgColor = "bg-blue-50   overflow";
  return (
    <>
      <section className="  bg-blue-50 h-[664px]  mx-auto">
        {/* <Container flex className="h-[620px] mt-[20px] "> */}
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          className="mySwiper absolute h-full "
        >
          <SwiperSlide className={bgColor}>
            <div className="grid grid-cols-2">
              <div className="sidebar  relative">
                <Flex
                  flexDirection={"column"}
                  gap={10}
                  alignItems={"left"}
                  className=" leftSlider  absolute top-[15%]  "
                >
                  <h4 className="text-[#2A96FF] font-bold">New Arrivals</h4>
                  <h1 className="text-[#212529] text-[60px] w-[400px]  font-bold">
                    Triton Grip Nitrile
                    <span className="text-[#2A96FF]"> Gloves</span>
                  </h1>
                  <h6 className="text-[#696969] text-ms">
                    Gloves protect our hands from a varientyof things. Nitrile
                    glowes are comfortable to wear
                  </h6>
                  <Flex gap={15} className="mt-[20px]">
                    <Button
                      className="text-[15px]"
                      prefikx={<AddIcon className="mt-[4px] " />}
                    >
                      Shop Now
                    </Button>
                    <button className="font-bold text-[#2A96FF]">$50.00</button>
                  </Flex>
                </Flex>
              </div>

              <div className="rightSlider sm:h-[536px]  md:w-[536px] ">
                <img
                  className="sm:h-[400px] object-cover"
                  src="https://medq-react.envytheme.com/img/banner/banner-img1.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={bgColor}>
            <div className="grid grid-cols-2">
              <div className="sidebar  relative">
                <Flex
                  flexDirection={"column"}
                  gap={10}
                  alignItems={"left"}
                  className=" leftSlider  absolute top-[15%]"
                >
                  <h4 className="text-[#2A96FF] font-bold">New Arrivals</h4>
                  <h1 className="text-[#212529] text-[55px] w-[400px]  font-bold">
                    Safety Glase Protective
                    <span className="text-[#2A96FF]"> Glove</span>
                  </h1>
                  <h6 className="text-[#696969] text-ms">
                    Gloves protect our hands from a varientyof things. Nitrile
                    glowes are comfortable to wear
                  </h6>
                  <Flex gap={15} className="mt-[20px]">
                    <Button
                      className="text-[15px]  delay-300"
                      prefikx={<AddIcon className="mt-[4px] " />}
                    >
                      Shop Now
                    </Button>
                    <button className="font-bold text-[#2A96FF]">$50.00</button>
                  </Flex>
                </Flex>
              </div>

              <div className="rightSlider  sm:h-[450px]  md:w-[619px] ">
                <img
                  className="sm:h-[450px] object-cover "
                  src="https://medq-react.envytheme.com/img/banner/banner-img2.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={bgColor}>
            <div className="grid grid-cols-2">
              <div className="sidebar  relative">
                <Flex
                  flexDirection={"column"}
                  gap={10}
                  alignItems={"left"}

                  className=" leftSlider  absolute top-[15%]"
                >
                  <h4 className="text-[#2A96FF] font-bold">New Arrivals</h4>
                  <h1 className="text-[#212529] text-[55px] w-[400px]  font-bold">
                    Protective Sugrical
                    <span className="text-[#2A96FF]"> Mask</span>
                  </h1>
                  <h6 className="text-[#696969] text-ms">
                    Gloves protect our hands from a varientyof things. Nitrile
                    glowes are comfortable to wear
                  </h6>
                  <Flex gap={15} className="mt-[20px]">
                    <Button
                      className="text-[15px]"
                      prefikx={<AddIcon className="mt-[4px] " />}
                    >
                      Shop Now
                    </Button>
                    <button className="font-bold text-[#2A96FF]">$50.00</button>
                  </Flex>
                </Flex>
              </div>

              <div className="rightSlider sm:h-[450px]  md:w-[619px] ">
                <img
                  className="sm:h-[450px] object-cover"
                  src="https://medq-react.envytheme.com/img/banner/banner-img3.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* </Container> */}
      </section>
    </>
  );
};
