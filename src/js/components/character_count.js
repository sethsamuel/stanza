import React from "react";

let style = {
	display: "block",
	width: 300,
	fontSize: "1rem",
	textAlign: "right"
};

export default class CharacterCount extends React.Component {
	render() {
		style = Object.assign({}, style, {color : (this.props.count > 140) ? "red" : "inherit"});
		return <span style={style}>{140-this.props.count}</span>;
	}
}

CharacterCount.propTypes = {
	count: React.PropTypes.number.isRequired
};