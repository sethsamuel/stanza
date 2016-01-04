// React
import React from "react";

// Redux
import {connect} from "react-redux";
import {SET_TEXT, setText} from "../redux/actions";

// Components
import Navigation from "./navigation";
import Input from "./input";
import CharacterCount from "./character_count";
import Syllables from "./syllables";

const linkStyle = {
	background: "white",
	display: "block",
	textAlign: "center",
	fontSize: "1.1rem",
	padding: 16,
	marginTop: 16,
	width: 300,
	textDecoration: "none"
};

class Application extends React.Component {
	render() {
		const { dispatch, text } = this.props;
		const twitterLink = `https://twitter.com/share?text=${encodeURI(this.props.text.text)} #stanza`;

		return <div>
			<Navigation/>
			<Input onChange={text => dispatch(setText(text))} />
			<CharacterCount count={text.characterCount} />
			<Syllables syllables={text.syllables}/>
			<a style={linkStyle} href={twitterLink} target="_blank">Tweet it!</a>
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
