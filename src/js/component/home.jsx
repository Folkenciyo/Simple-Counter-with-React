import React from "react";

//include images into your bundle
import Counter from "./counter.jsx";

//create your first component
const Home = () => {
	return <Counter start={0} />;
};

export default Home;
