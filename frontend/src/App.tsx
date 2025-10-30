import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import Payments from './pages/Payments';
import Login from './pages/Login';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/payments" component={Payments} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;