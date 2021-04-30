import { Dispatch } from 'react';
import { PropertyAction } from '../../types/property';

export const fetchData = (
  actionTypeFetch,
  actionTypeSuccess,
  actionTypeError,
  url
) => {
  const baseApi = 'http://localhost:3000';

  return async (dispatch: Dispatch<PropertyAction>) => {
    //??? как передать тип Dispatch<PropertyAction>
    try {
      dispatch({ type: actionTypeFetch });
      const response = await fetch(`${baseApi}${url}`).then(data =>
        data.json()
      );
      dispatch({
        type: actionTypeSuccess,
        payload: response.properties,
      });
    } catch (error) {
      dispatch({
        type: actionTypeError,
        payload: 'Error!',
      });
    }
  };
};
