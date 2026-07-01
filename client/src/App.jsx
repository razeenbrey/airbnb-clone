// Packages
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

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
import { getToken, getUser } from './api/api';

function ProtectedRoute({ children }) {
  const token = getToken();
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function HostRoute({ children }) {
  const token = getToken();
  const user = getUser();
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  if (!user?.isHost) {
    return <Navigate to="/user" replace />;
  }
  return children;
}

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
        <Route path='/listing/:id' element={<Listing />} />
        <Route path='/search' element={<Search />} />
        <Route path='/user' element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        } />
        
        <Route path='/admin' element={
          <HostRoute>
            <Admin />
          </HostRoute>
        }>
          <Route index element={<Navigate to="viewlistings" replace />} />
          <Route path="createlisting" element={<AdminCreateListing />} />
          <Route path="editlisting/:id" element={<AdminCreateListing />} />
          <Route path="viewlistings" element={<AdminViewListings />} />
          <Route path="viewreservations" element={<AdminViewReservations />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
