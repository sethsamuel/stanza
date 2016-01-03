import React from "react";

const style = {
	display: "block",
	resize: "none",
	width: 300,
	height: 200,
	outline: 0,
	border: 0,
	padding: 8,
	fontSize: "1rem"
};

export default class Input extends React.Component {
	onKeyUp() {
		this.props.onChange(this.refs.textarea.value);
	}

	render() {
		return <textarea ref="textarea" style={style} onKeyUp={this.onKeyUp.bind(this)} />;
	}
}

Input.propTypes = {
	onChange: React.PropTypes.func.isRequired
}