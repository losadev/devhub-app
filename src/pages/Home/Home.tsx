import ButtonViewAll from "../../components/CategoryResource/ButtonViewAll/ButtonViewAll";
import CategoryResource from "../../components/CategoryResource/CategoryResource"
import { PiBracketsAngleBold } from "react-icons/pi";
import { FaDatabase } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiPaletteLine } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import './index.css'
import useResource from "../../hooks/useResource";

const Home = () => {
  const { resources} = useResource();

  const countResourcesByCategory = (type: string) => {
    return resources.filter((r) => r.type === type).length;
  }

  return (
    <div className="container-home">
      <h1 style={{color:"#fff"}}>Category Resources</h1>
      <div className="container-categories">

      <CategoryResource 
        Icon={PiBracketsAngleBold} children={<ButtonViewAll />} 
        numResources={countResourcesByCategory("Frontend")} 
        title="Frontend"/>

      <CategoryResource 
        Icon={FaDatabase} 
        children={<ButtonViewAll />} 
        numResources={countResourcesByCategory("Backend")} 
        title="Backend"/>

      <CategoryResource 
        Icon={IoSettingsOutline} 
        children={<ButtonViewAll />} 
        numResources={countResourcesByCategory("DevOps")} 
        title="DevOps"/>

      <CategoryResource 
        Icon={RiPaletteLine} 
        children={<ButtonViewAll />} 
        numResources={countResourcesByCategory("Design")}
        title="Design"/>

      <CategoryResource 
        Icon={FaTools} 
        children={<ButtonViewAll />} 
        numResources={countResourcesByCategory("Tools")} 
        title="Tools"/>
      </div>
      <div className="container-recent-res">
        <h2>Recent Resources</h2>
      </div>
    </div>
  )
}

export default Home