import {combineReducers} from "redux";
import { SET_TEXT, setText } from "../actions";

function text(state = {text: '', characterCount: 0}, action){
	switch(action.type) {
		case SET_TEXT:
			return Object.assign({}, state, {text: action.text, characterCount: action.text.length});
		default:
			return state;
	}
}

const reducers = combineReducers({
	text
});

export default reducers;