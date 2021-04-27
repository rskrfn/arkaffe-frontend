import {  Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";


function App() {
  return (
    <>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
    </>
  );
}

export default App;
