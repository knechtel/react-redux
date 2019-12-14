import * as actionTypes from   './actions';
import { updateObject } from './utility.js';

const initialState = {
    counter: 0,
    results: [],
    vetor:[],
    vlr: false
}

const reducer = (state = initialState, action) => {
    
    if(action.type ===  actionTypes.SET_PAYLOAD) {
        return updateObject( state, { 
            results: state.results.concat( 
            { id: new Date(), value: action.login[1] } )
        });
    }
    return state;
};

export default reducer;