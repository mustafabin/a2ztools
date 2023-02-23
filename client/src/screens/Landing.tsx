import { useRef } from "react";
import tracker from "../util/tracker";

const Landing = () => {
	const divRef = useRef<HTMLDivElement>(null);
	const inView = tracker(divRef); // custom hook that returns a boolean when ref is in view
    if (inView) {
		console.log("in viewport:", divRef.current);
	} else {
		console.log("not in view");
	}
	
	return (
		<>
			<div className="App">
				<div className="App-tempage App-tempage-one"></div>
				<div className="App-tempage App-tempage-two"></div>
				<div ref={divRef} className="App-tempage App-tempage-three"></div>
			</div>
		</>
	);
};
export default Landing;
