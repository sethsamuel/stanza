import {combineReducers} from "redux";
import { SET_TEXT, setText } from "../actions";

import syllables from "syllable";

function text(state = {text: '', characterCount: 0, syllables: []}, action){
	switch(action.type) {
		case SET_TEXT:
			return Object.assign({}, state, {
				text: action.text,
				characterCount: action.text.length,
				syllables: action.text.split("\n").map(syllables)
			});
		default:
			return state;
	}
}

const reducers = combineReducers({
	text
});

export default reducers;