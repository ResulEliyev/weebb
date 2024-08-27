

import { Link } from "react-router-dom"
import Flex from "../_components/Flex"
import { FaChevronDown } from "react-icons/fa6"
import "./mains.css"

export default()=>{
    return(
        <Flex className="header-bottom bg-[--primary-bg]">
        <Flex className="container ">
          <Flex className="px-[15px] w-full" justifyContent={"center"}>
            <Flex as="nav" justifyContent={"center"} className="w-full">
              <Flex as="ul">
                <li className="dropdown-li">
                  <Link href={"/"} className="flex items-center ">
                    Home
                    <FaChevronDown />
                  </Link>
                  <ul>
                    <li><Link href={"/"}>Home 1</Link></li>
                    <li><Link href={"/"}>Home 2</Link></li>
                  </ul>
                </li>
                <li className="ml-10 text-white [&>a]:hover:text-[--primary-orange]">
                  <Link className="duration-200 text-sm" href={"/about"}>About</Link>
                </li>
                <li className="dropdown-li">
                  <Link href={"/"} className="flex items-center ">
                    Home Furniture <FaChevronDown />
                  </Link>
                  <ul>
                        <li><Link href={"/collection/bedroom"}>Bedroom</Link></li>
                        <li><Link href={"/collection/dining"}>Dining</Link></li>
                        <li><Link href={"/collection/living"}>Living</Link></li>
                      </ul>
                </li>
                <li className="dropdown-li">
                  <Link href={"/"} className="flex items-center ">
                    Office Furniture <FaChevronDown />
                  </Link>
                  <ul>
                        <li><Link href={"/collection/lounge"}>Lounge</Link></li>
                        <li><Link href={"/collection/office-chair"}>Office Chair</Link></li>
                        <li><Link href={"/collection/office-table"}>Office Table</Link></li>
                      </ul>
                </li>
                <li className="dropdown-li">
                  <Link href={"/"} className="flex items-center ">
                    Hospital Furniture <FaChevronDown />
                  </Link>
                  <ul>
                        <li><Link href={"/collection/hospital-bed"}>Hospital Bed</Link></li>
                        <li><Link href={"/collection/hospital-utility"}>Hospital Utility</Link></li>
                      </ul>
                </li>
                <li className="ml-10 text-white [&>a]:hover:text-[--primary-orange]">
                  <Link className="duration-200 text-sm" href={"/contact"}>Contact</Link>
                </li>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        </Flex>

    )
}