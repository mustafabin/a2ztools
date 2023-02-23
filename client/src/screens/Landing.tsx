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
			<div className="Landing-tempage"></div>
			<div className="Landing-tempage"></div>
			<div ref={divRef} className="Landing-tempage"></div>
		</>
	);
};
export default Landing;
