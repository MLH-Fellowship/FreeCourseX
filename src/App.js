import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./pages/Landing.js"
import Form from './pages/Form.js'
import Results from './pages/Results.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
