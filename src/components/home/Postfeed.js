import React, { useState, useEffect } from 'react';
import SinglePost from './SinglePost';

const Postfeed = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (posts) {
      setPosts(
        posts.map((post) => {
          fetch('/api/user/' + post.userId)
            .then((res) => res.json())
            .then((res) => {
              post.username = res.userName;
            });
        })
      );
    }
  }, [posts]);

  useEffect(() => {
    fetch(`/api/posts/`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPosts(res);
      });
  }, []);

  if (!posts) {
    return <div>Loading...</div>;
  }

  const renderedList = posts.map((post) => {
    if (!post) {
      return <div></div>;
    }
    console.log(post);
    return (
      <ul style={{ listStyleType: 'none' }}>
        <li>
          <SinglePost
            key={post.id}
            username={post.username}
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
