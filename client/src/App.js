import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
          <Route exact path = "/" component = {Home} ></Route>
      </Switch>
    </Router>
  );
}

export default App;
