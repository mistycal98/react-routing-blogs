import React, { Component, Suspense } from "react";

export default class About extends Component {
	render() {
		return (
			<div>
				<Suspense fallback={<h1>Loading</h1>}>
					<h1>About page</h1>
				</Suspense>
			</div>
		);
	}
}
