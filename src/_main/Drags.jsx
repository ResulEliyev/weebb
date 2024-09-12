import Container from "../_components/Container"
import Heading from "../_components/Heading"

export default()=>{
    const divSTyles="w-full h-full  mx-[20px] flex items-center justify-center border-r-2 border-[#e4e4e4] "
    return(
        <Container className="pt-[70px] pb-[40px]"  >
            <Heading>Selling Brands</Heading>
        <div className="grid grid-cols-6 pt-[20px] h-[200px]  ">
        <div className={divSTyles}>

            <img className="object-cover"  src=" 
            https://medq-react.envytheme.com/img/brands/brands-img1.png
            " alt=""  />
            </div>
            <div className={divSTyles}>

            <img src="
            https://medq-react.envytheme.com/img/brands/brands-img2.png
            " alt="" />
            </div>
            <div className={divSTyles}>

            <img src="
            https://medq-react.envytheme.com/img/brands/brands-img3.png
            " alt="" />
            </div>
            <div className={divSTyles}>

            <img src="
            https://medq-react.envytheme.com/img/brands/brands-img4.png
            " alt="" />
            </div>
            <div className={divSTyles}>

            <img src="
            https://medq-react.envytheme.com/img/brands/brands-img5.png
            " alt="" />
            </div>
            <div className={divSTyles}>

            <img src="
            https://medq-react.envytheme.com/img/brands/brands-img6.png
            " alt="" />
            </div>

        </div>

        </Container>
    )

}