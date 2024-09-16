
import Flex from "../Flex";
import { CloseIcon } from "../../../public/Icons";


export default({ children, onClose})=>{


    
   

  return(
        <Flex
        className="w-full h-full bg-black bg-opacity-50 fixed inset-0  z-50 relative`"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <div className="w-full h-full  absolute z-10" onClick={onClose}></div>

        <div
          className=" firstID w-[900px] h-[550px] bg-white p-[40px] relative z-20 "
          // onClick={(e)=>e.stopPropagation}
        >
          <button
            className="absolute top-2 right-2  p-2 rounded text-[#333] hover:bg-red-500 hover:text-white  duration-300"
            onClick={onClose}
          >
            <CloseIcon />
          </button>

            {children}
        
        </div>
      </Flex>
    )
}