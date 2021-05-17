import BaseUIWrapper from './BaseUIWrapper'
import Home from './pages/Home'
const App = ()=>{
  return (
    <div className="App">
        <BaseUIWrapper>
            <Home />
        </BaseUIWrapper>
    </div>
  );
}

export default App;
