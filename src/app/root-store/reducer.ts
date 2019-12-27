import { ActionTypes, Actions } from './actions';
import { initialState, State } from './state';



export function filteredReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.SetItems:
            {
                return { ...state, items: action.payload };
            }
        default:
            return state;
    }
}