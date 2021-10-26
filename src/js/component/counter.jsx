import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Counter = () => {
	const [seconds, setSeconds] = useState("0");
	useEffect(() => {
		window.setInterval(() => {
			setSeconds(seconds => seconds + 1);
		}, 1000);
	}, []);

	return (
		<div className="number">
			<span
				onClick={() => {
					setSeconds(seconds);
				}}>
				{seconds}
			</span>
		</div>
	);
};

export default Counter;
