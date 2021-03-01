//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { SecondsCounter } from "./component/counter.js";
import { updateTime } from "./component/counter.js";
import { storeIntervalID } from "./component/toolbar.js";

//render your react application
window.onload = function() {
	let counterDisplay = setInterval(function() {
		let seconds = updateTime();
		ReactDOM.render(
			<SecondsCounter time={seconds} />,
			document.querySelector("#app")
		);
	}, 1000);
	storeIntervalID(counterDisplay);
};
