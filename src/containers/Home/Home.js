import React from 'react';
import routes from '../../routes/routes';
import DauntlessRouter from '../../routes/DauntlessRouter';

import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Home'>
      Home {DauntlessRouter.getNumber()}
      <div>
        <h4>All available routes:</h4>
        <ul>
          {Object.values(DauntlessRouter.slags).map(route => <li key={route.slag}>slag: {route.slag}. route: {route.route}</li>)}
        </ul>
        <Link to={DauntlessRouter.generate('superman')}>
          All Posts
        </Link>
      </div>
    </div>
  );
};

export default Home;
