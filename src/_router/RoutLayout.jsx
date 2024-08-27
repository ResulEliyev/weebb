import { Outlet } from "react-router-dom"
import Header from "../_ui/Header"
import TopHeader from "../_ui/TopHeader"
import InsideOverlay from "../HelpersUi/InsideOverlay";
import { useState } from "react";
import Overlay from "../_components/sidebars/Overlay";
import Main from "../_ui/Main";

export default()=>{
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    return(
        <>
        <TopHeader/>
        <Header setIsOverlayOpen={setIsOverlayOpen} />
        <Outlet/>
        <Overlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(!isOverlayOpen)}
      >
        <InsideOverlay/>
      </Overlay>
      <Main/>
        </>
    )
}