import React, { Component } from 'react';

class Counter extends Component {
	// constructor() {
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	state = {
		counter: 0,
	};

	styles = {
		fontSize: 14,
		fontWeight: 'bold',
	};

	handleIncrement = (product) => {
		this.setState({ counter: this.state.counter + 1 });
	};

	render() {
		return (
			<div>
				<span className={this.getBadgeClasess()} style={this.styles}>{this.formatCount()}</span>
				<button onClick={() => this.handleIncrement('product')} className="btn btn-dark btn-sm">Increment</button>
			</div>
		);
	};

	getBadgeClasess() {
		let classes = 'badge m-2 badge-';
		classes += this.state.counter === 0 ? 'warning' : 'primary';

		return classes;
	};

	formatCount() {
		const { counter } = this.state;

		return counter === 0 ? 'Zero' : counter;
	};
}

export default Counter;