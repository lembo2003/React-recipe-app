import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Sidebar from "./components/Sidebar"
import FavoritesPage from "./pages/FavoritesPage"


function App() {

  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/favorites" element={<FavoritesPage />}/>
      </Routes>
    </div>
  )
}

export default App
