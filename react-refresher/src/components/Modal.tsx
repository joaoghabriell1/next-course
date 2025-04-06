import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("..");
  };

  return (
    <>
      <div onClick={closeHandler} className={classes.modalWrapper}></div>
      {children}
    </>
  );
};

export default Modal;
