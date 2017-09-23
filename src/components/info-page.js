import React from 'react';

export default function InfoPage(props) {
	return (
		<div>
			<label htmlFor="info">If your guess was:</label>
			<ul id="info">
				<li><strong>Frozen</strong>: it was off by 50 or more</li>
				<li><strong>Quite Cold</strong>: it was less than 35 away</li>
				<li><strong>Warm</strong>: it was less than 20 away</li>
				<li><strong>Hot</strong>: it was within 5</li>
				<li><strong>Boiling</strong>: it was only 1 away</li>
			</ul>
		</div>
		)
}