import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard11566932Reducer from '../features/Dashboard11566932/redux/reducers'
import EmailAuth1666931Reducer from '../features/EmailAuth1666931/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard11566932: Dashboard11566932Reducer,
EmailAuth1666931: EmailAuth1666931Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});