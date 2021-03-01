import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";
import { Toolbar } from "./toolbar.js";
import { storeIntervalID } from "./toolbar.js";
import { counterStoppedStatus } from "./toolbar.js";
import { isCounterStopped } from "./toolbar.js";

// Global variables
let counter = 0;
let counterArray = [0, 0, 0, 0, 0, 0];
const twoDigitNumber = 10;
const threeDigitNumber = 100;
const fourDigitNumber = 1000;
const fiveDigitNumber = 10000;

// Styles
// Row Style
const flexRow = {
	display: "flex",
	flexDirection: "row",
	backgroundColor: "black",
	justifyContent: "center"
};
// Item Style
const flexItem = {
	color: "white",
	backgroundColor: "rgb(25, 25, 25)",
	borderRadius: "5px",
	marginTop: "10px",
	marginRight: "5px",
	marginLeft: "5px",
	marginBottom: "10px",
	width: "10%",
	height: "100px",
	textAlign: "center",
	fontSize: "60px"
};

// SecondsCounter Tag
export function SecondsCounter(prop) {
	return (
		<div>
			<div style={flexRow}>
				<div style={flexItem}>
					<i className="far fa-clock"></i>
				</div>
				<div style={flexItem}> {prop.time[5]}</div>
				<div style={flexItem}> {prop.time[4]}</div>
				<div style={flexItem}> {prop.time[3]}</div>
				<div style={flexItem}> {prop.time[2]}</div>
				<div style={flexItem}> {prop.time[1]}</div>
				<div style={flexItem}> {prop.time[0]}</div>
			</div>
			<div className="m-5">
				<Toolbar />
			</div>
		</div>
	);
}

SecondsCounter.propType = {
	time: PropType.array
};

// Update the amount of seconds elapsed since loading
export function updateTime() {
	// Update the timer count
	counter++;
	// If the number is less than 10
	if (counter < twoDigitNumber) {
		counterArray[0] = counter;
	}
	// If the number is less than 100
	else if (counter < threeDigitNumber) {
		counterArray[1] = Math.floor(counter / 10);
		counterArray[0] = counter - counterArray[1] * 10;
	}
	// If the number is less than 1000
	else if (counter < fourDigitNumber) {
		counterArray[2] = Math.floor(counter / 100);
		counterArray[1] = Math.floor((counter - counterArray[2] * 100) / 10);
		counterArray[0] =
			counter - counterArray[1] * 10 - counterArray[2] * 100;
	} // If the number is less than 10000
	else if (counter < fiveDigitNumber) {
		counterArray[3] = Math.floor(counter / 1000);
		counterArray[2] = Math.floor((counter - counterArray[3] * 1000) / 100);
		counterArray[1] = Math.floor(
			(counter - counterArray[2] * 100 - counterArray[3] * 1000) / 10
		);
		counterArray[0] =
			counter -
			counterArray[1] * 10 -
			counterArray[2] * 100 -
			counterArray[3] * 1000;
	} else {
		counterArray[5] = Math.floor(counter / 100000);
		counterArray[4] = Math.floor(
			(counter - counterArray[5] * 100000) / 10000
		);
		counterArray[3] = Math.floor(
			(counter - counterArray[5] * 100000 - counterArray[4] * 10000) /
				1000
		);
		counterArray[2] = Math.floor(
			(counter -
				counterArray[5] * 100000 -
				counterArray[4] * 10000 -
				counterArray[3] * 1000) /
				100
		);
		counterArray[1] = Math.floor(
			(counter -
				counterArray[5] * 100000 -
				counterArray[4] * 10000 -
				counterArray[3] * 1000 -
				counterArray[2] * 100) /
				10
		);
		counterArray[0] =
			counter -
			counterArray[5] * 100000 -
			counterArray[4] * 10000 -
			counterArray[3] * 1000 -
			counterArray[2] * 100 -
			counterArray[1] * 10;
	}

	return counterArray;
}

// Reset the counter
export function resetCounter() {
	counter = 0;
	counterArray[0] = 0;
	counterArray[1] = 0;
	counterArray[2] = 0;
	counterArray[3] = 0;
	counterArray[4] = 0;
	counterArray[5] = 0;
}

// Resume the code execution
export function ResumeCodeExecution() {
	if (isCounterStopped() == 1) {
		let id = setInterval(function() {
			let seconds = updateTime();
			ReactDOM.render(
				<SecondsCounter time={seconds} />,
				document.querySelector("#app")
			);
		}, 1000);

		storeIntervalID(id);
		counterStoppedStatus(0);
	}
}
