import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
        <div className='logo-container'>
            <Link to='/'>
                <b>M</b>
            </Link>
        </div>
        <div className='space-container'>
            
        </div>
        <div className='dir-container'>
            <Link to='/'>
                <div className='padd'>Home</div>
            </Link>
            <Link to='/about'>
                <div className='padd'>About</div>
            </Link>
            <Link to='/sponsors'>
                <div className='padd'>Sponsors</div>
            </Link>
            <Link to='apply'>
                <div className='padd apply-container'>Apply</div>
            </Link>
        </div>
    </div>
  );
}

export default Nav;