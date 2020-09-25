import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// import About from "./core/About";
// import Contact from "./core/Contact";
// import Home from "./core/Home";
import Signin from "./users/Signin";
import Signup from "./users/Signup";
import  Dashboard from './users/UserDashboard';
import AdminPanel from "./users/AdminDashboard";
import Introduction from "./core/Introduction";
import Summary from "./core/Summary";
import HolyBible from "./core/HolyBible";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/" exact component={Signin} />
        <Route path="/admin" exact component={AdminPanel} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/introduction" exact component={Introduction}/>
        <Route path="/summary" exact component={Summary}/>
        <Route path="/holybible" exact component={HolyBible}/>

        {/* <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} /> */}

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
