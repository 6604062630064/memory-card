import { useState } from "react";
import "./styles/App.css";

function App() {
	const { score, setScore } = useState(0);
	return (
		<div className="App">
			<div className="header">
				<h1>Memory Game</h1>
				<div className="status">
					<h3>Score: 0</h3>
					<h3>High Score: 0</h3>
				</div>
			</div>
			<div className="content"></div>
		</div>
	);
}

export default App;
