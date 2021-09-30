import logo from './logo.svg';
import LeftNavigation from './navigation/LeftNavigation';
import Home from './containers/Home/Home';

import './App.scss';
import Router from './navigation/Router';

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Navigation Template</h1>
        <div className="content">

          <LeftNavigation/>
          <Home/>
        </div>
      </Router>
    </div>
  );
}

export default App;
