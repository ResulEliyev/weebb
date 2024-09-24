
// import { ToastContainer, toast,Bounce} from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Flex from "../Flex";
// import { useContext } from "react";
// import { StoreContext } from "../../context/StoreContext";

// export default({item,prefikx})=>{
//   const{removeFromCart}=useContext(StoreContext
//   )
//   const handleRemove = () => {
//     removeFromCart(item);
//     toast("salllammmmmm??")
//   };
  
//     const buttonStyles =
//       " text-lg font-medium hover:text-red-600 duration-300 ml-[13px] mt-[10px] cursor-pointer";
//       return (
//           <Flex 
//           alingItems={"center"}
//           gap={10}
//           className={buttonStyles}
//           onClick={handleRemove}
//       >
//         <ToastContainer
//           position="bottom-left"
//           limit={3}
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="dark"
//           transition:Bounce
//         />   
//         {prefikx && prefikx}
//       {children}
//       </Flex>
//     );
//   };
  
// // text-lg font-medium hover:text-red-600 duration-300 ml-[13px] mt-[10px] cursor-pointer"