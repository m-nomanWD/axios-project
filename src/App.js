import logo from './logo.svg'
import './App.css'
// import './axios/globel'
import GlobelAxios from './components/GlobelAxios'
import FirstRequest from './components/FirstRequest'
import DadJokes from './components/DadJokes'
import PostAxios from './PostAxios'
import CustomAxios from './components/CustomAxios'
import IntersaptorAxios from './components/IntersaptorAxios'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<FirstRequest />} />
          <Route path='/dadJokes' element={<DadJokes />} />
          <Route path='/form' element={<PostAxios />} />
          <Route path='/globel' element={<GlobelAxios />} />
          <Route path='/custom' element={<CustomAxios />} />
          <Route path='/intersaptor' element={<IntersaptorAxios />} />
        </Routes>
      </Router>

      {/* <FirstRequest /> */}
      {/* <DadJokes /> */}
      {/* <PostAxios /> */}
      {/* <GlobelAxios />
      <CustomAxios /> */}
      {/* <IntersaptorAxios /> */}
    </>
  )
}

export default App
