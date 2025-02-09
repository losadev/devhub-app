import { Outlet } from "react-router-dom"
import './index.css'

const MainContent = () => {

  return (
    <main>
      <Outlet />
    </main>
  )
}

export default MainContent