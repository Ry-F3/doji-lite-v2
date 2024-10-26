import React from "react";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
// import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import Layout from "./pages/dashboard/Layout"

function App() {
  return (
    <Switch>
      <Route exact path="/signin" render={() => <SignInForm />} />
      <Route exact path="/dashboard" render={() => <Layout />} />
      {/* <Route exact path="/signup" render={() => <SignUpForm />} /> */}
      <Route render={() => <p>Page not found!</p>} />
    </Switch>
  );
}

export default App;
