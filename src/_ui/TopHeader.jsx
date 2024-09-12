import Container from "../_components/Container";
import {  LocationIcon, PhoneIcon } from "../../public/Icons";
import Flex from "../_components/Flex";
import TopHeaderList from "../HelpersUi/TopHeaderList";
import { Link } from "react-router-dom";
import MoneyHover from "../_components/Hovers/MoneyHover";
import "./respons/topHeader.css"

export default () => {
  const info = [
    {
      label: "(+994) 51-660-24-21",
      path: "/",
      icon: PhoneIcon,
    },
    {
      label: "6890 Blvd, The Bronx, NY 1058, USA",
      path: "/",
      icon: LocationIcon,
    },
  ];

  const divStyles = "bg-[#F7F8FA] font-semibold ";
  const containerStyle = "py-[10px] ";

  return (
    <div className={divStyles}>
      <Container
        justifyContent={"space-between"}
        flex
        className={containerStyle}
      >
        <Flex as="ul" gap={20} className="right">
          {info.map((label, index) => (
            <TopHeaderList key={index} nav={label} />
          ))}
        </Flex>

        <Flex  gap={10} >
          
          <MoneyHover/>

          <div className="text-[#e3e3e3]">|</div>
          <Link to="/">My Account</Link>
        </Flex>
      </Container>
    </div>
  );
};
