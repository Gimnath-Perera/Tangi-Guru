import React, { Component } from "react";
import { Provider } from "react-redux";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import store from "./store";
import GameContainer from "./components/GameContainer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Provider store={store}>
            <Route path="/games">
              <DndProvider backend={Backend}>
                <GameContainer />
              </DndProvider>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/">
              <Redirect to="/dashboard" /> : <Dashboard />
            </Route>
          </Provider>
        </Switch>
      </Router>
    );
  }
}

export default App;
