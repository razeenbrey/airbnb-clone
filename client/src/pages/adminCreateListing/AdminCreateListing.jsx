// AdminCreateListing.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AdminCreateListing.css';
import Button from '../../components/buttons/Button';
import { createAccommodation, updateAccommodation, getAccommodation } from '../../api/api';

function AdminCreateListing() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    listingName: '',
    location: '',
    type: '',
    description: '',
    numRooms: '',
    numBathrooms: '',
    numGuests: '',
    price: '',
    weeklyDiscount: '',
    cleaningFee: '',
    serviceFee: '',
    occupancyTaxes: '',
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
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEdit) {
      const loadListing = async () => {
        try {
          const data = await getAccommodation(id);
          const listing = data.data;
          setFormData({
            listingName: listing.name,
            location: listing.location,
            type: listing.type,
            description: listing.description,
            numRooms: listing.numRooms,
            numBathrooms: listing.numBathrooms,
            numGuests: listing.maxGuests,
            price: listing.pricePerNight,
            weeklyDiscount: listing.weeklyDiscount || 0,
            cleaningFee: listing.cleaningFee || 0,
            serviceFee: listing.serviceFee || 0,
            occupancyTaxes: listing.occupancyTaxes || 0,
            images: [],
            amenities: listing.amenities || formData.amenities
          });
        } catch (err) {
          setError(err.message);
        }
      };
      loadListing();
    }
  }, [id, isEdit]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.listingName || !formData.location || !formData.type) {
      setError('Please fill in required fields');
      return;
    }

    try {
      if (isEdit) {
        await updateAccommodation(id, {
          name: formData.listingName,
          location: formData.location,
          type: formData.type,
          description: formData.description,
          numRooms: Number(formData.numRooms),
          numBathrooms: Number(formData.numBathrooms),
          maxGuests: Number(formData.numGuests),
          pricePerNight: Number(formData.price),
          weeklyDiscount: Number(formData.weeklyDiscount) || 0,
          cleaningFee: Number(formData.cleaningFee) || 0,
          serviceFee: Number(formData.serviceFee) || 0,
          occupancyTaxes: Number(formData.occupancyTaxes) || 0,
          amenities: formData.amenities
        });
        navigate('/admin/viewlistings');
        return;
      }

      const submitData = new FormData();
      submitData.append('name', formData.listingName);
      submitData.append('location', formData.location);
      submitData.append('type', formData.type);
      submitData.append('description', formData.description);
      submitData.append('numRooms', formData.numRooms);
      submitData.append('numBathrooms', formData.numBathrooms);
      submitData.append('maxGuests', formData.numGuests);
      submitData.append('pricePerNight', formData.price);
      submitData.append('weeklyDiscount', formData.weeklyDiscount || 0);
      submitData.append('cleaningFee', formData.cleaningFee || 0);
      submitData.append('serviceFee', formData.serviceFee || 0);
      submitData.append('occupancyTaxes', formData.occupancyTaxes || 0);
      submitData.append('amenities', JSON.stringify(formData.amenities));

      const imageFields = ['main', 'quad1', 'quad2', 'quad3', 'quad4'];
      formData.images.forEach((file, index) => {
        if (imageFields[index]) {
          submitData.append(imageFields[index], file);
        }
      });

      await createAccommodation(submitData);
      navigate('/admin/viewlistings');
    } catch (err) {
      setError(err.message);
      // console.log('Creating listing:', formData);
    }
  };

  const handleCancel = () => {
    navigate('/admin/viewlistings');
  };

  return (
    <div id='create-listing-page'>
      <div id='create-listing-group'>
        <div id='create-listing'>
          <div id='create-listing-title'>{isEdit ? 'Update Listing' : 'Create New Listing'}</div>

          {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

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

              <div className='number-row'>
                <div className='field number-field'>
                  <div className='field-name'>Weekly Discount (R)</div>
                  <input className='input-field'
                    name="weeklyDiscount"
                    type="number"
                    value={formData.weeklyDiscount}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="0"
                  />
                </div>

                <div className='field number-field'>
                  <div className='field-name'>Cleaning Fee (R)</div>
                  <input className='input-field'
                    name="cleaningFee"
                    type="number"
                    value={formData.cleaningFee}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="0"
                  />
                </div>

                <div className='field number-field'>
                  <div className='field-name'>Service Fee (R)</div>
                  <input className='input-field'
                    name="serviceFee"
                    type="number"
                    value={formData.serviceFee}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="0"
                  />
                </div>

                <div className='field number-field'>
                  <div className='field-name'>Occupancy Taxes (R)</div>
                  <input className='input-field'
                    name="occupancyTaxes"
                    type="number"
                    value={formData.occupancyTaxes}
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

              
              {!isEdit && (
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
              )}
            </div>

            
            <div id='create-listing-lower'>
              <div id='create-listing-buttons'>
                <Button type="submit" text={isEdit ? "Update Listing" : "Create Listing"} fg='white' bg='#4153F5' width='277px' height='55px' />
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
