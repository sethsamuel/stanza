import React from "react";

let style = {
	display: "block",
	width: 300,
	fontSize: "1rem",
	textAlign: "center"
};

export default class Syllables extends React.Component {
	render() {
		return <div>
			{this.props.syllables.map((n, i) => {
				return <div key={i} style={style}>{n}</div>;
			})}
		</div>;
	}
}

Syllables.propTypes = {
	syllables: React.PropTypes.arrayOf(React.PropTypes.number).isRequired
};