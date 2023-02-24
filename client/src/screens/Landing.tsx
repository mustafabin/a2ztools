import { useRef } from "react";
import tracker from "../util/tracker";
import { motion } from "framer-motion";

let animationValues = {
	initial: { y: "-5rem", opacity: 0 },
	animate: { y: "0rem", opacity: 1 },
	transition: { duration: 0.5 },
};

const Landing = () => {
	const catalogRef = useRef<HTMLDivElement>(null);
	const featuredRef = useRef<HTMLDivElement>(null);
	// custom hook that returns a boolean when ref is in view
	// this obj keeps track of all refs
	const viewportTrackers = {
		catalog: tracker(catalogRef),
		featured: tracker(featuredRef),
	};
	
	return (
		<div className="Landing">
			<div className="Landing-tempage"></div>
			<div ref={catalogRef} style={{ backgroundColor: "red" }} className="Landing-tempage">
				{viewportTrackers.catalog && <motion.div {...animationValues}>BROWSE OUR CATEGORIES</motion.div>}
			</div>
			<div ref={featuredRef} style={{ backgroundColor: "blue" }} className="Landing-tempage">
				{viewportTrackers.featured && <motion.div {...animationValues}>FEATURED PRODUCTS</motion.div>}
			</div>
		</div>
	);
};
export default Landing;
