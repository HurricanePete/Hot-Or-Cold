import React from 'react';

export default function guessCount(props) {
	return (
		<div>
			<label htmlFor="guess-count">You have guessed:</label>
			<p id="guess-count">{props.count} time(s)</p>
		</div>
		)
}