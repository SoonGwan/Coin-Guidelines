import { combineReducers } from "redux";
import coin from "./coin";

const rootReducer = combineReducers({
	coins: coin,
});

export default rootReducer;
