import { GET_DATA } from '../../actions/actionTypes/actionTypes';

const initialState = [];

const dataReducer = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case GET_DATA:
      return data;

    default:
      return state;
  }
};

export default dataReducer;
