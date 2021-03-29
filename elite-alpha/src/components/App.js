import { Provider } from 'react-redux';

import store from '../store';
import Home from '../components/Home';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
