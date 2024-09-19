import "../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearch } from "../context/ContextApi";
import Flex from "./Flex";

export default ({ prefikx, children }) => {
  const { addToCart} = useSearch();

const multiPlay=()=>{
    addToCart()
    toast("salllammmmmm??")
}

  const buttonStyles =
    " buttonStyles bg-[#2A96FF] rounded text-white  p-[11px_22px]  font-semibold hover:bg-white hover:text-black duration-300";
  return (
    <Flex
      alingItems={"center"}
      gap={10}
      className={buttonStyles}
      onClick={multiPlay}
    >
      <ToastContainer
        position="bottom-left"
        limit={3}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />  
      {prefikx && prefikx}
      {children}
      
    </Flex>
  );
};
