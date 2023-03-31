import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Footer from './compnents/Footer';
import Nav from './compnents/Nav';
import Home from './pages/Home';
import Products from './pages/Prodcuts';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/products' Component={Products} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
