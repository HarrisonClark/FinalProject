import React, { useState, useEffect } from 'react';
import SinglePost from './SinglePost';

const Postfeed = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    // fetch(`/api/posts/`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //     setPosts(res);
    //   });
    fetch('/api/posts/')
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

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

  return <div>{renderedList}</div>;
};

export default Postfeed;
