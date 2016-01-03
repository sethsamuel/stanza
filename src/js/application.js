// React
import React from "react";
import {render} from "react-dom";

// Redux
import {createStore} from "redux";
import {Provider} from "react-redux";
import {default as reducers} from "./redux/reducers";

// Components
import Application from "./components/application";

const store = createStore(reducers);

module.exports = function(rootNode) {
	render(<Provider store={store}><Application/></Provider>, rootNode);

	console.log("Application loaded");
}
