import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import NotFound from '../pages/NotFound';
import WhoWeAre from '../pages/WhoWeAre';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/badges" component={Badges} />
					<Route exact path="/badges/new" component={BadgeNew} />
					<Route exact path="/whoweare" component={WhoWeAre} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
