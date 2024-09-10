import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Category from './pages/Category'
import { Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
<Header/>
      <Routes>
        <Route path='/' element={<Category/>}>Category</Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
