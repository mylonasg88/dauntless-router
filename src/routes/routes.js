import React from 'react';
import User from '../containers/User';
import UserPosts from '../containers/UserPosts';
import Users from '../containers/Users';
import Posts from '../containers/Posts';
import Post from '../containers/Post';

export const routes = [
  {
    path: '/users',
    text: 'Users',
    slag: 'users',
    config: {},
    component: Users,
    routes: [
      {
        path: '/:id',
        text: 'User',
        slag: 'user_profile',
        config: {},
        component: User,
        routes: [
          {
            path: '/posts',
            slag: 'user_posts',
            config: {},
            component: UserPosts,
          },
          {
            path: '/posts/:id',
            slag: 'user_post',
            config: {},
            component: Post,
          },
        ],
      },
    ],
  },
  {
    path: '/posts',
    text: 'Posts',
    slag: 'posts',
    config: {},
    component: Posts,
  },
];

export default routes;
