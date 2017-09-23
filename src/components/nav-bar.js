import React from 'react';
import './nav-bar.css';

export default function NavBar(props) {
	return (
		<nav>
			<ul>
				<li><a href="#" onClick={props.reset} >New Game</a></li>
			</ul>
		</nav>
		)
}