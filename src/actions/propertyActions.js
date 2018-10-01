import {GET_PROPERTIES, GET_PROPERTY, GET_QUERY_PROPERTY, POST_QUERY, GET_QUERY_PROPERTIES} from './types';

export const getProperties = () => {
  return {
    type: GET_PROPERTIES
  }
}

export const getProperty = id => {
  return {
    type: GET_PROPERTY,
    payload: id
  }
}

export const getQueryProperties = () => {
  return {
    type: GET_QUERY_PROPERTIES
  }
}

export const postQueryToState = query => {
  return {
    type: POST_QUERY,
    payload: query
  }
}
