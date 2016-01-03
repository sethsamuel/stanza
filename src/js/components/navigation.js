import React from "react";

const navStyle = {
	padding: "16px"
};

const headerStyle = {
	fontSize: "3rem",
	lineHeight: "1",
	margin: 0,
	padding: 0,
	color: "white"
};

export default class Navigation extends React.Component {
	render() {
		return <nav style={navStyle}>
			<h1 style={headerStyle}>Stanza</h1>
		</nav>;
	}
}