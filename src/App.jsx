import { BrowserRouter, Route, Routes } from "react-router-dom"
import RoutLayout from "./_router/RoutLayout"
// import SearchProvider from "./context/ContextApi"

export default()=>{
  return(
    // <SearchProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RoutLayout/>}></Route>
    </Routes>
    </BrowserRouter>
    // </SearchProvider>
  )
}