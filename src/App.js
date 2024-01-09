import React, { useState } from "react";
import Main from "./pages/Main";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Order from "./pages/Order";
import Success from "./pages/Success";
const App = () => {
  const [propForm, setPropForm] = useState({});
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap');
      </style>
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
