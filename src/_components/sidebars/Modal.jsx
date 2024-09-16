import ModalBody from "./ModalBody";



export default ({ children,  isModal,  setIsModal }) => {
  
  

  return (
    <>
      {isModal && children}
    </>
  );
};
