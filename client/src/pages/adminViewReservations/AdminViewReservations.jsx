// AdminViewReservations.jsx
import { useState, useEffect } from 'react';
import './AdminViewReservations.css';
import TableHeader from '../../components/table/TableHeader';
import TableEntry from '../../components/table/TableEntry';
import { getHostReservations, deleteReservation } from '../../api/api';

function AdminViewReservations() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const data = await getHostReservations();
        setReservations(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteReservation(id);
      setReservations(reservations.filter(res => res._id !== id));
      console.log(`Delete reservation ${id}`);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div id='AdminViewReservations'>
      <div id="avr-heading">My Reservations</div>
      {loading && <div>Loading reservations...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div id="table-container">
        <TableHeader />
        {reservations.map((reservation) => (
          <TableEntry
            key={reservation._id}
            bookedBy={reservation.user?.fullName || reservation.user?.username || 'Guest'}
            property={reservation.accommodation?.name || 'Property'}
            checkIn={reservation.checkIn ? new Date(reservation.checkIn).toLocaleDateString() : ''}
            checkOut={reservation.checkOut ? new Date(reservation.checkOut).toLocaleDateString() : ''}
            onDelete={() => handleDelete(reservation._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminViewReservations;
