import { Link } from "react-router-dom";
import { AddIcon, StarICon } from "../../../public/Icons";
import Flex from "../Flex";
import { useState } from "react";
import Button from "../Button";

export default ({ isModal, onClose, setIsModal }) => {
  const starStyles = "text-yellow-400";
  const firstSpan = "text-sm text-[#696969] mr-[5px]";
  const secondSpan = "text-sm text-[#111111] font-bold";

  const [plus, setPlus] = useState(1);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPlus(!isNaN(value) && value >= 1 ? value : 1);
  };

  

  return (
    <>
      { isModal && (
        <Flex
          className="w-full h-full bg-black bg-opacity-50 fixed inset-0  z-50"
          alignItems={"center"}
          justifyContent={"center"}
          onClick={onClose}
        >
          <div className="w-[900px] h-[550px] bg-white p-[40px] relative 
          
          ">
            <Flex className="flex-1">
              <div className=" h-[470px] px-[12px]">
                <img
                  className="w-full h-full object-cover"
                  src="https://res.cloudinary.com/dev-empty/image/upload/v1594280379/medq/products-img11.jpg"
                  alt=""
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
                    Medical Mask
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
                    {" "}
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
                {/* p-[5px]  border-[1px] border-[#111111] */}
                <Flex as="ul" flexDirection={"row"} gap={10}>
                  <li className="w-[20px] h-[20px] bg-black rounded-full  ">
                    <Link to="/"></Link>
                  </li>
                  <li  className="w-[20px] h-[20px] bg-red-100 rounded-full" >
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
                  <li >
                    <Link to="/">black</Link>
                  </li>
                  <li>
                    <Link to="/">white</Link>
                  </li>
                  <li>
                    <Link to="/">DarkGreen</Link>
                  </li>
                  <li>
                    <Link to="/">Green</Link>
                  </li>
                  <li>
                    <Link to="/">Blue</Link>
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
                    defaultValue="1"
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

                  <Button className="duration-300" prefikx={<AddIcon />}>
                    Add To Cart
                  </Button>
                </Flex>

                <Link
                  to="/"
                  className="text-[#111111] mt-[25px] text-[15px] font-bold border-b-[1px] w-max border-[#111111]
                   hover:text-[#2a96ff] duration-300 hover:border-b-0 "
                >
                  or View Full Info
                </Link>
              </Flex>
            </Flex>
          </div>
        </Flex>
      )}
    </>
  );
};

{
  /* <button
  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded"
>
  X
</button> */
}
