import React, { useState, useEffect } from 'react';
import SinglePost from './SinglePost';
import firebase from '../../firebase';

const db = firebase.firestore();

const Postfeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([]);

    db.collection('posts')
      .get()
      .then((snapshot) => {
        snapshot.forEach((post) => {
          let run = async () => {
            let id = post.id;
            post = post.data();
            console.log(post);
            let username = await db
              .collection('users')
              .doc(post.author)
              .get()
              .then((snapshot) => {
                return snapshot.data().username;
              });
            let newPost = { id: id, username, ...post };
            console.log(newPost);
            setPosts((posts) => [...posts, newPost]);
          };
          run();
        });
      });
  }, []);

  if (!posts) {
    return <div>Loading...</div>;
  }

  const renderedList = posts.map((post) => {
    return (
      <li key={post.id}>
        <SinglePost
          key={post.id}
          username={post.username}
          text={post.caption}
          image={post.image}
        />
      </li>
    );
  });

  return (
    <div>
      {' '}
      <ul style={{ listStyleType: 'none' }}>{renderedList} </ul>
    </div>
  );
};

export default Postfeed;
