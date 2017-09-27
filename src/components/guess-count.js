import React from 'react';

export default function guessCount(props) {
	return (
		<div>
			<label htmlFor="guess-count"><h4>You have guessed:</h4></label>
			<p id="guess-count">{props.count} time(s)</p>
		</div>
		)
}