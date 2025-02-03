import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AsideBar from './components/AsideBar'

function App() {

  return (
    <>
    <BrowserRouter>
      <AsideBar></AsideBar>
    </BrowserRouter>
    </>
  )
}

export default App
