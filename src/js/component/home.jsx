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
		<div className="bubbles">
			<div>
				<div className="visual">
					<div className="counters__num">
						<Counter
							time={10000}
							isRunning={isRunning}
							isReset={isReset}
						/>
						<Counter
							time={1000}
							isRunning={isRunning}
							isReset={isReset}
						/>
						;
						<Counter
							time={100}
							isRunning={isRunning}
							isReset={isReset}
						/>
						;
						<Counter
							time={10}
							isRunning={isRunning}
							isReset={isReset}
						/>
						;
						<Counter
							time={1}
							isRunning={isRunning}
							isReset={isReset}
						/>
						;
					</div>
					<div>
						<div className="buttons">
							<button
								className="button play"
								onClick={() => {
									setIsRunning(true);
								}}>
								<i className="fas fa-play-circle"></i>
							</button>
							<button
								className="button button-2 pause"
								onClick={() => {
									setIsRunning(false);
								}}>
								<i className="fas fa-pause-circle"></i>
							</button>
							<button
								className="button button-3 reset"
								onClick={resetButton}>
								<i className="fas fa-power-off"></i>
							</button>
						</div>
					</div>
				</div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
				<div className="bubble"></div>
			</div>
		</div>
	);
};

export default Home;
