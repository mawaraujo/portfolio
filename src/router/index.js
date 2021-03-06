import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../views/home/index.jsx';
import Portfolio from '../views/portfolio/index.jsx';
import AboutMe from '../views/about-me/index.jsx';
import Contact from '../views/contact/index.jsx';

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

          <Route
            exact
            path="/about-me"
            render={() => <AboutMe />} />

          <Route
            exact
            path="/contact"
            render={() => <Contact />} />

      </Switch>
    </BrowserRouter>
  );
}

export default Router;