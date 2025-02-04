import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Resources from './pages/Resources'
import Favourites from './pages/Favourites'
import Settings from './pages/Settings'
import Layout from './components/Layout/Layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/favourites" element={<Favourites />} /> 
          <Route path="/settings" element={<Settings />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
