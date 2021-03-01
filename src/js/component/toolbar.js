import React from "react";
import { resetCounter } from "./counter.js";
import { ResumeCodeExecution } from "./counter.js";

// Global variables
let intervalID = 0;
let counterStopped = 0;

// Styles
// Row Style
const flexRow = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "center"
};

// Display the toolbar
export function Toolbar() {
	return (
		<div style={flexRow}>
			<div>
				<button
					type="button"
					className="m-5 btn btn-success"
					onClick={ResumeCodeExecution}>
					Resume
				</button>
				<button
					type="button"
					className="m-5 btn btn-danger"
					onClick={stopExecution}>
					Stop
				</button>
				<button
					type="button"
					className="m-5 btn btn-primary"
					onClick={resetCounter}>
					Reset
				</button>
			</div>
		</div>
	);
}

// Get the timer interval ID
export function storeIntervalID(id) {
	intervalID = id;
}

// Stop the code execution
function stopExecution() {
	clearInterval(intervalID);
	counterStopped = 1;
}

export function isCounterStopped() {
	return counterStopped;
}

export function counterStoppedStatus(state) {
	counterStopped = state;
}
