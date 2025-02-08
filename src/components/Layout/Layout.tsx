import Modal from "../../modal/Modal";
import useResource from "../../hooks/useResource";
import AsideBar from "../AsideBar";
import MainContent from "../MainContent/MainContent";
import './index.css'

const Layout = () => {
  const { isOpen, onClose, openModal } = useResource();

  return (
    <div className="container-layout">
      <AsideBar />
      <MainContent openModal={openModal} />
      <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        
      />
    </div>
  );
};

export default Layout;

