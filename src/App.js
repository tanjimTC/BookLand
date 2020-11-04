import Axios from "axios";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { toast } from "react-toastify";
import "./App.css";
import AddBook from "./containers/AddBook";
import Book from "./containers/Book";
import Home from "./containers/Home";
import Savedbook from "./containers/Savedbook";
import Contact from "./containers/Contact";

function App() {
  const [saved, setSaved] = useState([]);
  const [allbooks, setAllbooks] = useState([]);

  const updateState = () => {
    Axios.get("http://localhost:3200/book/savebook").then((response) => {
      setSaved(response.data);
    });
    Axios.get("http://localhost:3200/book").then((response) => {
      setAllbooks(response.data);
    });
  };

  useEffect(() => {
    updateState();
  }, []);

  toast.configure();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/books">
            <Book updateState={updateState} />
          </Route>
          <Route path="/addbooks">
            <AddBook />
          </Route>
          <Route path="/savedbook">
            <Savedbook
              saved={saved}
              allbooks={allbooks}
              updateState={updateState}
            />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
