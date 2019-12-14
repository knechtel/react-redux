import * as actionTypes from   './actions';
import { updateObject } from './utility.js';

const initialState = {
    counter: 0,
    results: [],
    test: ['test','hey'],
    vetor:[],
    vlr: false
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.INCREMENT) {
        
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === 'dec') {
        return {
            counter: state.counter - 1
        }
    }

    if (action.type === 'dec') {
        return {
            counter: state.counter - 1
        }
    }
    if(action.type ===  actionTypes.SET_PAYLOAD) {
        // console.log(">>>>reducer login "+state.results.concat( { id: new Date(), value: action.login[1] } ));
     return updateObject( state, { results: state.results.concat( { id: new Date(), value: action.login[1] } ) } );
    }
    return state;
};

export default reducer;