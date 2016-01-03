// React
import React from "react";

// Redux
import {connect} from "react-redux";
import {SET_TEXT, setText} from "../redux/actions";

// Components
import Navigation from "./navigation";
import Input from "./input";
import CharacterCount from "./character_count";

class Application extends React.Component {
	render() {
		const { dispatch, text } = this.props;

		return <div>
			<Navigation/>
			<Input onChange={text => dispatch(setText(text))} />
			<CharacterCount count={text.characterCount} />
		</div>
		;
	}
}

function select(state){
	return {
		text : state.text
	};
}

export default connect(select)(Application);