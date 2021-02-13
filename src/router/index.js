import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../views/home/index.jsx';
import Portfolio from '../views/portfolio/index.jsx';

function Router() {
  return (
    <BrowserRouter >
      <Switch>
        
          <Route
            exact
            path="/"
            render={() => <HomePage />} />

          <Route
            exact
            path="/portfolio"
            render={() => <Portfolio />} />

      </Switch>
    </BrowserRouter>
  );
}

export default Router;