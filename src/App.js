import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserProvider from './providers/UserProvider';

function App() {


  return (
    <UserProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
