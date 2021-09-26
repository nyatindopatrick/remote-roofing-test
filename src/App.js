import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className=''>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
