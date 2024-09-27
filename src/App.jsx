import { BrowserRouter, Route, Routes } from "react-router-dom"
import RoutLayout from "./_router/RoutLayout"
import Home from "./_router/Home"
import StoreProvider from "./context/StoreContext"
export default()=>{
  return(
<StoreProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RoutLayout/>}>
      <Route index element={<Home/>} ></Route>
      </Route>
    </Routes>
    </BrowserRouter>
</StoreProvider>
  )
}