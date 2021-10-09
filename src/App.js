import { createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Shipping from "./components/Shipping/Shipping";
import AuthProvider from "./context/AuthProvider";
import PrivetRoute from "./privetRoute/PrivetRoute";

export const LoginRegister = createContext("");
function App() {
  return (
    <div className="container">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <PrivetRoute exact path="/">
              <Home />
            </PrivetRoute>
            <PrivetRoute exact path="/shipping">
              <Shipping></Shipping>
            </PrivetRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="*">
              <h1>Hot Found 404</h1>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
