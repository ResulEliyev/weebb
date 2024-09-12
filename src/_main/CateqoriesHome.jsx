import Container from "../_components/Container";
import Heading from "../_components/Heading";
import MiniWidgets from "../_components/MiniWidgets";

export default () => {
  const textStyles = "absolute bottom-[20px] left-8 font-semibold";
  const imgStyles =
    " h-full object-contain p-[10px] hover:scale-105 hover:ease-in-out duration-300 "
  
    // w-[170px]
  return (
    <div className=" w-full my-[30px] py-[20px]">
      <Container className=" mt-[20px]">
        <Heading>Categories</Heading>

        <div className="grid grid-cols-6 gap-[20px] mt-[40px]  sm:h-[310px] ">
          <MiniWidgets 

            text={<div className={textStyles}>Diagnostic sets</div>}
            img={
              <img
                className={imgStyles}
                src="https://medq-react.envytheme.com/img/categories/categories-img1.png"
                alt=""
              />
            }
          />

          <MiniWidgets
            text={<div className={textStyles}>Diagnostic sets</div>}
            img={
              <img
                className={imgStyles}
                src="https://medq-react.envytheme.com/img/categories/categories-img2.png"
                alt=""
              />
            }
          />
          <MiniWidgets
            text={<div className={textStyles}>Diagnostic sets</div>}
            img={
              <img
                className={imgStyles}
                src="https://medq-react.envytheme.com/img/categories/categories-img3.png"
                alt=""
              />
            }
          />
          <MiniWidgets
            text={<div className={textStyles}>Diagnostic sets</div>}
            img={
              <img
                className={imgStyles}
                src="https://medq-react.envytheme.com/img/categories/categories-img4.png"
                alt=""
              />
            }
          />
          <MiniWidgets
            text={<div className={textStyles}>Diagnostic sets</div>}
            img={
              <img
                className={imgStyles}
                src="https://medq-react.envytheme.com/img/categories/categories-img5.png"
                alt=""
              />
            }
          />
          <MiniWidgets
            text={<div className={textStyles}>Diagnostic sets</div>}
            img={
              <img
                className={imgStyles}
                src="https://medq-react.envytheme.com/img/categories/categories-img6.png"
                alt=""
              />
            }
          />
        </div>
      </Container>
    </div>
  );
};

