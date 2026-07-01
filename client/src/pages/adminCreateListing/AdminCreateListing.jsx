// AdminCreateListing.jsx
import { useState } from 'react';
import './AdminCreateListing.css';
import Button from '../../components/buttons/Button';

function AdminCreateListing() {
  const [formData, setFormData] = useState({
    listingName: '',
    location: '',
    type: '',
    description: '',
    numRooms: '',
    numBathrooms: '',
    numGuests: '',
    price: '',
    images: [],
    amenities: {
      entireHome: false,
      selfCheckIn: false,
      enhancedClean: false,
      garden: false,
      wifi: false,
      washer: false,
      aircon: false,
      pets: false,
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAmenityChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      amenities: {
        ...formData.amenities,
        [name]: checked
      }
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: [...formData.images, ...files]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating listing:', formData);
    // todoo listing logic here
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <div id='create-listing-page'>
      <div id='create-listing-group'>
        <div id='create-listing'>
          <div id='create-listing-title'>Create New Listing</div>

          <form onSubmit={handleSubmit}>
            <div id='fields'>
              
              <div className='field'>
                <div className='field-name'>Listing Name</div>
                <input className='input-field'
                  name="listingName"
                  type="text"
                  value={formData.listingName}
                  onChange={handleInputChange}
                  placeholder="Enter listing name"
                />
              </div>

              
              <div className='field'>
                <div className='field-name'>Location</div>
                <input className='input-field'
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter location"
                />
              </div>

              
              <div className='field'>
                <div className='field-name'>Type</div>
                <select className='input-field'
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                >
                  <option value="">Select type</option>
                  <option value="Entire home">Entire home</option>
                  <option value="Private room">Private room</option>
                  <option value="Shared room">Shared room</option>
                  <option value="Flat">Flat</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Cottage">Cottage</option>
                </select>
              </div>

              
              <div className='field'>
                <div className='field-name'>Description</div>
                <textarea className='input-field textarea-field'
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your property..."
                  rows="4"
                />
              </div>

              
              <div className='number-row'>
                <div className='field number-field'>
                  <div className='field-name'>Bedrooms</div>
                  <input className='input-field'
                    name="numRooms"
                    type="number"
                    value={formData.numRooms}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="0"
                  />
                </div>

                <div className='field number-field'>
                  <div className='field-name'>Bathrooms</div>
                  <input className='input-field'
                    name="numBathrooms"
                    type="number"
                    value={formData.numBathrooms}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="0"
                  />
                </div>

                <div className='field number-field'>
                  <div className='field-name'>Max Guests</div>
                  <input className='input-field'
                    name="numGuests"
                    type="number"
                    value={formData.numGuests}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="0"
                  />
                </div>

                <div className='field number-field'>
                  <div className='field-name'>Price/Night (R)</div>
                  <input className='input-field'
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="0"
                  />
                </div>
              </div>

              
              <div className='field'>
                <div className='field-name'>Amenities</div>
                <div className='amenities-grid'>
                  <label className='amenity-checkbox'>
                    <input
                      type="checkbox"
                      name="entireHome"
                      checked={formData.amenities.entireHome}
                      onChange={handleAmenityChange}
                    />
                    <span>Entire Home</span>
                  </label>

                  <label className='amenity-checkbox'>
                    <input
                      type="checkbox"
                      name="selfCheckIn"
                      checked={formData.amenities.selfCheckIn}
                      onChange={handleAmenityChange}
                    />
                    <span>Self Check-in</span>
                  </label>

                  <label className='amenity-checkbox'>
                    <input
                      type="checkbox"
                      name="enhancedClean"
                      checked={formData.amenities.enhancedClean}
                      onChange={handleAmenityChange}
                    />
                    <span>Enhanced Clean</span>
                  </label>

                  <label className='amenity-checkbox'>
                    <input
                      type="checkbox"
                      name="garden"
                      checked={formData.amenities.garden}
                      onChange={handleAmenityChange}
                    />
                    <span>Garden</span>
                  </label>

                  <label className='amenity-checkbox'>
                    <input
                      type="checkbox"
                      name="wifi"
                      checked={formData.amenities.wifi}
                      onChange={handleAmenityChange}
                    />
                    <span>WiFi</span>
                  </label>

                  <label className='amenity-checkbox'>
                    <input
                      type="checkbox"
                      name="washer"
                      checked={formData.amenities.washer}
                      onChange={handleAmenityChange}
                    />
                    <span>Washer</span>
                  </label>

                  <label className='amenity-checkbox'>
                    <input
                      type="checkbox"
                      name="aircon"
                      checked={formData.amenities.aircon}
                      onChange={handleAmenityChange}
                    />
                    <span>Air Conditioning</span>
                  </label>

                  <label className='amenity-checkbox'>
                    <input
                      type="checkbox"
                      name="pets"
                      checked={formData.amenities.pets}
                      onChange={handleAmenityChange}
                    />
                    <span>Pets Allowed</span>
                  </label>
                </div>
              </div>

              
              <div className='field'>
                <div className='field-name'>Images</div>
                <div className='upload-area'>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className='upload-input'
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className='upload-label'>
                    {/* <div className='upload-icon'>📁</div> */}
                    <div className='upload-text'>Click to upload images</div>
                    <div className='upload-subtext'>PNG, JPG, GIF up to 10MB</div>
                  </label>
                </div>
                {formData.images.length > 0 && (
                  <div className='image-preview'>
                    <div className='field-name'>{formData.images.length} file(s) selected</div>
                    <div className='image-list'>
                      {formData.images.map((image, index) => (
                        <div key={index} className='image-name'>{image.name}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            
            <div id='create-listing-lower'>
              <div id='create-listing-buttons'>
                <Button text="Create Listing" fg='white' bg='#4153F5' width='277px' height='55px' />
                <div onClick={handleCancel}>
                  <Button text="Cancel" fg='white' bg='#CC2D4A' width='277px' height='55px' />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminCreateListing;