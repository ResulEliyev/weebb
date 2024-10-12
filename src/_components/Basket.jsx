import { useState } from "react";
import { TrashIcon } from "../../public/Icons";
import { useStore } from "../context/StoreContext";
import Flex from "./Flex";

export default ({ item }) => {
  const { remove, updateQuantity } = useStore();

  const handleRemove = () => {
    remove(item.id);
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPlus(!isNaN(value) && value >= 1 ? value : 1);
  };

  const handleUpdateQuantity = (change) => {
    const newQuantity = plus + change;
    if (newQuantity > 0) {
      setPlus(newQuantity);
      updateQuantity(item.id, change);
    }
  };

  const [plus, setPlus] = useState(item.quantity);
  
  return (
    <Flex className="flex-row p-2 h-[180px] " alignItems="center" gap={8}>
      <div className="overflow-hidden ">
        <img
          src={item.image}
          alt={item.name}
          className="w-20  hover:scale-150 duration-700"
        />
      </div>

      <div className="w-1/2 px-5">
        <p className="text-[17px] font-bold ">{item.name}</p>
        <Flex className=" gap-4 mt-[10px]">
          <button
            onClick={() => handleUpdateQuantity(-1)}
            className="border  w-10 px-[16px] rounded  h-9 "
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
            value={item.quantity}
          />
          <button
            onClick={() => handleUpdateQuantity(1)}
            className="border w-10 px-[16px] rounded  h-9 text-red-950"
          >
            +
          </button>
        </Flex>
        <p className="text-[15px] text-gray-500 cursor-pointer">
          {item.quantity} x $ {item.price}
        </p>
      </div>
      <button
        onClick={handleRemove}
        className="text-lg font-medium hover:text-red-600 duration-300 ml-[13px] mb-[50px] cursor-pointer"
      >
        <TrashIcon />
      </button>
    </Flex>
  );
};
