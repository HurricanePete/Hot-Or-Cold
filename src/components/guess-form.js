import React from 'react';
import './guess-form.css'

export default class GuessForm extends React.Component {
	constructor(props) {
		super(props);
	}

	onSubmit(event) {
		event.preventDefault();
		const guess = this.numberInput.value;
		if (guess && this.props.correct) {
			this.props.correct(guess);
		}
		this.numberInput.value = '';
	}
	
	render() {
		return(
			<form className="search-form" onSubmit={(e) => this.onSubmit(e)}>
				<input type="number" required ref={input => this.numberInput = input} />
				<button>Guess</button>
			</form>
		);
	}
}