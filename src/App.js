import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Customer/Login/Login';
import Registration from './Component/Customer/Registration/Registration';
import Welcome from './Component/Customer/Welcome/Welcome';
import SignUp from './Component/Shopkeeper/SignUp';
import LogIn from './Component/Shopkeeper/LogIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/'>
          <Home/>
        </Route>
        <Route path = '/user/login'>
          <Login/>
        </Route>
        <Route path = '/user/signup'>
          <Registration/>
        </Route>
        <Route path = '/welcome'>
          <Welcome/>
        </Route>
        <Route path = '/vendor/signup'>
          <SignUp/>
        </Route>
        <Route path = '/vendor/login'>
          <LogIn/>
        </Route>
      </Switch>     
    </Router>
  );
}

export default App;
