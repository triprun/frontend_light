import React from 'react';

export const RestaurantIcon = () => (<i style={{ color: '#FF4040' }} className="fas fa-utensils"></i>)
export const SightseeingIcon = () => (<i style={{ color: '#32CD32' }} className="fas fa-monument"></i>)
export const HotelIcon = () => (<i style={{ color: '#1AA3FF' }} className="fas fa-bed"></i>)
export const PhotoplaceIcon = () => (<i style={{ color: '#6E7074' }} className="fas fa-camera-retro"></i>)
export const FavouriteIcon = () => (<i style={{ color: '#FFBF00' }} className="fas fa-star"></i>)
export const NewplaceIcon = () => (<i style={{ color: '#7EBCA1' }} className="fas fa-plus-circle"></i>)

export const fetchFromType = (type) => {
  switch(type) {
    case 'Restaurant':
      return <RestaurantIcon />
    case 'Sightseeing':
      return <SightseeingIcon />
    case 'Hotel':
      return <HotelIcon />
    case 'Photoplace':
      return <PhotoplaceIcon />
    case 'Favourite':
      return <FavouriteIcon />
    default:
      break;
  }
}
