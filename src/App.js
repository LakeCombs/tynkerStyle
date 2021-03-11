import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WhatisCodingPage from "./Component/WhatisCodingPage";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={WhatisCodingPage} />
			</Switch>
		</Router>
	);
};

export default App;
