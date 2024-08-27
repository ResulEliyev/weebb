import { CloseIcon } from "../../../public/Icons";

export default function Sidebar({
  isOpenSidebar,
  setOpenSidebar,
  onClose,
  children,
}) {
  const sidebarClass = "fixed inset-0 bg-black z-40 bg-opacity-50 ";
  const cartClass = `p-[15px] font-bold text-xl z-40 fixed right-0 top-0 h-full w-[300px]
        bg-white shadow-lg transform transition-transform duration-1000 ease-in-out
        ${isOpenSidebar ? "translate-x-0" : "translate-x-full"}`;

  return (
    <>
      {isOpenSidebar && (
        <div
          className={sidebarClass}
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}
      <div className={cartClass}>
        <div>
          <h2> My Cart(0)</h2>
        </div>
        <div>
          <h2>Subtotal</h2>
        </div>

        <button
          className="absolute top-2 right-2 hover:text-blue-600"
          onClick={onClose}  
        //   onClick={() => setIsSidebarOpen(false)}
        >
          <CloseIcon />
        </button>
      </div>
    </>
  );
}

// <div onClick={onClose} className="h-full">
