import { combineReducers } from 'redux';

import allshoppinglists from './reducer_shoppinglist';
import oneshoppinglist from './reducer_activeShoppinglist';
import form from './FormsReducer';

import * as types from '../actions/ActionTypes';

const appReducer = combineReducers ({
    form,
    allshoppinglists,
    oneshoppinglist
    
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;