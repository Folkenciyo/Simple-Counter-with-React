import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Counter = props => {
	const [seconds, setSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		if (isRunning) {
			const interval = setInterval(() => {
				// creamos intervalos
				if (seconds < 9) {
					//si seconds es menor q 9, se le suma 1
					setSeconds(seconds + 1);
				} else {
					//de lo contrario resetea
					setSeconds(0);
				}
			}, 1000);
		} else {
			return () => clearInterval(interval); //mato intervalo
		}
	}, [seconds]); // keep variable SECONDS (PARRIBA)

	return (
		<div className="number">
			<span>{seconds}</span>
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
				<button className="reset">
					<i className="fas fa-power-off"></i>
				</button>
			</div>
		</div>
	);
};

Counter.PropType = {
	start: PropTypes.number
};

export default Counter;
