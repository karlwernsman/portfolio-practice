import './App.css';
import Header from './components/Header/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';
import Home from './components/Home/Home.js';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/">
          <Redirect to="/home" component={Home} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
