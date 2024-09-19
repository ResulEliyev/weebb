import Flex from "./Flex";
import {
  PersonICon,
  StarICon,
  AddIcon,
  HeartIcon,
  SearchIcon,
} from "../../public/Icons";
import "./productslider.css";
import products from "../_components/DataProduuct/products.json";
import { useContext, useState } from "react";
import Modal from "./sidebars/Modal";
import ModalBody from "./sidebars/ModalBody";
import { Link } from "react-router-dom";
import Button2 from "./Button2";
import { StoreContext } from "../context/StoreContext";

export default ({ item }  ) => {
  const starStyles = "text-yellow-400";
  const firstSpan = "text-sm text-[#696969] mr-[5px]";
  const secondSpan = "text-sm text-[#111111] font-bold";
  const SizeStyle =
    " text-sm font-bold text-[#858585] border-[1px] border-[#858585]  px-[10px] py-[5px]  hover:text-[#111111]  hover:border-[#111111] duration-300 ";

  const divStyles =
    "  second absolute text-sm whitespace-nowrap -top-[30px] -left-[22px] mb-[10px] bg-black text-white p-[5px] rounded  opacity-0";

  const [plus, setPlus] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState(<PersonICon />);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModal, setIsModal] = useState(false);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPlus(!isNaN(value) && value >= 1 ? value : 1);
  };

  const modalElement = (item) => {
    setSelectedProduct(item);
    setIsModal(!isModal);
  };
  const {addToCart}=useContext(StoreContext)
    const handleFunction=(item)=>{
      
  if (!item) {
      console.error("kele tapilmir");
      console.log("item",item);
      
      return;
    }
    addToCart(item)
    }

  return (
    <>
      {products.map((item) => (
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
      ))}

      {selectedProduct && (
        <Modal setIsModal={setIsModal} isModal={isModal}>
          <ModalBody onClose={() => setIsModal(!isModal)}>
            <Flex className="flex-1 key={item}">
              <div className=" h-[470px] px-[12px]">
                <img
                  className="w-full h-full object-cover"
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                />
              </div>
              <Flex
                flexDirection={"column"}
                gap={10}
                alignItems={"flex-st"}
                className="px-[12px] w-[400px]  "
              >
                <div className="w-full h-full">
                  <h3 className="font-bold text-[22px] hover:text-[#2a96ff] duration-300">
                    {selectedProduct.name}
                  </h3>
                  <div className="mt-[10px]">
                    <span className="line-through text-[#696969] text-sm font-semibold mr-1">
                      $99.23
                    </span>
                    <span className="text-[#2a96ff] text-sm font-bold">
                      %92,15
                    </span>
                  </div>
                </div>
                <Flex>
                  <Flex>
                    <StarICon className={starStyles} />
                    <StarICon className={starStyles} />
                    <StarICon className={starStyles} />
                    <StarICon className={starStyles} />
                    <StarICon className={starStyles} />
                  </Flex>
                  <span className="text-sm text-[#111111] ml-[5px] border-b-2 hover:text-[#2a96ff] duration-300">
                    3 reviews
                  </span>
                </Flex>
                <div>
                  <span className={firstSpan}>Ventor:</span>
                  <span className={secondSpan}>Lerve</span>
                </div>
                <div>
                  <span className={firstSpan}>Availability:</span>
                  <span className={secondSpan}>In stock (7 items)</span>
                </div>
                <div>
                  <span className={firstSpan}>Products Type:</span>
                  <span className={secondSpan}> medical</span>
                </div>
                <div className="text-[#212529] font-bold">Color</div>
                <Flex as="ul" flexDirection={"row"} gap={10}>
                  <li className="w-[20px] h-[20px] bg-black rounded-full  ">
                    <Link to="/"></Link>
                  </li>
                  <li className="w-[20px] h-[20px] bg-red-100 rounded-full">
                    <Link to="/"></Link>
                  </li>
                  <li className="w-[20px] h-[20px] bg-green-800 rounded-full">
                    <Link to="/"></Link>
                  </li>
                  <li className="w-[20px] h-[20px] bg-green-400 rounded-full">
                    <Link to="/"></Link>
                  </li>
                  <li className="w-[20px] h-[20px] bg-blue-900 rounded-full">
                    <Link to="/"></Link>
                  </li>
                </Flex>
                <div className="text-[#212529] font-bold">Size</div>
                <Flex as="ul" flexDirection={"row"} gap={10}>
                  <li>
                    <Link to="/" className="text-[#111111]  text-sm font-bold">
                      {selectedCurrency}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={SizeStyle}
                      onClick={() => {
                        setSelectedCurrency("XS");
                      }}
                    >
                      XS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={SizeStyle}
                      onClick={() => {
                        setSelectedCurrency("S");
                      }}
                    >
                      S
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={SizeStyle}
                      onClick={() => {
                        setSelectedCurrency("M");
                      }}
                    >
                      M
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={SizeStyle}
                      onClick={() => {
                        setSelectedCurrency("Xl");
                      }}
                    >
                      XL
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={SizeStyle}
                      onClick={() => {
                        setSelectedCurrency("Xll");
                      }}
                    >
                      XLL
                    </Link>
                  </li>
                </Flex>

                <Flex className=" gap-4 mt-[10px]">
                  <button
                    onClick={() => setPlus((prev) => Math.max(prev - 1, 1))}
                    className="border w-10 rounded  h-9"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    max="100"
                    className="border w-10 rounded  h-9 pl-2"
                    onChange={handleChange}
                    value={plus}
                  />
                  <button
                    onClick={() => setPlus((prev) => prev + 1)}
                    className="border w-10 rounded  h-9"
                  >
                    +
                  </button>

                  <Button2 className="duration-300" prefikx={<AddIcon />}>
                    Add To Cart
                  </Button2>
                </Flex>

                <Link
                  to="/"
                  className="text-[#111111] mt-[25px] text-[15px] font-bold border-b-[1px] w-max border-[#111111]
             hover:text-[#2a96ff]  hover:border-b-0 duration-700 ease-in-out"
                >
                  or View Full Info
                </Link>
              </Flex>
            </Flex>
          </ModalBody>
        </Modal>
      )}
    </>
  );
};
