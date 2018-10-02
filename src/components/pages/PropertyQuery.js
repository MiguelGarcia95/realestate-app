import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {getQueryProperties} from '../../actions/propertyActions';

import Property from '../functionality/Property';

class PropertyQuery extends Component {
  componentDidMount() {
    this.props.getQueryProperties();
  }

  render() {
    const {queryProperties} = this.props;
    if (queryProperties.length === 0) {
      return (
        <div className="section">
          <div className="container">
            <div className="full-properties">
              <h1 className='margin-top-250 properties-header'>No Matching Properties Found</h1>
              <Link to={process.env.PUBLIC_URL + '/'}className='page-link-btn'>Try Again</Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="section">
          <div className="container">
            <div className="full-properties">
              {queryProperties.map(property => (
                <Property key={property.id} property={property} orientation='horizontal' />
              ))}
            </div>
          </div>
        </div>
      );
    }

  }
}

const mapStateToProps = (state) => ({
  queryProperties: state.property.searchedQueriedProperties
});

export default connect(mapStateToProps, {getQueryProperties})(PropertyQuery);
