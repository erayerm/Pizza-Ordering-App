import React from "react";
import Main from "./pages/Main";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
const App = () => {
  return (
    <>
      <Switch>
        <Route path="/pizza">
    
        </Route>
        <Route path="/">
          <Main></Main>
        </Route>
      </Switch>
      
      
    </>
  );
};
export default App;
