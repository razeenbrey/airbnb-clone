import { useEffect, useState } from 'react';
import HeaderLight from '../../components/headerLight/HeaderLight';
import Footer from '../../components/footer/Footer';
import TableHeader from '../../components/table/TableHeader';
import TableEntry from '../../components/table/TableEntry';
import { getUserReservations, deleteReservation } from '../../api/api';

function User(){
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const data = await getUserReservations();
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
        } catch (err) {
            alert(err.message);
        }
    };

    return(
        <>
            <HeaderLight searchBar={false} />
            <div style={{ padding: '40px' }}>
                <h2>My Reservations</h2>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div id="table-container">
                    <TableHeader />
                    {reservations.map((reservation) => (
                        <TableEntry
                            key={reservation._id}
                            bookedBy="You"
                            property={reservation.accommodation?.name || 'Property'}
                            checkIn={reservation.checkIn ? new Date(reservation.checkIn).toLocaleDateString() : ''}
                            checkOut={reservation.checkOut ? new Date(reservation.checkOut).toLocaleDateString() : ''}
                            onDelete={() => handleDelete(reservation._id)}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default User;
