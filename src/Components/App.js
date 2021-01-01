import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
        <div className='footer'>
          <span className="blue-text lighten-3 right">
            <i className="material-icons left">copyright</i> Ankit Vaidya</span>
        </div>
      </div>

    </div>
  );
}

export default App;
