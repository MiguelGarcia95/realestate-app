import {GET_PROPERTIES, GET_PROPERTY, GET_QUERY_PROPERTY, GET_QUERY_PROPERTIES, POST_QUERY} from '../actions/types';

const initialState = {
  properties: [
    {
      id: 1,
      price: 1000000,
      image: 'images/home_01.jpg',
      address: '1234 Street, Houston, Tx 77097',
      city: 'Houston',
      state: 'Texas',
      floorSpace: '2000 sqft',
      numberOfBathrooms: 2,
      numberOfBedrooms: 4,
      numberOfGarages: 2,
      pets: true,
      description: 'The handsome two-story Aransas plan by Lennar features an open family room, kitchen with pantry and adjoining dining room, a utility room located just off the kitchen with garage access, and a powder bathroom on the first floor. The second floor features three secondary bedrooms, a full bathroom with dual sinks, and the master bedroom with dual walk-in closets, and an en suite bathroom with dual sinks, a private toilet enclosure, and separate shower and tub. The Aransas plan also includes the option to add a rear patio.',
      type: 'buy',
      size: 'single family',
      cooling: '',
      heating: '',
      year: '2009',
      parking: '',
      lot: ''
    },
    {
      id: 2,
      price: 1000000,
      image: 'images/home_01.jpg',
      address: '1234 Street, Houston, Tx 77097',
      city: 'Houston',
      state: 'Texas',
      floorSpace: '2000 sqft',
      numberOfBathrooms: 2,
      numberOfBedrooms: 4,
      numberOfGarages: 2,
      pets: true,
      description: 'The handsome two-story Aransas plan by Lennar features an open family room, kitchen with pantry and adjoining dining room, a utility room located just off the kitchen with garage access, and a powder bathroom on the first floor. The second floor features three secondary bedrooms, a full bathroom with dual sinks, and the master bedroom with dual walk-in closets, and an en suite bathroom with dual sinks, a private toilet enclosure, and separate shower and tub. The Aransas plan also includes the option to add a rear patio.',
      type: 'buy',
      size: 'single family',
      cooling: '',
      heating: '',
      year: '2009',
      parking: '',
      lot: ''
    },
    {
      id: 3,
      price: 100000,
      image: 'images/home_01.jpg',
      address: '1234 Street, Houston, Tx 77097',
      city: 'Austin',
      state: 'Texas',
      floorSpace: '2000 sqft',
      numberOfBathrooms: 2,
      numberOfBedrooms: 4,
      numberOfGarages: 2,
      pets: true,
      description: 'The handsome two-story Aransas plan by Lennar features an open family room, kitchen with pantry and adjoining dining room, a utility room located just off the kitchen with garage access, and a powder bathroom on the first floor. The second floor features three secondary bedrooms, a full bathroom with dual sinks, and the master bedroom with dual walk-in closets, and an en suite bathroom with dual sinks, a private toilet enclosure, and separate shower and tub. The Aransas plan also includes the option to add a rear patio.',
      type: 'buy',
      size: 'single family',
      cooling: '',
      heating: '',
      year: '2009',
      parking: '',
      lot: ''
    },
    {
      id: 4,
      price: 1000000,
      image: 'images/home_01.jpg',
      address: '1234 Street, Houston, Tx 77097',
      city: 'Houston',
      state: 'Texas',
      floorSpace: '2000 sqft',
      numberOfBathrooms: 2,
      numberOfBedrooms: 4,
      numberOfGarages: 2,
      pets: true,
      description: 'The handsome two-story Aransas plan by Lennar features an open family room, kitchen with pantry and adjoining dining room, a utility room located just off the kitchen with garage access, and a powder bathroom on the first floor. The second floor features three secondary bedrooms, a full bathroom with dual sinks, and the master bedroom with dual walk-in closets, and an en suite bathroom with dual sinks, a private toilet enclosure, and separate shower and tub. The Aransas plan also includes the option to add a rear patio.',
      type: 'buy',
      size: 'single family',
      cooling: '',
      heating: '',
      year: '2009',
      parking: '',
      lot: ''
    },
    {
      id: 5,
      price: 1000000,
      image: 'images/home_01.jpg',
      address: '1234 Street, Houston, Tx 77097',
      city: 'Houston',
      state: 'Texas',
      floorSpace: '2000 sqft',
      numberOfBathrooms: 2,
      numberOfBedrooms: 4,
      numberOfGarages: 2,
      pets: true,
      description: 'The handsome two-story Aransas plan by Lennar features an open family room, kitchen with pantry and adjoining dining room, a utility room located just off the kitchen with garage access, and a powder bathroom on the first floor. The second floor features three secondary bedrooms, a full bathroom with dual sinks, and the master bedroom with dual walk-in closets, and an en suite bathroom with dual sinks, a private toilet enclosure, and separate shower and tub. The Aransas plan also includes the option to add a rear patio.',
      type: 'buy',
      size: 'single family',
      cooling: '',
      heating: '',
      year: '2009',
      parking: '',
      lot: ''
    },
    {
      id: 6,
      price: 1000000,
      image: 'images/home_01.jpg',
      address: '1234 Street, Houston, Tx 77097',
      city: 'Houston',
      state: 'Texas',
      floorSpace: '2000 sqft',
      numberOfBathrooms: 2,
      numberOfBedrooms: 4,
      numberOfGarages: 2,
      pets: true,
      description: 'The handsome two-story Aransas plan by Lennar features an open family room, kitchen with pantry and adjoining dining room, a utility room located just off the kitchen with garage access, and a powder bathroom on the first floor. The second floor features three secondary bedrooms, a full bathroom with dual sinks, and the master bedroom with dual walk-in closets, and an en suite bathroom with dual sinks, a private toilet enclosure, and separate shower and tub. The Aransas plan also includes the option to add a rear patio.',
      type: 'buy',
      size: 'single family',
      cooling: '',
      heating: '',
      year: '2009',
      parking: '',
      lot: ''
    },
    {
      id: 7,
      price: 1000000,
      image: 'images/home_01.jpg',
      address: '1234 Street, Houston, Tx 77097',
      city: 'Houston',
      state: 'Texas',
      floorSpace: '2000 sqft',
      numberOfBathrooms: 2,
      numberOfBedrooms: 4,
      numberOfGarages: 2,
      pets: true,
      description: 'The handsome two-story Aransas plan by Lennar features an open family room, kitchen with pantry and adjoining dining room, a utility room located just off the kitchen with garage access, and a powder bathroom on the first floor. The second floor features three secondary bedrooms, a full bathroom with dual sinks, and the master bedroom with dual walk-in closets, and an en suite bathroom with dual sinks, a private toilet enclosure, and separate shower and tub. The Aransas plan also includes the option to add a rear patio.',
      type: 'rent',
      size: 'single family',
      cooling: '',
      heating: '',
      year: '2009',
      parking: '',
      lot: ''
    }
  ],
  property: {},
  formData: {},
  searchedProperties: [],
  searchedQueriedProperties: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROPERTIES:
      return {
        ...state
      };
    case GET_PROPERTY:
      return {
        ...state,
        property: state.properties.find(property => property.id == action.payload)
      };
    case GET_QUERY_PROPERTY:
      return {
        ...state,
        searchedProperties: state.properties.filter(property => property.type === action.payload)
      }
    case POST_QUERY:
      return {
        ...state,
        formData: action.payload
      };
    case GET_QUERY_PROPERTIES:
      const properties = state.properties;
      const {location, type, rooms, baths, garages, min_budget, max_budget} = state.formData;

      const queriedProperties = properties.filter((property) => {
        if (type === 'any' && location === 'any') {
          return property.numberOfBedrooms >= rooms && property.numberOfBathrooms >= baths && property.numberOfGarages >= garages && (property.price >= Number(min_budget) && property.price <= Number(max_budget))
        }
        if (type === 'any') {
          return property.city == location && property.numberOfBedrooms >= rooms && property.numberOfBathrooms >= baths && property.numberOfGarages >= garages && (property.price >= Number(min_budget) && property.price <= Number(max_budget))
        }
        if (location === 'any') {
          return property.type == type && property.numberOfBedrooms >= rooms && property.numberOfBathrooms >= baths && property.numberOfGarages >= garages && (property.price >= Number(min_budget) && property.price <= Number(max_budget))
        }
         return property.city == location && property.type == type && property.numberOfBedrooms >= rooms && property.numberOfBathrooms >= baths && property.numberOfGarages >= garages && (property.price >= Number(min_budget) && property.price <= Number(max_budget))
      });
      return {
        ...state,
        searchedQueriedProperties: queriedProperties
      };
    default:
      return state;
  }
}
