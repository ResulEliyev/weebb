export default ({ children, className }) => {
  const divStyles = [
    "text-[#212529] text-[25px]  font-bold p-[8px]  h-full  w-full border-b border-[#e3e3e3]",
    className].join(" ")
  return <div className={divStyles}>{children}</div>;
};
