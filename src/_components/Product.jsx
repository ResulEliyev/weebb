import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { AddIcon, HeartIcon, SearchIcon } from "../../public/Icons";
import Flex from "./Flex";
import Modal from "./sidebars/Modal";
import ModalBody from "./sidebars/ModalBody";
import ModalInside from "./sidebars/ModalInside";


export default({product:item})=>{
    
  
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModal, setIsModal] = useState(false);
  
    

    // const handleChange = (e) => {
    //   const value = parseInt(e.target.value, 10);
    //   setPlus(!isNaN(value) && value >= 1 ? value : 1);
    // };
    
  
    const modalElement = (item) => {
      setSelectedProduct(item);
      setIsModal(!isModal);
    };


    const {add}=useStore()
    const handleFunction= item=>add(item)
  

    const divStyles =
    "  second absolute text-sm whitespace-nowrap -top-[30px] -left-[22px] mb-[10px] bg-black text-white p-[5px] rounded  opacity-0";
    return(

        <>
        <div className="my-[30px]" key={item.id}>
        <div className="h-[500px] kele">
          <div className="relative overflow-hidden mt-[40px]">
            <Flex
              className="absolute top-3 z-40 px-[20px]  gap-[200px]"
              justifyContent={"space-between"}
            >
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
                  <button onClick={()=>handleFunction(item)}>
                    <AddIcon className="svg" />
                    <div className={divStyles}>Add to cart</div>
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
            <span className="text-[#2a96ff] text-sm font-bold"> $ {item.price}</span>
          </div>
        </div>
      </div>

      
      {selectedProduct && (
        <Modal setIsModal={setIsModal} isModal={isModal}>
          <ModalBody onClose={() => setIsModal(!isModal)}>
           <ModalInside product={selectedProduct} key={selectedProduct.id}/>
          </ModalBody>
        </Modal>
      )}          
        </>

    )
}