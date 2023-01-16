import React, { useState } from "react";


const Home = () => {

	const [ color, setColor] = useState(0);
	return (
		<div className="text-center mt-1">
			<div className="trafficLight p-3">
				<div className={`light alert ${color == 0 ? "bg" : "alert" }-danger `} onClick={() => {setColor(0)}}/>
				<div className={`light alert ${color == 1 ? "bg" : "alert" }-warning `} onClick={() => {setColor(1)}}/>
				<div className={`light alert ${color == 2 ? "bg" : "alert" }-success `} onClick={() => {setColor(2)}}/>
			</div>
			<button type="button" class="btn btn-info btn-lg mt-3" onClick={() => {
				setColor(color == 2 ? 0 : color + 1);
			}
			}>Change Light</button>
		</div>
	);
};

export default Home;
