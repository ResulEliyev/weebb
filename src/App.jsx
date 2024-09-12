import { BrowserRouter, Route, Routes } from "react-router-dom"
import RoutLayout from "./_router/RoutLayout"
import Home from "./_router/Home"
// import SearchProvider from "./context/ContextApi"

export default()=>{
  return(
    // <SearchProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RoutLayout/>}>
      <Route index element={<Home/>} ></Route>
      
      </Route>
    </Routes>
    </BrowserRouter>
    // </SearchProvider>
  )
}