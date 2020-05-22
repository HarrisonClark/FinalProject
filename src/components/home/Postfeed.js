import React, { useState } from 'react';
import SinglePost from './SinglePost';

const Postfeed = () => {
  const [posts, setPosts] = useState(['hi', 'bye']);

  const getPosts = () => {
    fetch(`/api/posts/`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPosts(res);
      });
  };

  if (!posts) {
    return <div>Loading...</div>;
  }

  const renderedList = posts.map((post) => {
    return (
      <ul style={{ listStyleType: 'none' }}>
        <li>
          <SinglePost key={post.id} post={post} />
        </li>
      </ul>
    );
  });

  return (
    <div>
      {getPosts}
      {renderedList}
    </div>
  );
};

export default Postfeed;
