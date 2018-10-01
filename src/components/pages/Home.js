import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';
import {getProperties} from '../../actions/propertyActions';
import Header from '../layout/Header';
import Property from '../functionality/Property';

class Home extends Component {
  componentDidMount() {
    this.props.getProperties()
  }

  render() {
    const {properties, history} = this.props;
    return (
      <div>
        <Header history={history} />
        <div className="section">
          <div className="container">
            <div className="properties">
              <h3 className="properties-header">Local Spots</h3>
              {properties.slice(0, 6).map(property => (
                <Property key={property.id} property={property} orientation='vertical' />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  properties: state.property.properties
})

export default withRouter(connect(mapStateToProps, {getProperties})(Home));
