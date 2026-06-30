// Packages
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

// Assets
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

// CSS
import './App.css'

// Pages
import Admin from './pages/admin/Admin';
import AdminCreateListing from './pages/adminCreateListing/AdminCreateListing';
import AdminViewListings from './pages/adminViewListings/AdminViewListings';
import AdminViewReservations from './pages/adminViewReservations/AdminViewReservations';
import Home from './pages/home/Home';
import Listing from './pages/listing/Listing';
import Search from './pages/search/Search';
import User from './pages/user/User';
import Login from './pages/login/Login';

function App() {

  return (
    <>

    <BrowserRouter>

        {/* This is how you move from page to page */}
        {/* <nav>
          <Link to='/'>Home</Link> |{" "}
          <Link to='/admin'>Admin</Link> |{" "}
          <Link to='/listing'>Listing</Link>
          <Link to='/search'>Search</Link>
          <Link to='/user'>User</Link>
        </nav> */}
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/listing' element={<Listing />} />
        <Route path='/search' element={<Search />} />
        <Route path='/user' element={<User />} />
        
        <Route path='/admin' element={<Admin />}>
          <Route path="createlisting" element={<AdminCreateListing />} />
          <Route path="viewlistings" element={<AdminViewListings />} />
          <Route path="viewreservations" element={<AdminViewReservations />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
