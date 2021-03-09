import React from "react";

class Remove extends React.Component {
	componentWillUnmount() {
		alert("component un-mounted");
	}
	render() {
		return <h4>show if not clicked</h4>;
	}
}

export default Remove;
