import React from 'react';
import './info-page.css';

export default function InfoPage(props) {
	return (
		<div className="info">
			<label htmlFor="info"><h4>If your guess was:</h4></label>
			<ul id="info">	
				<li><strong>Boiling</strong>: it was less than 5 away</li>
				<li><strong>Hot</strong>: it was off by 5-9</li>
				<li><strong>Steaming</strong>: it was off by 10-19</li>
				<li><strong>Warm</strong>: it was off by 20-39</li>
				<li><strong>Quite Cold</strong>: it was off by 30-49</li>
				<li><strong>Frozen</strong>: it was off by 50 or more</li>		
			</ul>
		</div>
		)
}