import React from "react";
import ReactDOM from "react-dom";

import Navigation from "./components/navigation";

class Application extends React.Component {
	render() {
		return <Navigation/>;
	}
}

module.exports = function(rootNode) {
	ReactDOM.render(<Application/>, rootNode);

	console.log("Application loaded");
}
