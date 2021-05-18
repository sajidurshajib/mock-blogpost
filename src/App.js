import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import Posts from './pages/Posts'
import BaseUIWrapper from './BaseUIWrapper'

const App = ()=>{
  return (
    <div className="App">
      <BaseUIWrapper>
          <Router>
            <Switch>
              <Route exact={true} path='/' component={LandingPage}/>
              <Route path='/posts' component={Posts}/>
            </Switch>
          </Router>
      </BaseUIWrapper>
    </div>
  );
}

export default App;
