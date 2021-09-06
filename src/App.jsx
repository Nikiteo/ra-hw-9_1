import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Menu from './components/Menu/Menu'
import HomePage from './components/HomePage/HomePage'
import DriftPage from './components/DriftPage/DriftPage'
import TimeAttackPage from './components/TimeAttackPage/TimeAttackPage'
import ForzaPage from './components/ForzaPage/ForzaPage'
import './index.css';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/drift" component={DriftPage} />
            <Route path="/timeattack" component={TimeAttackPage} />
            <Route path="/forza" component={ForzaPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}