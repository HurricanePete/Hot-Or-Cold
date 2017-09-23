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
		if (compare >= 50) {
			response = "Frozen"
		}
		else if (compare >= 35) {
			response = "Quite Cold"
		}
		else if (compare >= 20) {
			response = "Warm"
		}
		else if (compare >= 5) {
			response = "Hot"
		}
		else if (compare >= 1) {
			response = "Boiling"
		}
		else {
			response = "Dead on! Nice work."
		}

		this.setState({
			response,
			guesses: [...this.state.guesses, guess]
		})
	}

	render() {
		if (this.state.response === "Dead on!") {
			return (
				<div className="results-display">
					<h1>Hot or Cold</h1>
					<h2>The number guessing game</h2>
					<Result current={this.state.response} />
					<GuessCount count={this.state.guesses.length} />
				</div>
				)
		}
		return (
			<div className="results-display">
				<NavBar reset={() => this.reset()} info={() => this.displayInfo("")} />
				<h1><span className="hot">Hot</span> or <span className="cold">Cold</span></h1>
				<h2>The number guessing game</h2>
				<h3>Start by guessing a number between 1 & 100</h3>
				<GuessForm correct={current => this.updateGuesses(current)} />
				<Result current={this.state.response} /><hr/>
				<GuessCount count={this.state.guesses.length} /><hr/>
				<GuessDisplay guesses={(this.state.guesses).join(", ")} /><hr/>
				<InfoPage />
			</div>
		);
	}
}