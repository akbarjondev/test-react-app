import React, { Component } from 'react';

class Counter extends Component {
	// constructor() {
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	state = {
		value: this.props.value
	};

	handleIncrement = () => {
		this.setState({ value: this.state.value + 1 });
	};

	styles = {
		fontSize: 14,
		fontWeight: 'bold',
	};

	render() {
		return (
			<div>
				<span className={this.getBadgeClasess()} style={this.styles}>{this.formatCount()}</span>
				<button onClick={() => this.handleIncrement()} className="btn btn-dark btn-sm">Increment</button>
			</div>
		);
	};

	getBadgeClasess() {
		let classes = 'badge m-2 badge-';
		classes += this.state.value === 0 ? 'warning' : 'primary';

		return classes;
	};

	formatCount() {
		const { value } = this.state;

		return value === 0 ? 'Zero' : value;
	};
}

export default Counter;