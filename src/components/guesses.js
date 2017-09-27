import React from 'react';

export default function GuessDisplay(props) {
	return (
		<div>
			<label htmlFor="guesses"><h4>Already Guessed:</h4></label>
			<p id="guesses">{props.guesses}</p>
		</div>
		)
}