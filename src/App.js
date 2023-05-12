import { useState } from "react";
import "./styles/App.css";
import CardContainer from "./components/CardContainer";
function App() {
	const [score, setScore] = useState({
		currentScore: 0,
		highScore: 0,
	});

	const addToScore = () => {
		setScore({
			currentScore: score.currentScore + 1,
			highScore:
				score.currentScore + 1 > score.highScore
					? score.currentScore + 1
					: score.highScore,
		});
	};

	const resetScore = () => {
		setScore({
			currentScore: 0,
			highScore: score.highScore,
		});
	};
	return (
		<div className="App">
			<div className="header">
				<h1>Memory Game</h1>
				<div className="status">
					<h3>Score: {score.currentScore}</h3>
					<h3>High Score: {score.highScore}</h3>
				</div>
			</div>
			<CardContainer
				resetScore={resetScore}
				addToScore={addToScore}
				score={score.currentScore}
			/>
		</div>
	);
}

export default App;
