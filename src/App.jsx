import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Footer from './compnents/Footer';
import Nav from './compnents/Nav';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' Component={Home} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
