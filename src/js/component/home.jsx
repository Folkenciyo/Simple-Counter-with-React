import React from "react";
import { useEffect, useState } from "react";

//include images into your bundle
import Counter from "./counter.jsx";

//create your first component

const Home = () => {
	//al declararlo en el padre Funciona en el hijo
	const [isRunning, setIsRunning] = useState(true);
	const [isReset, setIsReset] = useState(true);
	const resetButton = () => {
		setIsReset(!isReset);
	};
	return (
		<div>
			<div>
				<Counter time={1} isRunning={isRunning} isReset={isReset} />
				<Counter time={10} isRunning={isRunning} isReset={isReset} />;
				<Counter time={100} isRunning={isRunning} isReset={isReset} />;
				<Counter time={1000} isRunning={isRunning} isReset={isReset} />;
				<Counter time={10000} isRunning={isRunning} isReset={isReset} />
				;
			</div>
			<div>
				<div className="buttons">
					<button
						className="play"
						onClick={() => {
							setIsRunning(true);
						}}>
						<i className="fas fa-play-circle"></i>
					</button>
					<button
						className="pause"
						onClick={() => {
							setIsRunning(false);
						}}>
						<i className="fas fa-pause-circle"></i>
					</button>
					<button className="reset" onClick={resetButton}>
						<i className="fas fa-power-off"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
