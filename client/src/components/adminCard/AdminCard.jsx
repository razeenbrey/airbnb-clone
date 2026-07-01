// AdminCard.jsx
import './AdminCard.css';

//Assets
import heart from '../../assets/listingIcons/heart.svg';
import star from '../../assets/listingIcons/star.svg';
import Button from '../buttons/Button';

function AdminCard({ 
  image, 
  name,
  type,        // "Entire home", "Private room", "Shared room", "Flat", etc.
  location,    // "Cape Town", "Sandton", etc.
  hasGarden,
  hasWifi,
  hasWasher,
  pets,
  rating, 
  reviewCount, 
  price,
  bedrooms,
  bathrooms,
  maxGuests 
}) {
  return (
    <div className="search-result">
      {/* Image Section */}
      <div className="res-image-container">
        <img src={image} alt={name} className="result-image" />
        <Button text="Update" width='300px' height='44px' bg={"#4153F5"} fg={"white"}/>
        <Button text="Delete" width='300px' height='44px' bg={"#DE3151"} fg={"white"}/>
      </div>

      {/* Content Section */}
      <div className="result-content">
        {/* Location & Type Row */}
        <div className="result-location">
          {type} in {location}
        </div>

        {/* Top row: Name on left, Favorite button on right */}
        <div className="result-header">
          <h3 className="result-name">{name}</h3>
          <button className="favorite-btn"><img src={heart} alt="Favorite" /></button>
        </div>

        {/* Details row */}
        <div className="result-details">
          <span>{maxGuests} guests</span>
          <span>•</span>
          <span>{bedrooms} bedrooms</span>
          <span>•</span>
          <span>{bathrooms} bathrooms</span>
          {hasGarden && (
            <>
              <span>•</span>
              <span>Garden</span>
            </>
          )}
          {hasWifi && (
            <>
              <span>•</span>
              <span>WiFi</span>
            </>
          )}
          {hasWasher && (
            <>
              <span>•</span>
              <span>Washer</span>
            </>
          )}
          {pets && (
            <>
              <span>•</span>
              <span>Pet friendly</span>
            </>
          )}
        </div>

        {/* Bottom row: Reviews on left, Price on right */}
        <div className="result-footer">
          <div className="result-rating">
            <span className="star"><img src={star} alt="Star" /></span>
            <span>{rating}</span>
            <span className="review-count">({reviewCount}) Reviews</span>
          </div>
          <div className="result-price">
            <span className="price-amount">R{price}</span>
            <span className="price-period">/ night</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCard;