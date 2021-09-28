import React from "react";
import ReactDOM from "react-dom";
import { 
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import "./index.css";
import Landing from "./pages/Landing";
import EssayPage from "./pages/EssayPage";
import WorksPage from "./pages/WorksPage";
import ResumePage from "./pages/ResumePage";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Landing} />
    <Route path="/essays" component={EssayPage} />
    <Route path="/works" component={WorksPage} />
    <Route path="/resume" component={ResumePage} />
  </Router>,
  document.getElementById("root")
);
