import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import Components
import Nav from "./components/Nav";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import BlogDetail from "./components/BlogDetail.jsx";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/blogs' exact component={Blogs}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/blogs/:id' component={BlogDetail}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
