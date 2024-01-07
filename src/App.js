import React from "react";
import Main from "./pages/Main";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Order from "./pages/Order";
const App = () => {
  return (
    <>
      <Switch>
        <Route path="/pizza">
          <Order/>
        </Route>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
      
      
    </>
  );
};
export default App;
