import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {postQueryToState} from '../../actions/propertyActions';

class SearchMode extends Component {
  state = {
    location: 'any',
    type: 'any',
    rooms: 0,
    baths: 0,
    garages: 0,
    min_budget: '',
    max_budget: ''
  }
  onSubmit = (e) => {
    e.preventDefault();
    // validate incoming data
    const {min_budget, max_budget} = this.state;
    if (min_budget === '' || max_budget === '') return;

    // send to redux
    this.props.postQueryToState(this.state);
    //redirect to search results
    this.props.history.push('/search');
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className='search-form'>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <select onChange={this.onInputChange} name="location">
              <option value="">Pick Location</option>
              <option value="any">Any</option>
              <option value="Houston">Houston, Tx</option>
              <option value="Dallas">Dallas, Tx</option>
              <option value="Austin">Austin, Tx</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="type">Property Type</label>
            <select onChange={this.onInputChange} name="type">
              <option value="">Property Type</option>
              <option value="any">Any</option>
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="rooms">No. of Bedrooms</label>
            <select onChange={this.onInputChange} name="rooms">
              <option value={0}>___</option>
              <option value={1}>1+</option>
              <option value={2}>2+</option>
              <option value={3}>3+</option>
              <option value={4}>4+</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="baths">No. of Bathrooms</label>
            <select onChange={this.onInputChange} name="baths">
              <option value={0}>___</option>
              <option value={1}>1+</option>
              <option value={2}>2+</option>
              <option value={3}>3+</option>
              <option value={4}>4+</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="garages">No. of Garages</label>
            <select onChange={this.onInputChange} name="garages">
              <option value={0}>___</option>
              <option value={1}>1+</option>
              <option value={2}>2+</option>
              <option value={3}>3+</option>
            </select>
          </div>
          <div className="form-group form-group-together">
            <label htmlFor="min_budget">Price Range</label>
            <input type="number" min="0" max="1000000" name="min_budget" onChange={this.onInputChange} placeholder="Minimum" required/>
            <input type="number" min="0" max="1000000" name="max_budget" onChange={this.onInputChange} placeholder="Maximum" required/>
          </div>
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  }

}

export default connect(null, {postQueryToState})(SearchMode);
