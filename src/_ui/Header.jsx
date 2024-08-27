import { Link } from "react-router-dom";
import Container from "../_components/Container";
import { HeartIcon, SearchIcon, ShoppIcon } from "../../public/Icons";
import Flex from "../_components/Flex";
import HomeHover from "../_components/Hovers/HomeHover";
import ShopHover from "../_components/Hovers/ShopHover";
import Pages from "../_components/Hovers/Pages";
import Collections from "../_components/Hovers/Collections";
import Blog from "../_components/Hovers/Blog";
import { useState } from "react";
import Sidebar from "../_components/sidebars/Sidebar";
import Wishlist from "../_components/sidebars/Wishlist";

// import { useSearch } from "../context/ContextApi";

export default ({ isOverlayOpen, setIsOverlayOpen }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const getElement = () => {
    setOpenSidebar(!openSidebar);
  };

  const wishElement = () => {
    setOpenSidebar(!openSidebar);
  };

  // const {toggle}=useSearch()
  const toggleSearch = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };
  // let menuRef=useRef()

  // useEffect(()=>{
  //   let handler =(e)=>{
  //     if(!menuRef.current.contains(e.target)){
  //     setOpenSidebar(false)
  //     console.log(menuRef);

  //     }
  //   };

  //   document.addEventListener("mousedown",handler)
  // })

  const button = "cursor-pointer hover:text-blue-500 ease-in-out  relative";
  const overlay = "mt-[10px] py-[8px]";
  const imgHeight = "h-[36px]";

  return (
    <Container flex justifyContent={"space-between"} className={overlay}>
      <Link to="/" className="mr-[20px]">
        <img
          src="https://medq-react.envytheme.com/img/logo.png"
          alt="you cant see this photo"
          className={imgHeight}
        />
      </Link>

      <Flex gap={30} className="font-bold text-[#111111] ">
        <HomeHover /> <ShopHover /> <Pages /> <Collections /> <Blog />
        <Link to="/">Contact</Link>
      </Flex>

      <Flex gap={20} className="text-2xl">
        <button className={button} onClick={wishElement}>
          <HeartIcon />
        </button>

        <button className={button} onClick={getElement}>
          <ShoppIcon />{" "}
          <h6 className="absolute -top-[9px] right-0 text-[15px] text-red-600 p-[1px] ">
            0
          </h6>
        </button>

        <button className={button} onClick={toggleSearch}>
          <SearchIcon />
        </button>
      </Flex>

      <Sidebar
        isOpenSidebar={openSidebar}
        //  isOpenSidebar={setOpenSidebar}
        onClose={() => setOpenSidebar(!openSidebar)}
      ></Sidebar>
      <Wishlist></Wishlist>
      {/* 
           <Wislist
       isOpenSidebar={openSidebar}
          //  isOpenSidebar={setOpenSidebar}
           onClose={() => setOpenSidebar(!openSidebar)}>
           </Wislist>
                       */}
      {/* <Overlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(!isOverlayOpen)}
      >
        <InsideOverlay/>
      </Overlay> */}
    </Container>
  );
};
