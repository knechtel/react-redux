import * as actionTypes from './actions';
import { updateObject } from './utility.js';

const initialState = {
    results: [],
    login: '99'
};



const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
    

        case actionTypes.FLAG1 :{
            console.log("FLAG1");
            console.log("aqui >>>>>   "+action.login[1]);
            return updateObject( state, { results: state.results.concat( 
                { id: new Date(), value: action.login[1] } ) } );
          }
        

        case actionTypes.SET_PAYLOAD :{
            console.log("FLAG1");
            console.log("aqui >>>>>action   "+action.login[0]);
            return updateObject( state, { results: state.results.concat( 
                { id: new Date(), value: action.result[0] } ) } );
           
        }
      

    }
    return state;
};

export default reducer;