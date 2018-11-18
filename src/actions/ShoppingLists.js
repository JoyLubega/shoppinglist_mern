import instance from './AxiosInstance';
import * as types from './ActionTypes';

import  {notify} from 'react-notify-toast';


const ROOT_URL = "http://127.0.0.1:3000/api";

export const postShoppinglist = (values) => {
  return dispatch => {
    return instance.post(`${ROOT_URL}/shoppinglist`, values).then( (response) => {
      console.log(response)
      dispatch({
        type: types.POST_SHOPPINGLIST_SUCCESS
      })
      dispatch(getAllShoppinglists())
    }).catch(error => {
        return error
    });
  }
}

export const updateShoppinglist = (list_id, values, callback) => {
  return dispatch => {
    return instance.put(`${ROOT_URL}/shoppinglist/${list_id}`, values).then ( 
      (response) => {
        dispatch({
          type: types.UPDATE_SHOPPINGLIST_SUCCESS,
          payload: response
        })
        callback()
    }).catch(error => {
      console.log(error)
     notify.show(error.response.data.message);
    })
  }
}

export const getAllShoppinglistsSuccess = (shoppingLists) => {
  return({
    type: types.GET_ALLSHOPPINGLISTS_SUCCESS,
    shoppingLists
  });
}

export const getAllShoppinglists = () => {
  return (dispatch) => {
    return instance.get(`${ROOT_URL}/shoppinglists`).then(response => {
      dispatch({
        type: types.GET_ALLSHOPPINGLISTS_SUCCESS,
        payload: response
      })
    }).catch(error => {
      
    });
  }
}

export const getOneShoppinglist = (id) => {
  const request = instance.get(`${ROOT_URL}/shoppinglist/${id}`)
  return({
    type: types.GET_ONESHOPPINGLIST_SUCCESS,
    payload: request
  });
}

export const deleteShoppinglists = () => {
  return({
    type: types.DELETE_ALLSHOPPINGLISTS_SUCCESS,
    payload: instance.delete(`${ROOT_URL}/shoppinglists`)
  });
}


export const deleteShoppinglist = (listId) => {
  return dispatch => {
    return instance.delete(`${ROOT_URL}/shoppinglist/${listId}`).then( 
      (response) => {
        dispatch({
          type: types.DELETE_ONESHOPPINGLIST_SUCCESS,
          payload: response
        })
        dispatch(getAllShoppinglists())
    }).catch(error => {});
  }
}
