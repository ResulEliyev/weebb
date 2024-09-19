import { Link } from "react-router-dom";
import Container from "../_components/Container";
import { HeartIcon, SearchIcon, ShoppIcon } from "../../public/Icons";
import Flex from "../_components/Flex";
import HomeHover from "../_components/Hovers/HomeHover";
import Blog from "../_components/Hovers/Blog";
import { useContext, useState } from "react";
import Sidebar from "../_components/sidebars/Sidebar";
import Wishlist from "../_components/sidebars/Wishlist";
import NavHover from "../_components/Hovers/NavHover";
import { StoreContext } from "../context/StoreContext";


export default ({ isOverlayOpen, setIsOverlayOpen,  }) => {

  const {products}=useContext(StoreContext)
  // const { cartCount } = useSearch();


  const [openSidebar, setOpenSidebar] = useState(false);

  const getElement = () => {
    setOpenSidebar(!openSidebar);
  };

  const wishElement = () => {
    setOpenSidebar(!openSidebar);
  };

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
  const headerStyle = "  py-[20px] sticky top-0  bg-white z-[50] ";

  return (
    <header className={headerStyle}>
      <Container flex justifyContent={"space-between"} className={overlay}>
        <Link to="/" className="mr-[20px]">
          <img
            src="https://medq-react.envytheme.com/img/logo.png"
            alt="you cant see this photo"
            className={imgHeight}
          />
        </Link>
        <Flex gap={30} className="font-bold text-[#111111] ">
          <HomeHover /> <NavHover /> <Blog />
          <Link to="/">Contact</Link>
        </Flex>

        <Flex gap={20} className="text-2xl">
          <button className={button} onClick={wishElement}>
            <HeartIcon />
          </button>

          <button className={button} onClick={getElement}>
            <ShoppIcon className="relative" />
            <span className=" absolute  -top-[4px]  -right-[4px] text-[10px] bg-red-500 w-[13px]  text-white flex items-center justify-center rounded-full font-bold leading-4 ">
              {products.length}
            </span>
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
    </header>
  );
};
