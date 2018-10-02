import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getProperties} from '../../actions/propertyActions';

import Property from '../functionality/Property';

class Properties extends Component {
  componentDidMount() {
    this.props.getProperties();
    window.scrollTo(0,0);
  }

  render() {
    const {properties} = this.props;

    return (
      <div className="section">
        <div className="container">
          <div className="full-properties">
            <h3 className="properties-header">All Properties</h3>

            {properties.map(property => (
              <Property key={property.id} property={property} orientation='horizontal' />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  properties: state.property.properties
});

export default connect(mapStateToProps, {getProperties})(Properties);
