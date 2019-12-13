import moment from 'moment';
import myData from '../../../utils/data.json';
import { GET_DATA } from '../actionTypes/actionTypes';

export const fetchDataAction = (period) => {
  return async (dispatch) => {
    try {
      let data;
      const lastDate = new Date(
        moment('2019-12-30')
          .subtract(1, period)
          .format('YYYY-MM-DD')
      ).getTime();

      if (period === 'max') {
        data = await myData.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });
      } else {
        data = await myData
          .filter((item) => new Date(item.date).getTime() >= lastDate)
          .sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
          });
      }

      dispatch(getDataAction(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const getDataAction = (data) => {
  return {
    type: GET_DATA,
    data
  };
};
