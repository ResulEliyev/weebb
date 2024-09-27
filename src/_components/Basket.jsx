import { TrashIcon } from "../../public/Icons";
import { useStore } from "../context/StoreContext";
import Flex from "./Flex";

export default ({ item }) => {

const {remove}=useStore()

const handleRemove=()=>{
  remove(item.id)
}

  return (
    <Flex className="flex-row p-2 " alignItems="center" gap={8}>
        <div className="overflow-hidden">

      <img src={item.image} alt={item.name} className="w-20 hover:scale-150 duration-700" />
        </div>

      <div className="w-1/2 px-5">
        <p className="text-[17px] font-bold ">{item.name}</p>
        <p  className="text-[15px] text-gray-500 cursor-pointer" >{item.quantity} x $ {item.price}</p>
      </div>
      <button
      onClick={handleRemove}
      className="text-lg font-medium hover:text-red-600 duration-300 ml-[13px] mt-[10px] cursor-pointer"><TrashIcon/></button>
    </Flex>
  );
};
