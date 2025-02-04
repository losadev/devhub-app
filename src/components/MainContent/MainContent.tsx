import { Outlet } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import './index.css'

const MainContent = () => {
  return (
    <main>
      <SearchBar />
      <Outlet />
    </main>
  )
}

export default MainContent