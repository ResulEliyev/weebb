import Container from "../_components/Container";
import Heading from "../_components/Heading";
import "./imageCarusel.css";

import "../_components/productslider.css";
import SliderProduct from "../_components/SliderProduct";


export default () => {

  return (
    <div >
      <Container>
        <Heading className="mt-[50px]">New Arrivals</Heading>
        <div className="overflow-hidden relative  w-full h-full ">
          <div className="grid grid-cols-4 gap-x-[40px] mt-[40px]  ">
            <SliderProduct/>
            </div>
        </div>
      </Container>
    </div>
  );
};
