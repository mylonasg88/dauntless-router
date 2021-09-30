import React from 'react';
import { Route, Link } from 'react-router-dom';
import routes  from '../routes/routes';
import DauntlessRouter from '../routes/DauntlessRouter';

import './LeftNavigation.scss';

const LeftNavigation = () => {
  console.log('LeftNavigation');
  console.log(DauntlessRouter.getRouteSlags());
  console.log(DauntlessRouter.slags);
  return (
    <div className="LeftNavigation">
      <h3>Left Navigation</h3>
      <ul>
        {DauntlessRouter.getRouteSlags().map(route => <li key={route.slag}>
          <Link to={route.route}>slag: {route.slag}</Link></li>)}
        <Link to={DauntlessRouter.generate('user_profile', [1])}>
          User 1 Profile
        </Link>
        <br />
        <Link to={DauntlessRouter.generate('user_post', [1, 39])}>
          User 1 Post 39
        </Link>
        <br />
        {DauntlessRouter.generate('user_profile', [1])}
        <br />
        {DauntlessRouter.generate('user_post', [1, 56])}
      </ul>
    </div>
  );
};

export default LeftNavigation;
