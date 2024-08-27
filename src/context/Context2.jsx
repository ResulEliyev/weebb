// import {  replace, useNavigate } from "react-router-dom"
// import { useSearch } from "./ContextApi"

// export default()=>{
//     const[ search,setSearch,showSearch,setShowSearch]=useSearch()
//     const navigate=useNavigate()

//     const getSearch=(e)=>{
//         e.preventDefault();
//         const querry=e.target.element.search.value
//         setSearch(querry);
//         navigate("/product")
//         toggle()
//     }
//     return(
//             <Overlay onClose={toggle}>

//             <form onSubmit={getSearch}>
//               <input type="text" name="search" defaultValue={search} placeholder="Axtarış et..." />
//               <button type="submit" onClick={()=>navigate("/product",{replace:true})}>Axtar</button>
//             </form>
//             </Overlay>
//     )
// }