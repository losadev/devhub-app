import { Link } from "react-router-dom";
import '../styles/index.css';
import { PiHouseLight } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";



const AsideBar = () => {
  return (
    <aside className="asidebar-container">
      <div className="logo-container">
        <div className="logo">
          <svg fontSize={30}  stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6" data-pc-el-id="FiBook-38-38" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        </div>
      </div>
      <nav>
        <Link className="link" to="/"><span><PiHouseLight size={24}/></span><span>Home</span></Link>
        <Link className="link" to="/resources"><span>   <svg fontSize={24}  stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6" data-pc-el-id="FiBook-38-38" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg></span><span>Resources</span></Link>
        <Link className="link" to="/favourites"><span><FaRegStar size={24}/></span><span>Favourites</span></Link>
        <Link className="link" to="/settings"><span><IoSettingsOutline size={24} /></span><span>Settings</span></Link>
      </nav>
    </aside>
  )
}

export default AsideBar;