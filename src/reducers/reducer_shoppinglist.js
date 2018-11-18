import _ from 'lodash';
import * as types from '../actions/ActionTypes';

export default (state = {
    shoppinglists : {}
}, action) => {
    switch(action.type) {
        case types.GET_ALLSHOPPINGLISTS_SUCCESS:
            return{
                ...state,
                count: action.payload.data.count,
                shoppinglists: action.payload.data
            }
        
        case types.DELETE_ALLSHOPPINGLISTS_SUCCESS:
            return action.payload.data
        case types.DELETE_ONESHOPPINGLIST_SUCCESS:
            return action.payload.data

        default:
            return state;
    }
}
