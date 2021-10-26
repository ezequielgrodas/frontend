import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';


import HomePage from './pages/HomePage';
import NovedadesPage from './pages/NovedadesPage';
import EventosPage from './pages/EventosPage';
import ContactoPage from './pages/ContactoPage';



function App() {
  return (
    <Router>
      <Header/>
        <Nav/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/novedades" exact component={NovedadesPage}/>
          <Route path="/eventos" exact component={EventosPage}/>
          <Route path="/contacto" exact component={ContactoPage}/>
        </Switch>
      <Footer/>
    </Router>
  )
}

export default App;
