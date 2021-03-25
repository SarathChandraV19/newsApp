import { combineReducers } from "redux";
import FetchCoronaNews from "./FetchCoronaNewsReducer";
import FetchSuccess from './FetchSuccessReducer';

export default combineReducers({
    fetchCoronaNews: FetchCoronaNews,
    fetchSuccess: FetchSuccess
})