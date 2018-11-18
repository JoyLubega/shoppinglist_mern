import { reducer as formReducer } from 'redux-form';
import * as types from '../actions/ActionTypes';

export default formReducer.plugin({
    AddListForm: (state, action) => {
        switch(action.type){
            case types.POST_SHOPPINGLIST_SUCCESS:
                return undefined;
            default:
                return state;
        }
    },
    AddItemForm:(state, action) => {
        switch(action.type){
            case types.POST_SHOPPINGITEM_SUCCESS:
                return undefined;
            default:
                return state;
        }
    }
})