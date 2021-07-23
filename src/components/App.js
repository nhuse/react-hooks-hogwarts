import React from "react";
import Nav from "./Nav";
import HogInfo from "./HogInfo"
import RenderPigs from "./RenderPigs"

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<RenderPigs hog={hogs}/>
		</div>
	)	
}

export default App;
