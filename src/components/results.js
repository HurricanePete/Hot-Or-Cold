import React from 'react';

export default function Result(props) {
	return (
		<div className="results">
			<label htmlFor="current"><h4>That guess was...</h4></label>
			<p id="current">{props.current}</p>
		</div>
		)
}