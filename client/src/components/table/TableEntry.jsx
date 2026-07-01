// TableEntry.jsx
import './TableEntry.css';
import Button from '../buttons/Button';

function TableEntry({ 
  bookedBy, 
  property, 
  checkIn, 
  checkOut, 
  onDelete 
}) {
  return (
    <div className="table-entry">
      <div className="col col-1">{bookedBy}</div>
      <div className="col col-2">{property}</div>
      <div className="col col-3">{checkIn}</div>
      <div className="col col-4">{checkOut}</div>
      <div className="col col-5">
        <Button 
          text={"Delete"} 
          fg={"white"} 
          bg={"#DE3151"} 
          width='144px' 
          height='44px'
          onClick={onDelete}
        />
      </div>
    </div>
  );
}

export default TableEntry;