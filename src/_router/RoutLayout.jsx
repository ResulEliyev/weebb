import { Outlet } from "react-router-dom";
import TopHeader from "../_ui/TopHeader"
import Header from "../_ui/Header"
import Overlay from "../_components/sidebars/Overlay"
import { useState } from "react";
import InsideOverlay  from "../HelpersUi/InsideOverlay"
import Footer from "../_main/Footer";
import ArrowUp from "../_ui/ArrowUp";


export default()=>{
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    return(
        <>
        <TopHeader />
        <Header setIsOverlayOpen={setIsOverlayOpen}/>
        <Outlet/>
        <Overlay
          isOpen={isOverlayOpen}
          onClose={() => setIsOverlayOpen(!isOverlayOpen)}
          >
          <InsideOverlay />
        </Overlay>
        <Footer/>
          <ArrowUp/>
        </>

    )
}