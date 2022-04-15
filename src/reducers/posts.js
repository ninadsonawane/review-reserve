
import { FETCH_ALL , CREATE , UPDATE , LIKE , DELETE } from "../constants";
// eslint-disable-next-line
export default (reviews = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...reviews,action.payload];
    case UPDATE:
    case LIKE:
        return reviews.map((rv) => rv._id === action.payload._id ? action.payload : rv);
    case DELETE:
      return reviews.filter((rv) => rv._id !== action.payload );
    default:
      return reviews;
  }
};
