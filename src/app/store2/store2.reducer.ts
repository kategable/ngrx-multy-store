import { Store2ActionTypes, Store2Actions } from './store2.actions';
import { Store2State, initialState } from './store2.state'; 

export function reducer(state = initialState, action: Store2Actions): Store2State {
    switch (action.type) {
        case Store2ActionTypes.SetItems:
            {
                return { ...state, items: action.payload };
            }
        
        default:
            return state;
    }
}