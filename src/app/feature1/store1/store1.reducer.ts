import { Store1ActionTypes, Store1Actions } from './store1.actions';
import { Store1State, initialState } from './store1.state';

export function reducer(state = initialState, action: Store1Actions): Store1State {
    switch (action.type) {
        case Store1ActionTypes.SetItems:
            {
                return { ...state, items: action.payload };
            }
        case Store1ActionTypes.SelectedItem:
            {
                return { ...state, selectedItem: action.payload };
            }

        default:
            return state;
    }
}