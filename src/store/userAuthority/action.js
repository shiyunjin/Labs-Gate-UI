/*
 *
 * profile actions
 *
 */


import { push } from 'react-router-redux';
import { getAuthority } from '../../api';
import { setAuthority } from '../../utils/authority';
import { reloadAuthorized } from '../../utils/Authorized';
import {
  USER_AUTHORITY_REQUEST,
  USER_AUTHORITY_FAILURE,
  USER_AUTHORITY_SUCCESS,
} from './constants';

const userAuthorityRequest = () => {
  return {
    type: USER_AUTHORITY_REQUEST,
    isLoading: true,
  };
};

const userAuthoritySuccess = (payload) => {
  return {
    type: USER_AUTHORITY_FAILURE,
    isLoading: false,
    payload,
  };
};

const userAuthorityFailure = (payload) => {
  return {
    type: USER_AUTHORITY_SUCCESS,
    isLoading: false,
    payload,
  };
};

export const userAuthority = (params) => {
  return async (dispatch) => {
    dispatch(userAuthorityRequest());
    try {
      const response = await getAuthority(params);

      dispatch(userAuthoritySuccess(response.data));
      
      if (response.data.status === 200) {
        setAuthority(response.data.currentAuthority);
        reloadAuthorized();
        console.info(response.data);

        if (!response.data.currentAuthority || response.data.currentAuthority == "guest") {
          dispatch(push('/user/login'));
        }
      } else {
        setAuthority("guest");
        reloadAuthorized();

        dispatch(push('/user/login'));
      }
    } catch (error) {
      dispatch(userAuthorityFailure(error));
    }
  };
};
