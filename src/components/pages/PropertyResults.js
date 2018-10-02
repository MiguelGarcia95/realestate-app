import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getQueryProperties} from '../../actions/propertyActions';

class PropertyResults extends Component {
  componentDidMount() {
    const {type} = this.props.match.params;
    this.props.getQueryProperties(type);
    window.scrollTo(0,0);
  }

  render() {
    const {properties} = this.props;

    return (
      <div className="section">
        <div className="container">
          <div className="full-properties">

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchedProperties: state.property.searchedProperties
});

export default connect(mapStateToProps, {getQueryProperties})(PropertyResults);
