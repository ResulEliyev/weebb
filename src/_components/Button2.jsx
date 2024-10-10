import "../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Flex from "./Flex";
import { useStore } from "../context/StoreContext";

export default ({product:selectedProduct, prefikx, children }) => {

  const {add}=useStore()
  const handleFunction=(product)=>{
    console.log(product);
    
    if (product) {
        console.error("kele tapilmir");
        console.log("eseb oluram uje",product);
        
      add(product)
      toast("salllammmmmm??")
    }
    else {
      console.error("kele tapilmir");
      console.log("eseb oluram uje",product);

    }
      }


const multiPlay=()=>{
  handleFunction(selectedProduct)
}

  const buttonStyles =
  "buttonStyles bg-[#2A96FF] rounded text-white  p-[11px_22px]  font-semibold hover:bg-white hover:text-black duration-300 cursor-pointer ";
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
