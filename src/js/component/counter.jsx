import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Counter = props => {
	const [seconds, setSeconds] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			if (props.isRunning) {
				// creamos intervalos
				if (seconds != 9) {
					//si seconds es menor q 9, se le suma 1
					setSeconds(seconds + 1);
				} else {
					//de lo contrario resetea
					setSeconds(0);
				}
			}
		}, props.time * 1000);
		return () => clearInterval(interval); //mato intervalo
	}, [seconds, props.isRunning]); // keep variable SECONDS (PARRIBA)

	useEffect(() => {
		setSeconds(0);
		/* return () => clearInterval(seconds); //mato intervalo */
	}, [props.isReset]);

	return (
		<div className="number">
			<span>{seconds}</span>
		</div>
	);
};
Counter.propTypes = {
	//diccionario donde se declaran los PROPS
	time: PropTypes.number,
	isRunning: PropTypes.bool,
	isReset: PropTypes.number
};

export default Counter;
