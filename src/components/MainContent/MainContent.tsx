import { Outlet } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import './index.css'
import Button from "../Button/Button"

const MainContent = () => {
  return (
    <main>
      <div className="container-input-btn">
      <SearchBar />
      <Button />
      </div>
      <Outlet />
    </main>
  )
}

export default MainContent