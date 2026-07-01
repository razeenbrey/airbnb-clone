// AdminViewReservations.jsx
import { useState } from 'react';
import './AdminViewReservations.css';
import TableHeader from '../../components/table/TableHeader';
import TableEntry from '../../components/table/TableEntry';

function AdminViewReservations() {
  // Sample data - this would come from your API
  const [reservations, setReservations] = useState([
    {
      id: 1,
      bookedBy: "Johann Coetzee",
      property: "Property 1",
      checkIn: "2024-03-15",
      checkOut: "2024-03-20"
    },
    {
      id: 2,
      bookedBy: "Sarah Johnson",
      property: "Beach Villa",
      checkIn: "2024-04-01",
      checkOut: "2024-04-05"
    },
    {
      id: 3,
      bookedBy: "Mike Peters",
      property: "Mountain Cabin",
      checkIn: "2024-03-25",
      checkOut: "2024-03-30"
    }
  ]);

  const handleDelete = (id) => {
    setReservations(reservations.filter(res => res.id !== id));
    console.log(`Delete reservation ${id}`);
  };

  return (
    <div id='AdminViewReservations'>
      <div id="avr-heading">My Reservations</div>
      <div id="table-container">
        <TableHeader />
        {reservations.map((reservation) => (
          <TableEntry
            key={reservation.id}
            bookedBy={reservation.bookedBy}
            property={reservation.property}
            checkIn={reservation.checkIn}
            checkOut={reservation.checkOut}
            onDelete={() => handleDelete(reservation.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminViewReservations;