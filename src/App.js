import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout1 from "./Layout/Layout1";
import Layout2 from "./Layout/Layout2";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Layout1 />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
