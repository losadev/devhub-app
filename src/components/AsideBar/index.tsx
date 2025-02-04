import './index.css';
import { PiHouseLight } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import LinkAside from "./Link/Link";
import ResourcesIcon from "../ResourcesIcon/ResourcesIcon";



const AsideBar = () => {
  return (
    <aside className="asidebar-container">
      <div className="logo-container">
        <div className="logo">
          <ResourcesIcon />
        </div>
      </div>
      <nav>
        <LinkAside Icon={PiHouseLight} name="Home" path="/"/>
        <LinkAside Icon={ResourcesIcon} name="Resources" path="/resources"/>
        <LinkAside Icon={FaRegStar} name="Favourites" path="/favourites"/>
        <LinkAside Icon={IoSettingsOutline} name="Settings" path="/settings" />
      </nav>
    </aside>
  )
}

export default AsideBar;