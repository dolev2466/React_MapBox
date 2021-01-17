import  React , {Fragment} from 'react';
import Header from './components/Header.js';
import Map from './components/Map.js'
import NavBar from './components/Navbar.js'
import MainHeader from './components/Header.js'

const App = ()=> {
  return (
    <Fragment>
      <NavBar>
        <MainHeader>Dolev</MainHeader>
      </NavBar>
      <Map/>
    </Fragment>
  );
}

export default App