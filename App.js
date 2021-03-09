import React from "react";
import Remove from "./Remove";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0, text: "test case", show: true };
	}
	static getDerivedStateFromProps(props, state) {
		return { text: props.description };
	}
	addcount = () => {
		this.setState({ count: this.state.count + 1 });
		this.setState({ show: false });
	};

	render() {
		let myElement;
		if (this.state.show) {
			myElement = <Remove />;
		}
		return (
			<div>
				<h3>count {this.state.count}</h3>
				<h4>description {this.state.text}</h4>
				<button onClick={this.addcount}>click to add</button>
				{myElement}
			</div>
		);
	}
	componentDidMount() {
		setTimeout(
			() =>
				alert(
					"this is component did mount method activate after render method"
				),
			1000
		);
	}
	componentDidUpdate() {
		setTimeout(
			() =>
				alert(
					"this is component did update method activate after any update in state that shown on screen method"
				),
			1000
		);
	}
	getSnapshotBeforeUpdate(prevProps, prevState) {
		alert(`prev state ${prevState.count}`);
	}
	shouldComponentUpdate() {
		if (this.state.count >= 5) {
			return true;
		} else {
			return false;
		}
	}
}

export default App;
