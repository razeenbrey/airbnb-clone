// TableHeader.jsx
import './TableEntry.css';

function TableHeader() {
  return (
    <div className="table-entry table-header">
      <div className="col col-1 header-col">Booked by</div>
      <div className="col col-2 header-col">Property</div>
      <div className="col col-3 header-col">Check-in</div>
      <div className="col col-4 header-col">Check-out</div>
      <div className="col col-5 header-col">Actions</div>
    </div>
  );
}

export default TableHeader;