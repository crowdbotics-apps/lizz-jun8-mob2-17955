import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn22566948Reducer from '../features/SignIn22566948/redux/reducers'
import SignIn42766946Reducer from '../features/SignIn42766946/redux/reducers'
import SignIn52866945Reducer from '../features/SignIn52866945/redux/reducers'
import SignUp12966944Reducer from '../features/SignUp12966944/redux/reducers'
import SignUp23066943Reducer from '../features/SignUp23066943/redux/reducers'
import Dashboard21866936Reducer from '../features/Dashboard21866936/redux/reducers'
import Dashboard21966935Reducer from '../features/Dashboard21966935/redux/reducers'
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
SignIn22566948: SignIn22566948Reducer,
SignIn42766946: SignIn42766946Reducer,
SignIn52866945: SignIn52866945Reducer,
SignUp12966944: SignUp12966944Reducer,
SignUp23066943: SignUp23066943Reducer,
Dashboard21866936: Dashboard21866936Reducer,
Dashboard21966935: Dashboard21966935Reducer,
Dashboard11566932: Dashboard11566932Reducer,
EmailAuth1666931: EmailAuth1666931Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});