import { Link } from "react-router-dom";
import { CloseIcon } from "../../../public/Icons";
import Flex from "../Flex";
import Basket from "../Basket";
import { useStore } from "../../context/StoreContext";


export default function Sidebar({ isOpenSidebar, onClose }) {
  const sidebarClass = "fixed inset-0 bg-black  z-20  bg-opacity-50 ";
  const cartClass = `p-[15px] font-bold text-xl z-20  fixed right-0 top-0 h-full w-[320px]
  bg-white shadow-lg transform transition-transform duration-1000 ease-in-out
  ${isOpenSidebar ? "translate-x-0" : "translate-x-full"}`;

  const {cart, totalPrice} = useStore();

  

  return (
    <>
      {isOpenSidebar && <div className={sidebarClass} onClick={onClose}></div>}

      <div className={cartClass}>
        <div>
          <h2> My Cart({cart.length})</h2>
        </div>
        

        {cart.map((p, i) => (
          <Basket key={i} item={p} />
        ))}
        <Flex
          justifyContent={"space-between"}
          className="border border-[#e3e3e3] mt-[20px] p-[10px]"
        >
          <span>Subtotal</span>
          <span>${totalPrice}</span>
        </Flex>

        <button className="mt-[20px] p-[15px] bg-blue-500 text-white rounded-lg w-full hover:bg-white hover:text-black  transition duration-1000 ease-in-out">
          <Link to="/">Procced to Checkout</Link>
        </button>

        <button
          className="absolute top-5 right-3 hover:text-blue-600 transition duration-300"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      </div>
    </>
  );
}

// <div onClick={onClose} className="h-full">
