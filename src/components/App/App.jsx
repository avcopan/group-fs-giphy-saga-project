import React from "react";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import Favorites from "../../pages/Favorites/Favorites";
import { Route } from "react-router-dom";

function App() {
  return (
  <Layout>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/favorites">
      <Favorites />
    </Route>
  </Layout>
  );
}

export default App;
