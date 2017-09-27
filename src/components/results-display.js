import React from 'react';
import './results-display.css'

import NavBar from './nav-bar';
import GuessForm from './guess-form';
import Result from './results';
import GuessDisplay from './guesses';
import GuessCount from './guess-count';
import InfoPage from './info-page';

export default class ResultsDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: Math.floor(Math.random() * 100),
			response: 'Make your first guess',
			guesses: []
		}
	}

	reset() {
		this.setState({
			answer: Math.floor(Math.random() * 100),
			response: 'Make your first guess',
			guesses: []
		})
	}

	updateGuesses(guess) {
		guess = parseInt(guess, 10);

		const compare = Math.abs(guess - this.state.answer);

		let response;
		if (compare === 0) {
			response = "Dead on! Nice work."
		}
		else if (compare >= 50) {
			response = "Frozen"
		}
		else if (compare >= 30) {
			response = "Quite Cold"
		}
		else if (compare >= 20) {
			response = "Warm"
		}
		else if (compare >= 10) {
			response = "Steaming"
		}
		else if (compare >= 5) {
			response = "Hot"
		}
		else if (compare <= 5) {
			response = "Boiling"
		}

		this.setState({
			response,
			guesses: [...this.state.guesses, guess]
		})
	}

	render() {
		let prevGuesses;
		if (this.state.guesses.length === 0) {
			prevGuesses = "No guesses";
		}
		else {
			prevGuesses = (this.state.guesses).join(", ");
		}
		if (this.state.response === "Dead on! Nice work.") {
			return (
				<div className="results-display">
					<h1><span className="hot">Hot</span> or <span className="cold">Cold</span></h1>
					<h2>The number guessing game</h2>
					<Result current={this.state.response} />
					<GuessCount count={this.state.guesses.length} />
					<button onClick={() => this.reset()} >Play Again?</button>
				</div>
				)
		}
		return (
			<div className="results-display">
				<NavBar reset={() => this.reset()} />
				<h1><span className="hot">Hot</span> or <span className="cold">Cold</span></h1>
				<h2>The number guessing game</h2>
				<h3>Start by guessing a number between 1 & 100</h3>
				<GuessForm correct={current => this.updateGuesses(current)} />
				<Result current={this.state.response} /><hr/>
				<GuessCount count={this.state.guesses.length} /><hr/>
				<GuessDisplay guesses={prevGuesses} /><hr/>
				<InfoPage />
			</div>
		);
	}
}