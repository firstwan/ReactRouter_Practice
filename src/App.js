import './App.css';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import NavBar from './components/Nav';
import ProductDetail from './components/ProductDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar />

    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About}/> 
    <Route path="/shop" exact component={Shop}/> 
    <Route path="/shop/:id" component={ProductDetail}/>
    </Switch>

    </div>
    </Router>
  );
}

export default App;
