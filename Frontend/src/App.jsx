
import './App.css'
import { BrowserRouter, NavLink, Routes, Link, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Signup from './Component/Signup'
import Login from './Component/Login'
import { SnackbarProvider } from 'notistack';
import RestaurantsListing from './Component/RestaurantsListing'
import Contact from './Component/Contact'
import AboutUs from './Component/AboutUs'
import Booking from './Component/Booking'
import Manageorder from './Component/Manageorder'


const App = () => {
  return (
    <div>
      <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>

        <BrowserRouter>


          <Navbar />


          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/AboutUs' element={<AboutUs />}></Route>
            <Route path='/Signup' element={<Signup />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/booking/:index' element={<Booking />}></Route>
            <Route path='/RestaurantsListing' element={<RestaurantsListing />}></Route>
            <Route path='/Manageorder' element={<Manageorder />}></Route>






          </Routes>
        </BrowserRouter>
      </SnackbarProvider>

    </div>
  )
}

export default App
