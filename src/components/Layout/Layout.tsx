import AsideBar from "../AsideBar"; 
import MainContent from "../MainContent/MainContent"; 
import './index.css'

const Layout = () => {
  return (
    <div className="container-layout">
      <AsideBar />  
      <MainContent /> 
    </div>
  );
};

export default Layout;
