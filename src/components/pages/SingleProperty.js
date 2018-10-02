import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getProperty} from '../../actions/propertyActions';

class SingleProperty extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getProperty(id);
  }

  render() {
    const {property} = this.props;
    if (property) {
      return(
        <div className="section">
          <div className="container">
            <div className="full-property">
              <div className="top">
                <div className="image-container">
                  <img src={process.env.PUBLIC_URL + `/${property.image}`} alt=""/>
                </div>
                <div className="info-container">
                  <h3 className="address">{property.address}</h3>
                  <h3 className="price"><i className="fas fa-tags"></i> ${Number(property.price).toLocaleString()}</h3>
                  <div className="feature-name left">
                    <i className="fas fa-lg fa-expand"></i>
                    <span>Area:</span>
                    <span className="feature-value">{property.floorSpace}</span>
                  </div>
                  <div className="feature-name left">
                    <i className="fas fa-lg fa-bed"></i>
                    <span>Bedrooms: </span>
                    <span className="feature-value">{property.numberOfBedrooms}</span>
                  </div>
                  <div className="feature-name left">
                    <i className="fas fa-lg fa-shower"></i>
                    <span>Bathrooms: </span>
                    <span className="feature-value">{property.numberOfBathrooms}</span>
                  </div>
                  <div className="feature-name left">
                    <i className="fas fa-lg fa-warehouse"></i>
                    <span>Garages: </span>
                    <span className="feature-value">{property.numberOfGarages}</span>
                  </div>
                  <div className="feature-name left">
                    <i className="fas fa-lg fa-home"></i>
                    <span>Type: </span>
                    <span className="feature-value">{property.type}</span>
                  </div>
                  <div className="feature-name left">
                    <i className="fas fa-lg fa-paw"></i>
                    <span>Pets: </span>
                    <span className="feature-value">{property.pets ? 'Allowed' : 'Not Allowed'}</span>
                  </div>
                  <h3 className="location"><i className="fas fa-lg fa-map-marker-alt"></i> <span>Location:</span> <br/> <p> {`${property.city}, ${property.state}`}</p></h3>
                  <div className="learn-more">
                    <h3 className="contact">Contact Us</h3>
                    <div className="form-group">
                      <input type="email" placeholder='Email'/>
                      <input type="text" placeholder='Phone'/>
                      <textarea cols="30" rows="10" placeholder='Questions?'></textarea>
                    </div>
                    <button>Send</button>
                  </div>
                </div>
              </div>
              <h3 className="address">{property.address}</h3>
              <div className="description">
                <h3>Description</h3>
                <hr/>
                <p>{property.description}</p>
              </div>
              <div className="extras">
                <h3>Additional Details</h3>
                <hr/>
                <div className="extra-box">
                  <div className="extra">
                    <div className="extra-name">
                      <p>City</p>
                    </div>
                    <div className="extra-value">
                      <p>{property.city}</p>
                    </div>
                  </div>
                  <div className="extra">
                    <div className="extra-name">
                      <p>State</p>
                    </div>
                    <div className="extra-value">
                      <p>{property.state}</p>
                    </div>
                  </div>
                  <div className="extra">
                    <div className="extra-name">
                      <p>Bathrooms</p>
                    </div>
                    <div className="extra-value">
                      <p>{property.numberOfBathrooms}</p>
                    </div>
                  </div>
                  <div className="extra">
                    <div className="extra-name">
                      <p>Bedrooms</p>
                    </div>
                    <div className="extra-value">
                      <p>{property.numberOfBedrooms}</p>
                    </div>
                  </div>
                  <div className="extra">
                    <div className="extra-name">
                      <p>Garages</p>
                    </div>
                    <div className="extra-value">
                      <p>{property.numberOfGarages}</p>
                    </div>
                  </div>
                  <div className="extra">
                    <div className="extra-name">
                      <p>Pets</p>
                    </div>
                    <div className="extra-value">
                      <p>{property.pets ? 'Allowed' : 'Not Allowed'}</p>
                    </div>
                  </div>
                  <div className="extra">
                    <div className="extra-name">
                      <p>Size</p>
                    </div>
                    <div className="extra-value">
                      <p>{property.size}</p>
                    </div>
                  </div>
                  <div className="extra">
                    <div className="extra-name">
                      <p>Cooling</p>
                    </div>
                    <div className="extra-value">
                      <p>{property.cooling}</p>
                    </div>
                  </div>
                  <div className="extra">
                    <div className="extra-name">
                      <p>Heating</p>
                    </div>
                    <div className="extra-value">
                      <p>{property.heating}</p>
                    </div>
                  </div>
                  <div className="extra">
                    <div className="extra-name">
                      <p>Build Year</p>
                    </div>
                    <div className="extra-value">
                      <p>{property.year}</p>
                    </div>
                  </div>
                  <div className="extra">
                    <div className="extra-name">
                      <p>Parking</p>
                    </div>
                    <div className="extra-value">
                      <p>{property.parking}</p>
                    </div>
                  </div>
                  <div className="extra">
                    <div className="extra-name">
                      <p>Lot</p>
                    </div>
                    <div className="extra-value">
                      <p>{property.lot}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div className="section">
          <div className="container">
            <div className="full-property">
              Loading...
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  property: state.property.property
});

export default connect(mapStateToProps, {getProperty})(SingleProperty);
