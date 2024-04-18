
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Nabar'
import Home from './pages/home/Home'
import Store from './pages/store/Store'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </>
  )
}

export default App
