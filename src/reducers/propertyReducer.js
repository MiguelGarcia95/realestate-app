import {GET_PROPERTIES, GET_PROPERTY, GET_QUERY_PROPERTY, GET_QUERY_PROPERTIES, POST_QUERY} from '../actions/types';

const initialState = {
  properties: [
    {
      id: 1,
      price: 189000,
      image: 'images/home_01.jpg',
      address: '0001 Street, Houston, Tx 77097',
      city: 'Houston',
      state: 'Texas',
      floorSpace: '2280 sqft',
      numberOfBathrooms: 2,
      numberOfBedrooms: 3,
      numberOfGarages: 1,
      pets: true,
      description: "Been looking for a 3 bed home (all upstairs) in Beacon Hill Park? You have just found it. The floor plan features a formal front entry, generous living room with gas fireplace, 3 beds and 2 bathrooms on the main. Situated across from desirable Alice Lake, this home has been designed to take advantage of its beach frontage with decks running the entire length of the house and out over the boathouse. Walking distance to everything. fully developed attic area, Large eat-in Island, 9' ceilings and double car garage round out this beautiful home. Call Now!",
      type: 'buy',
      size: 'single family',
      cooling: 'No Data',
      heating: 'No Data',
      year: '2012',
      parking: 'Yes',
      lot: 'N/A'
    },
    {
      id: 2,
      price: 358000,
      image: 'images/home_02.jpeg',
      address: '0002 Street, Houston, Tx 77097',
      city: 'Houston',
      state: 'Texas',
      floorSpace: '2813 sqft',
      numberOfBathrooms: 2,
      numberOfBedrooms: 4,
      numberOfGarages: 2,
      pets: true,
      description: "Bright & Spacious, Top Floor/Corner Suite next to Mouat Park is sure to please. Totally secluded and private, this wonderful view property is located in the heart of North Park. Over 2,100 sq ft of living space which includes 4 beds and 2 bathrooms. Quality finishing, superior sound insulation & 2 spacious decks. The lowest level is an expansive media and activity rm, complete with wine cellar and doors opening onto the pool deck and vistas. Buses, church, shopping, all amenities close by. The gentle slopped driveway leads up to your hilltop building site offering secure views without much site preparation. Beautiful Mahogany kitchen with granite counter tops through out, hardwood & tile floors, a charming sunroom perched on the front of the house, large commercial grade low E windows and period fir trim. Depreciation report has been completed. Don't forget the in-suite laundry",
      type: 'buy',
      size: 'single family',
      cooling: 'Central',
      heating: 'Central',
      year: '2010',
      parking: 'Yes',
      lot: '5814 sqft'
    },
    {
      id: 3,
      price: 658000,
      image: 'images/home_03.jpeg',
      address: '0003 Street, Houston, Tx 77097',
      city: 'Houston',
      state: 'Texas',
      floorSpace: '3050 sqft',
      numberOfBathrooms: 3,
      numberOfBedrooms: 5,
      numberOfGarages: 2,
      pets: true,
      description: "",
      type: 'buy',
      size: 'single family',
      cooling: 'Central',
      heating: 'Central',
      year: '2009',
      parking: 'Yes',
      lot: '6510 sqft'
    },
    {
      id: 4,
      price: 247000,
      image: 'images/home_04.jpeg',
      address: '0004 Street, Houston, Tx 77097',
      city: 'Houston',
      state: 'Texas',
      floorSpace: '2050 sqft',
      numberOfBathrooms: 2,
      numberOfBedrooms: 3,
      numberOfGarages: 0,
      pets: true,
      description: "Great Opportunity to get into the real estate market for less than the cost of Rent!! With 2 baths, 3BRs up and a peaceful rec room plumbed for a wet bar down plus a large single car garage this home offers excellent value and utility while also offering a family oriented tight knit community to call home. Bathed in sunlight from lots of windows, skylights & vaulted ceiling, this home delivers the very best of warm,period charm & superior upgrading. It is ideally situated on a very private lot along a whisper quiet street. The landscaped gardens Hand-chiseled Quartz Island, Office/Den and brand new hardwood floors and carpet put this home in a category by itself. This is a historic alternative for those who are tired of condo living and all the strata council rules and regulations and strata fees.",
      type: 'buy',
      size: 'single family',
      cooling: 'Central',
      heating: 'Central',
      year: '1998',
      parking: 'Yes',
      lot: '10578 sqft'
    },
    {
      id: 5,
      price: 354000,
      image: 'images/home_05.jpeg',
      address: '0005 Street, Houston, Tx 77097',
      city: 'Houston',
      state: 'Texas',
      floorSpace: '1980 sqft',
      numberOfBathrooms: 2,
      numberOfBedrooms: 3,
      numberOfGarages: 1,
      pets: true,
      description: "Whether you are a first time buyer, investor, or looking for a pied de terre have a look at this one! Upstairs offers 3 beds, 2 bathrooms, Master suite with 5pc ensuite/walk-in closet and the multi-purpose games room that's plumbed and ready for your ideas. Transformed through a tasteful and seem-less renovation, this custom home stands out as a unique and refreshing offering. Excellent location just a block from Thetis Lake Park and minutes to Sooke. Suite is immaculate offering drive in garage with workshop area, 36\" doorways & granite island. Small dog (under 15 lbs) or cat. Call now!",
      type: 'buy',
      size: 'single family',
      cooling: 'Central',
      heating: 'Central',
      year: '2015',
      parking: 'Yes',
      lot: '4830 sqft'
    },
    {
      id: 6,
      price: 158200,
      image: 'images/home_06.jpeg',
      address: '0006 Street, Houston, Tx 77097',
      city: 'Houston',
      state: 'Texas',
      floorSpace: '4500 sqft',
      numberOfBathrooms: 1,
      numberOfBedrooms: 3,
      numberOfGarages: 1,
      pets: true,
      description: "A truly remarkable property nestled at the end of a cul-de-sac in Annacis Island. Unique 3 bed, 1 bathroom loft style condo offers 16ft vaulted ceilings, New Kitchen, New Flooring, Master B/R on the Main & an oversized balcony w/western exposure. Beautifully suited to entertaining, you will be impressed the moment you enter. It is ideally situated on a very private lot along a whisper quiet street. The downstairs has a great layout with security system sound and vac roughed in, spacious rooms, White Cabinetry/Granite counters, built-in bookcases and great hardwoods, plus even space left over for your piano! And in moments you can walk to downtown, to the seaside.",
      type: 'buy',
      size: 'single family',
      cooling: 'No Data',
      heating: 'No Data',
      year: '2010',
      parking: 'Yes',
      lot: 'No Data'
    },
    {
      id: 7,
      price: 32000,
      image: 'images/home_07.jpeg',
      address: '0007 Street, Houston, Tx 77097',
      city: 'Houston',
      state: 'Texas',
      floorSpace: '1760 sqft',
      numberOfBathrooms: 2,
      numberOfBedrooms: 2,
      numberOfGarages: 1,
      pets: true,
      description: "Looking for the picture perfect house? It keeps coming... fresh paint, Epoxy coated Concrete floors (Radiant in-floor heat), a large eat in country kitchen overlooking the south facing rear yard and deck, 1 bedroom suite with separate laundry and granite island. Open House Saturday 5th 1-3pm, Only 3000 monthly",
      type: 'rent',
      size: 'single family',
      cooling: 'Central',
      heating: 'Central',
      year: '2012',
      parking: 'Yes',
      lot: '5421 sqft'
    },
    {
      id: 8,
      price: 180540,
      image: 'images/home_08.jpeg',
      address: '0008 Street, Austin, Tx 77097',
      city: 'Austin',
      state: 'Texas',
      floorSpace: '1590 sqft',
      numberOfBathrooms: 1,
      numberOfBedrooms: 2,
      numberOfGarages: 1,
      pets: true,
      description: "This fabulous Dollarton Harbour is only one block from the Avenue with all the Trendy Shoppes,Fabulous Restaurants and only seconds to the Beach. field stone fireplace, double car attached garage & Hand-chiseled Quartz Island lend a sophisticated feel to the home. Priced to sell call now!",
      type: 'buy',
      size: 'single family',
      cooling: 'Central',
      heating: 'Central',
      year: '1997',
      parking: 'Yes',
      lot: '6821 sqft'
    },
    {
      id: 9,
      price: 120584,
      image: 'images/home_09.jpeg',
      address: '0009 Street, Austin, Tx 77097',
      city: 'Austin',
      state: 'Texas',
      floorSpace: '1720 sqft',
      numberOfBathrooms: 1,
      numberOfBedrooms: 2,
      numberOfGarages: 0,
      pets: true,
      description: "Great Opportunity to get into the real estate market for less than the cost of Rent!! It's tastefully updated – feature fireplace, commercial grade Wolf & Sub Zero appliances, granite counters, exercise pool & full basement with drive in garage. Thetis heights is a great community to raise a family! Call now to arrange a private viewing.",
      type: 'buy',
      size: 'single family',
      cooling: 'Central',
      heating: 'Central',
      year: '2004',
      parking: 'Yes',
      lot: '3871 sqft'
    },
    {
      id: 10,
      price: 254800,
      image: 'images/home_10.jpeg',
      address: '0010 Street, Austin, Tx 77097',
      city: 'Austin',
      state: 'Texas',
      floorSpace: '1898 sqft',
      numberOfBathrooms: 2,
      numberOfBedrooms: 2,
      numberOfGarages: 1,
      pets: true,
      description: "Look No Further!! The lower level has over 1600 sq ft with suite potential, stainless appliances, two wood burning fireplaces, New vinyl windows and radiant in floor heat. This is by far the most sparkling clean floorplan in the entire development!",
      type: 'buy',
      size: 'single family',
      cooling: 'Central',
      heating: 'Central',
      year: '2010',
      parking: 'Yes',
      lot: '5784 sqft'
    },
    {
      id: 11,
      price: 147000,
      image: 'images/home_11.jpeg',
      address: '0011 Street, Austin, Tx 77097',
      city: 'Austin',
      state: 'Texas',
      floorSpace: '1760 sqft',
      numberOfBathrooms: 2,
      numberOfBedrooms: 3,
      numberOfGarages: 2,
      pets: true,
      description: "Don't be deceived by the address - this large Uptown border cottage with separate studio/guest suite is a sanctuary. Open Concept main floor is showcased by a stunning modern kitchen w/hardwood & tile floors, large family/entertainment room and Vinyl thermo windows. Energuide rating of 81 OH SUN 2-4!",
      type: 'buy',
      size: 'single family',
      cooling: 'Central',
      heating: 'Central',
      year: '2017',
      parking: 'Yes',
      lot: '2890 sqft'
    },
    {
      id: 12,
      price: 179800,
      image: 'images/home_12.jpeg',
      address: '0012 Street, Austin, Tx 77097',
      city: 'Austin',
      state: 'Texas',
      floorSpace: '1450 sqft',
      numberOfBathrooms: 1,
      numberOfBedrooms: 2,
      numberOfGarages: 1,
      pets: true,
      description: "Whether you are a first time buyer, investor, or looking for a pied de terre have a look at this one! Wide hallways, large family/entertainment room, granite island, fresh paint, brand new hardwood floors and carpet & concrete tile roof. Exceptional original construction and impossible to replace at this price.",
      type: 'buy',
      size: 'single family',
      cooling: 'Central',
      heating: 'Central',
      year: '2008',
      parking: 'Yes',
      lot: '3215 sqft'
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
