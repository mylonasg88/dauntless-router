import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
  const history = useHistory();
  const route = history.location;
  console.log(route);

  return (
    <>
      <h3>Post</h3>
      <h4>{route.pathname}</h4>
    </>
  );
};

export default Post;
