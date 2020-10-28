import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Book from "./containers/Book";
import Home from "./containers/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/books">
            <Book />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
