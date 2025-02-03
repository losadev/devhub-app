import { BrowserRouter } from "react-router-dom"
import AsideBar from "./AsideBar"

const Layout = () => {
  return (
    <>
     <BrowserRouter>
      <AsideBar></AsideBar>
    </BrowserRouter>
    </>
  )
}

export default Layout