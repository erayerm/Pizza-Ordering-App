import React from "react";
import Main from "./pages/Main";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Order from "./pages/Order";
import Success from "./pages/Success";
const App = () => {
  return (
    <>
      <Switch>
        <Route path="/pizza">
          <Order/>
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
      
      
    </>
  );
};
export default App;
