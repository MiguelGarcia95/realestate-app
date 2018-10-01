import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getProperties} from '../../actions/propertyActions';

import Property from '../functionality/Property';

class Properties extends Component {
  componentDidMount() {
    this.props.getProperties()
  }

  render() {
    const {properties} = this.props;

    return (
      <div className="section">
        <div className="container">
          <div className="full-properties">
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
