import { useState } from "react";
import Modal from "../../modal/Modal";
import AsideBar from "../AsideBar"; 
import MainContent from "../MainContent/MainContent"; 
import './index.css'

const Layout = () => {

  const [isOpen,setIsOpen] = useState<boolean>(false)
  
  const onClose = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <div className="container-layout">
      <AsideBar />  
      <MainContent openModal={() => openModal()}/> 
      <Modal isOpen={isOpen} onClose={() => onClose()}/>
    </div>
  );
};

export default Layout;
