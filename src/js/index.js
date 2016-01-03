console.log("Loading");
require.ensure([], (require) => {
	const application = require("./application")();
	document.getElementById("application").classList.add("loaded");
});
