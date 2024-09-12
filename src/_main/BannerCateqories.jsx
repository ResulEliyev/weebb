import Container from "../_components/Container";
import Flex from "../_components/Flex";
import NearButton from "../_components/NearButton";
import Widget from "../_components/Widget";

export default () => {
  const containerStyles = "sm:h-[300px]  ";
  const imgStyles="h-full w-full object-cover align-middle hover:scale-105 hover:ease-in-out duration-300"
  const textStyles="absolute top-[20%] z-40 p-[24px] "
  const titleStyles="text-[15px] text-[#696969] font-semibold"
  const productStyles="text-[#111111] font-semibold text-[25px] hover:text-[#2A96FF] duration-300"


  return (
    <section>
      <Container flex className={containerStyles}>
        <div className="grid grid-cols-2 w-full h-[250px] mt-[70px] mb-[40px] gap-x-10" >
          <Widget 
          text={ <div className={textStyles}>

            <p className={titleStyles}>
            Temprature
          </p>

          <p className={productStyles}>
            Ear Thermometers
          </p>
          <NearButton/>
        </div>}

        img={
          <img className={imgStyles}
            src="https://medq-react.envytheme.com/img/banner-categories/banner-categories-img1.jpg"
                alt=""
              />
        }
          />
        
            <Widget
            text={
              <div className={textStyles}>

              <p className={titleStyles}>
                Personal
              </p>
              <p className={productStyles}>
                Favorite Collection
              </p>
              <NearButton/>            
              </div>
            }
            
            img={ <img
            className={imgStyles}
              src="https://medq-react.envytheme.com/img/banner-categories/banner-categories-img2.jpg"
              alt=""
            />}

            />


        </div>
      </Container>
    </section>
  );
};
