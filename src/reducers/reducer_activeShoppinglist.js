import * as types from '../actions/ActionTypes';

export default (state = {}, action) => {
    switch(action.type) {
        case types.GET_ONESHOPPINGLIST_SUCCESS:
            return {
                ...state,
                singleShoppingList: action.payload
            };
        case types.UPDATE_SHOPPINGLIST_SUCCESS:
            return {
                ...state,
                singleShoppingList: action.payload
            }
        
        default:
            return state;
    }
}