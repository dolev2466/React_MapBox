import Header from './Header';
import './css/navbar.css';

const Navbar = () => (
  <div className='header'>
    <label className='h1'>Globus Gen B</label>
    <div className='header-right'>
      <a className='active' href='#home'>
        Home
      </a>
      <a href='#contact'>Contact</a>
      <a href='#about'>About</a>
    </div>
    <Header name='Dolev' />
  </div>
);

export default Navbar;
