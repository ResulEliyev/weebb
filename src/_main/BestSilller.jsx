import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import {  Autoplay, Navigation } from "swiper/modules";
import Container from "../_components/Container";
import Heading from "../_components/Heading";
import "./imageCarusel.css";
import products from "../_components/DataProduuct/products.json";
import Flex from "../_components/Flex";
// import { Link } from "react-router-dom";
import { AddIcon, HeartIcon, PersonICon, SearchIcon, StarICon } from "../../public/Icons";
import {  useState } from "react";
import Modal from "../_components/sidebars/Modal";
import ModalBody from "../_components/sidebars/ModalBody";
// import Button2 from "../_components/Button2";
import { useStore } from "../context/StoreContext";
import ModalInside from "../_components/sidebars/ModalInside";

export default () => {

  const  divStyles="  second absolute text-sm whitespace-nowrap -top-[30px] -left-[22px] mb-[10px] bg-black text-white p-[5px] rounded  opacity-0"
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModal, setIsModal] = useState(false);


  const modalElement = (item) => {
    setSelectedProduct(item);
    setIsModal(!isModal);
  };
  const {add}=useStore()
    const handleFunction=(item)=>{
      
  if (!item) {
      console.error("kele tapilmir");
      console.log("item",item);
      
      return;
    }
    add(item)
    }
  return (
    <>
      <Container>
        <Heading className="mb-[50px]">Best Siller</Heading>
      </Container>

      <Swiper
        className="pt-[30px] prevNext"
        navigation={true}
        spaceBetween={30}
        slidesPerView={4}
        modules={[Navigation,Autoplay ]}
          
          autoplay={{
              delay: 10000,
              disableOnInteraction: true,
          }}
      >
          {products.map((item) => (
        <SwiperSlide key={item.id}>
            <div className="my-[30px]">
              <div className="h-[500px] kele">
                <div className="relative overflow-hidden mt-[40px]">
                  <Flex className="absolute top-3 z-40 px-[20px] gap-[215px]">
                    <div className="text-sm bg-blue-700 text-white font-semibold w-[40px] px-[5px]">
                      New
                    </div>
                    <div className="text-sm bg-red-600 text-white font-semibold w-[40px] px-[5px]">
                      Sale
                    </div>
                  </Flex>

                  <img
                    className="w-full h-full align-middle hover:scale-105 hover:ease-in-out duration-300"
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="absolute bottom-[8%] left-[25%] opacity-0 uleli">
                    <Flex gap={10} as="ul" className="relative">
                      <li className="first">
                        <button onClick={() => handleFunction(item)}>
                          <AddIcon className="svg" />
                          <div className={divStyles}>Add To Cart</div>
                        </button>
                      </li>
                      <li className="four">
                        <button>
                          <HeartIcon className="svg" />
                          <div className={divStyles}>Add To Wish</div>
                        </button>
                      </li>
                      <li className="first third">
                        <button onClick={() => modalElement(item)}>
                          <SearchIcon className="svg" />
                          <div className={divStyles}>Quick View</div>
                        </button>
                      </li>
                    </Flex>
                  </div>
                </div>
                <div>
                  <p className="text-[22px] text-[#111111] font-bold my-[10px]">
                    {item.name}
                  </p>
                  <span className="line-through text-[#696969] text-sm font-bold mr-1">
                    $99.23
                  </span>
                  <span className="text-[#2a96ff] text-sm font-bold">
                    {" "}
                    %92,15
                  </span>
                </div>
              </div>
            </div>
        </SwiperSlide>
          ))}
        {selectedProduct && (
        <Modal setIsModal={setIsModal} isModal={isModal}>
          <ModalBody onClose={() => setIsModal(!isModal)}>
           <ModalInside product={selectedProduct} key={selectedProduct.id}/>
          </ModalBody>
        </Modal>
      )}          
      </Swiper>
    </>
  );
};

