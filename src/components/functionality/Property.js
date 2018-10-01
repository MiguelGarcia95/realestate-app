import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Property extends Component {
  render() {
    const {property, orientation} = this.props;
    if (orientation === 'vertical') {
      return (
        <div className='property'>
          <div className="image-container left">
            <Link to={`/property/${property.id}`}><img src={property.image} alt={property.address}/></Link>
          </div>
          <div className="info-container left">
            <div className="features">
              <div className="feature-name left"><i className="fas fa-xs fa-expand"></i><span>Area:</span> {property.floorSpace}</div>
              <div className="feature-name left"><i className="fas fa-xs fa-bed"></i><span>Bedrooms:</span> {property.numberOfBedrooms}</div>
              <div className="feature-name left"><i className="fas fa-xs fa-shower"></i><span>Bathrooms:</span> {property.numberOfBathrooms}</div>
            </div>
            <h3 className="address "><Link to={`/property/${property.id}`}>{property.address}</Link></h3>
            <h3 className="location"><i className="fas fa-map-marker-alt"></i> {`${property.city}, ${property.state}`}</h3>
            <p className="description">{`${property.description.substring(0, 70)}...`}</p>
            <h3 className="price"><i className="fas fa-tags"></i> ${property.price.toLocaleString()}</h3>
          </div>
        </div>
      );
    } else if (orientation === 'horizontal') {
      return (
        <div className='property left'>
          <div className="image-container left">
            <img src={property.image} alt={property.address}/>
          </div>
          <div className="info-container left">
            <h3 className="address "><Link to={`/property/${property.id}`}>{property.address}</Link></h3>
            <div className="features">
              <div className="feature-name left"><i className="fas fa-lg fa-expand"></i><span>Area: </span> {property.floorSpace}</div>
              <div className="feature-name left"><i className="fas fa-lg fa-bed"></i><span>Bedrooms: </span> {property.numberOfBedrooms}</div>
              <div className="feature-name left"><i className="fas fa-lg fa-shower"></i><span>Bathrooms: </span> {property.numberOfBathrooms}</div>
              <div className="feature-name left"><i className="fas fa-lg fa-warehouse"></i><span>Garages: </span> {property.numberOfGarages}</div>
              <div className="feature-name left"><i className="fas fa-lg fa-home"></i><span>Type: </span> {property.type}</div>
              <div className="feature-name left"><i className="fas fa-lg fa-paw"></i><span>Pets: </span> {property.pets ? 'Allowed' : 'Not Allowed'}</div>
            </div>
            <h3 className="location"><i className="fas fa-lg fa-map-marker-alt"></i> {`${property.city}, ${property.state}`}</h3>
            {/* <p className="description">{property.description}</p> */}
            <h3 className="price"><i className="fas fa-lg fa-tags"></i> ${property.price.toLocaleString()}</h3>
            <Link className='link-btn' to={`/property/${property.id}`}>More Info</Link>
          </div>
        </div>
      );
    }
  }

}

export default Property;
