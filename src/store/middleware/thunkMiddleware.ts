import { Dispatch } from 'redux';

import { PropertyAction, Request } from '../../types/property';
import { RootState } from '../reducers/combineReducer';

export const thunkMiddleware = ({
  dispatch,
  getState,
}: {
  dispatch: Dispatch<PropertyAction>;
  getState: () => RootState;
}) => next => async action => {
  if (action.request) {
    const request: Request = action.request;

    try {
      const response = await fetch(
        `http://localhost:3000/locations/${request.location.id}/properties?page=1`
      ).then(data => data.json());

      next(request.getData(response));
    } catch (error) {
      next(request.getDataError(error));
    }
  } else {
    return typeof action === 'function'
      ? action(dispatch, getState)
      : next(action);
  }
};
