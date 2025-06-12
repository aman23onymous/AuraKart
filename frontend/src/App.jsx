  import React from 'react';
  import { Routes,Route } from 'react-router-dom';
  import Collection from './pages/Collection';
  import Home from './pages/home';
  import Contact from './pages/Contact';
  import Product from './pages/Product';
  import Cart from './pages/Cart';
  import Login from './pages/Login';
  import Placeorder from './pages/Placeorder';
  import Orders from './pages/Orders';
  import Navbar from './components/Navbar';
  import About from './pages/About';
  import Footer from './components/Footer';
  import SearchBar from './components/SearchBar';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'
  const App = () => {
    return (
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9pw] bg-gradient-to-tr from-[#ff6ec4] to-[#7873f5]
  '>
        <h1>Work in progress</h1>
        <ToastContainer/>
        <Navbar/>
        <SearchBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Collection' element={<Collection/>} />
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Product/:ProductId' element={<Product/>}/>
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Placeorder' element={<Placeorder/>} />
          <Route path='/Orders' element={<Orders/>} />
        </Routes>
        <Footer/>
      </div>
    )
  }

  export default App