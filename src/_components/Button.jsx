
import Flex from "./Flex"
import "../index.css"

export default({prefikx,children})=>{
    const buttonStyles=" buttonStyles bg-[#2A96FF] rounded text-white  p-[11px_22px]  font-semibold hover:bg-white hover:text-black duration-300"
    return(
        <Flex as="button"
        alingItems={"center"}
         gap={10}
         className={buttonStyles}
        >
             {prefikx && prefikx}
        {children}

        </Flex>
    )
}