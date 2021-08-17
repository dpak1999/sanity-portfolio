/** @format */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog/:slug" component={SinglePost} />
        <Route path="/blog" component={Post} />
        <Route path="/project" component={Project} />
      </Switch>
    </Router>
  );
}

export default App;
