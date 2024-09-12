// export default()=>{
//     return(
//         <div className="grid grid-cols-3"
//         >
//             <div className="bawliq "> 
//                 bura opwi divdir
//                 opwi divin ici widht i 400px
//                 height height 500px
//             <div className="imgin ici">
//                 buraninn  widi imgin vidine aidiid
//                 bura img teqinin icidi
//                 <img src="" alt="something" className="w-full h-full" />
//             </div>
//             <div className="yazilar"> 
//                 yazilarin fontu ve herweyi eyni olmalid
//                 bura adlari yazilmagi  yeridi
//             </div>
//             <div className="data">
//                 eyni 1 weydi yuxaridaki ile 
//                 bura datalarin yazildigin yerdi
//             </div>

import Container from "../_components/Container"
import Flex from "../_components/Flex"

//             </div>
//             {/* { demeli bele 
            
            
//             menim sefim hardadi
//             } */}
//         </div>
//     )
// }




// export default()=>{
//     return(
//         <>
//         <Container className="h-[200px] mt-[20px]">
//             <div className="grid grid-cols-4">

//         <div>
//             <Flex>

                
//             </Flex>
//         </div>
//         <div></div>
//         <div></div>
//         <div></div>


//             </div>


//         </Container>
//         </>

//     )
// }



// const Products = () => {
//     const [products, setProducts] = useState([]);
  
//     useEffect(() => {
//       axios.get("/") // Axios instansiyası ilə sorğu göndərin
//         .then(response => setProducts(response.data)) // Məlumatları state-ə təyin et
//         .catch(error => console.error('Error:', error)); // Xətaları tut
//     }, []);
//     return(
//         <div className="grid grid-cols-4 gap-x-[40px] mt-[40px]">
//         {products.map(product => (
//           <div className="my-[30px]" key={product.id}>
//               ))}
//     )



const[products,setProducts]=useState([])

const getData= async () =>{
    const res= await axios.get("products.json")
    return res
}

    

useEffect(()=>{
    getData().then((r)=>setProducts(r.data))
},[])


// {products.map((item)=>(

//     <div className="my-[30px]" key={item.id}>
//       <div className="h-[500px]  kele ">
//         <div className=" bawci relative overflow-hidden mt-[40px]   ">
//           <Flex  className="absolute top-3 z-40 px-[20px] gap-[215px] "
//           // justifyContent={"space-between"}
          
//           >
//             <div className="text-sm bg-blue-700 text-white font-semibold w-[40px] px-[5px]">
//               New
//             </div>
//             <div className="text-sm bg-red-600 text-white font-semibold w-[40px] px-[5px]">
//               Sale
//             </div>
//           </Flex>

//           <img
//             className="w-full  h-full  align-middle hover:scale-105 hover:ease-in-out duration-300 "
//             src={item.image}
//             alt={item.name}
//           />

//           <div className=" uleli absolute bottom-[8%]  left-[25%] opacity-0 ">
//             <Flex gap={10} as="ul" className="relative">
//               <li className="first">
//                 <Link to="/">
//                   <AddIcon className="svg" />
//                   <div className={divStyles}>
//                     Add To Cart
//                   </div>
//                 </Link>
//               </li>
//               <li className="four">
//                 <Link to="/">
//                   <HeartIcon className="svg" />
//                   <div className={divStyles}>
//                     Add To Wish
//                   </div>
//                 </Link>
//               </li>
//               <li className="first third">
//                 <Link to="/">
//                   <SearchIcon className="svg" />
//                   <div className={divStyles}>
//                     Quick View
//                   </div>
//                 </Link>
//               </li>
//             </Flex>
//           </div>
//         </div>
//         <div>
//           <p className="text-[22px] text-[#111111] font-bold my-[10px]">
//             {item.name}
//           </p>
//           <span className="line-through text-[#696969] text-sm font-bold mr-1">
//             $99.23
//           </span>
//           <span className="text-[#2a96ff] text-sm font-bold"> %92,15</span>
//         </div>
//       </div>
//     </div>
//     ))}