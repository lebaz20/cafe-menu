import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import MenuList from "./Components/MenuList";
import NewMenu from "./Components/NewMenu";
import EditMenu from "./Components/EditMenu";

const App = () => {
  return (
    <Container>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={MenuList} />
          <Route path="/new" component={NewMenu} />
          <Route path="/edit/:id" component={EditMenu} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
