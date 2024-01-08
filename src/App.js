import React, { useState } from "react";
import Main from "./pages/Main";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Order from "./pages/Order";
import Success from "./pages/Success";
const App = () => {
  const [propForm, setPropForm] = useState({});
  return (
    <>
      <Switch>
        <Route path="/pizza">
          <Order setPropForm={setPropForm} />
        </Route>
        <Route path="/success">
          <Success propForm={propForm} />
        </Route>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
      
      
    </>
  );
};
export default App;
