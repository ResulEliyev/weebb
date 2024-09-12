import { AddIcon } from "../../public/Icons"
import Button from "./Button"
import Flex from "./Flex"

export default()=>{
    return(
        <Flex gap={15} className="mt-[20px]">
        <Button
          className="text-[15px] duration-300 "
          prefikx={<AddIcon className="mt-[4px] " />}
        >
          Shop Now
        </Button>
        <button className="font-bold text-[#2A96FF]">$50.00</button>
      </Flex>
    )
}