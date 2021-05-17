import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import Posts from './pages/Posts'

const App = ()=>{
  return (
    <div className="App">
          <Router>
            <Switch>
              <Route exact={true} path='/' component={LandingPage}/>
              <Route path='/posts' component={Posts}/>
            </Switch>
          </Router>
    </div>
  );
}

export default App;
