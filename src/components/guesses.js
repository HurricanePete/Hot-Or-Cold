import React from 'react';

export default function GuessDisplay(props) {
	return (
		<div>
			<label htmlFor="guesses">Already Guessed:</label>
			<p id="guesses">{props.guesses}</p>
		</div>
		)
}