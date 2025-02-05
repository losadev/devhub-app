import ButtonViewAll from "../../components/CategoryResource/ButtonViewAll/ButtonViewAll";
import CategoryResource from "../../components/CategoryResource/CategoryResource"
import { PiBracketsAngleBold } from "react-icons/pi";
import { FaDatabase } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiPaletteLine } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import './index.css'
import RecentResources from "../../components/RecentResources/RecentResources";

const Home = () => {
  return (
    <div className="container-home">
      <div className="container-categories">
      <CategoryResource Icon={PiBracketsAngleBold} children={<ButtonViewAll />} numResources={0} title="Frontend"/>
      <CategoryResource Icon={FaDatabase} children={<ButtonViewAll />} numResources={0} title="Backend"/>
      <CategoryResource Icon={IoSettingsOutline} children={<ButtonViewAll />} numResources={0} title="DevOps"/>
      <CategoryResource Icon={RiPaletteLine} children={<ButtonViewAll />} numResources={0} title="Design"/>
      <CategoryResource Icon={FaTools} children={<ButtonViewAll />} numResources={0} title="Tools"/>
      </div>
      <div className="container-recent-res">
        <RecentResources />
      </div>
    </div>
  )
}

export default Home