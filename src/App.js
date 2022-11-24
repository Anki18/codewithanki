import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom'
import { Navbar, Home, About, Contact, FiltersAspMvc, AddArticle } from './Components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/filtersaspvc"><FiltersAspMvc /></Route>
        <Route path="/addarticle"><AddArticle /></Route>
        <div className='footer'>
          <span className="blue-text lighten-3 right">
            <i className="material-icons left">copyright</i>Copyright 2022 Ankit Vaidya</span>
        </div>
      </div>

    </div>
  );
}

export default App;
