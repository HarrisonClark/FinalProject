import React, { useState, useEffect } from 'react';
import SinglePost from './SinglePost';
import Loader from '../../Loader';

const Postfeed = () => {
  const [posts, setPosts] = useState(null);

  // useEffect(() => {
  //   if (posts) {
  //     setPosts(posts.map(post => {
  //       fetch('/api/user/' + post.userId)
  //       .then(res => res.json())
  //       .then(res => {{...post, res.userName}}
  //         )

  //     }))
  //   }
  // }, []);

  useEffect(() => {
    fetch(`/api/posts/`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPosts(res);
      });
  }, []);

  if (!posts) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const renderedList = posts.map((post) => {
    return (
      <ul style={{ listStyleType: 'none' }}>
        <li>
          <SinglePost
            key={post.id}
            username={post.userId}
            text={post.caption}
            image={post.image}
          />
        </li>
      </ul>
    );
  });

  return <div>{renderedList}</div>;
};

export default Postfeed;
