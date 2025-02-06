import { Outlet } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import './index.css'
import Button from "../Button/Button"

type Props = {
  openModal: () => void
}

const MainContent = ({openModal}:Props) => {

  return (
    <main>
      <div className="container-input-btn">
      <SearchBar />
      <Button openModal={openModal}/>
      </div>
      <Outlet />
    </main>
  )
}

export default MainContent