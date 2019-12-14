import * as actionTypes from './actions';
import { updateObject } from './utility.js';

const initialState = {
    results: [],
};



const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_PAYLOAD :{
            return updateObject( state, { results: state.results.concat( 
                { id: new Date(), value: action.result[0] } ) } );
           
        }    

    }
    return state;
};

export default reducer;