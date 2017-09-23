import React from 'react';

export default function Result(props) {
	return (
		<div className="results">
			<label htmlFor="current">That guess was...</label>
			<p id="current">{props.current}</p>
		</div>
		)
}