import './Home.css';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div className='home-container'>
        <div className='padd title-container'>
            <b>MHacks 17</b>
        </div>
        <div className='padd subtitle-container'>
            Explore. Build. Innovate.
        </div>
        <div className='padd button-container'>
            <Link to='/about'>
                <div className='apply-button'>
                    Explore
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;