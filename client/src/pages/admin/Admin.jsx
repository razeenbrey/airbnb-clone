// Admin.jsx
import { Outlet, Link } from 'react-router-dom';
import './Admin.css';

// Assets

// Components
import HeaderLight from '../../components/headerLight/HeaderLight';
import Footer from '../../components/footer/Footer';

function Admin() {
  return (
    <div id='admin'>
      <HeaderLight searchBar={false}/>
      <nav id='admin-nav'>
        <Link className='link-butt' to="/admin/createlisting">Create Listing</Link>
        <Link className='link-butt' to="/admin/viewlistings">View Listings</Link>
        <Link className='link-butt' to="/admin/viewreservations">View Reservations</Link>
      </nav>
      
      {/* Child routes render here */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Admin;