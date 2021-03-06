import {
    combineReducers,
} from 'redux';
import {CHANGE_MODAL_VISIBLE, BLOCKUSER} from './action-types'

const initialState = {
    visible: false,
    content: null,
    blockUserId: []
}

export const modal = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type){
        case CHANGE_MODAL_VISIBLE: 
            return {
                ...state,
                visible: !state.visible,
                content: action.content
            };
        case BLOCKUSER:
            var old = state.blockUserId.concat(action.blockUserId);
            return {
                ...state, 
                blockUserId: old, 
                visible: !state.visible
            };
    }

    return state;
};

export const reducers = combineReducers({
    modal,
});
