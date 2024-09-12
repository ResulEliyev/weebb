// import { createContext, useContext, useState } from "react";

// const SearchContext = createContext();
// export const useSearch = () => useContext(SearchContext);

// export default function SearchProvider({ children }) {
//   const [search, setSearch] = useState("");
//   const[showSearch,setShowSearch]=useState(false)


//   const toggle=()=>setShowSearch(!showSearch)

//   const data = {
//     search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         toggle
//    };

//   return (
//     <SearchContext.Provider
//       value={{
//        data
//       }}
//     >
//       {children}
//     </SearchContext.Provider>
//   );
// }
