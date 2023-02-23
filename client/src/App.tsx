import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Landing from "./screens/Landing";
import Navbar from "./components/Navbar";

function App() {

	return (
		<>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="*" element={<h1>Error Page</h1>} />
			</Routes>
		</>
	);
}
export default App;
