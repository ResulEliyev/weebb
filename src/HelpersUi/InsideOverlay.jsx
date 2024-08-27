import { Link } from "react-router-dom"
import { SearchIcon } from "../../public/Icons"
import Flex from "../_components/Flex"

export default()=>{
    return(

        <Flex>

          <Flex
            alingItems={"center"}
            className= "p-[5px] w-[500px] h-[60px] bg-white absolute top-[50%] right-[50%] translate-x-[50%] rounded-full"
          >
            <input
              type="text"
              placeholder="Search here.."
              className="grow px-[20px] "
            />
            <button>
              <Link to="/">
                <SearchIcon className="bg-[#2A96FF] text-white h-[50px] w-[50px] p-[10px] rounded-full" />
              </Link>
            </button>
          </Flex>
        </Flex>
    )
}