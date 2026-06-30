// Admin.jsx
import { Outlet, Link } from 'react-router-dom';

function Admin() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <Link to="/admin/createlisting">Create Listing</Link>
        <Link to="/admin/viewlistings">View Listings</Link>
        <Link to="/admin/viewreservations">View Reservations</Link>
      </nav>
      
      {/* Child routes render here */}
      <Outlet />
    </div>
  );
}

export default Admin;