import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
