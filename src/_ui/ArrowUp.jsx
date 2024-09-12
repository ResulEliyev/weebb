import { useEffect, useState } from "react";
import { ArrowUpIcon } from "../../public/Icons";

export default () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    {backToTop && (
      <button
        className="fixed w-[50px] h-[50px] bg-[#2A96FF] bottom-[20px] right-[30px] z-40  rounded "
        onClick={scrollUp}
      >
        <ArrowUpIcon className="h-[20px] w-[20px] m-[15px] text-white  " />
        </button>
    )}
    </>

    );
};
