import React, { useState, useEffect } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post/Post';
import db from '../../../firebase/config';
import firebase from 'firebase';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot: any) =>
        setPosts(
          snapshot.docs.map((doc: any) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [input]);

  const sendPost = (e: any) => {
    e.preventDefault();
    db.collection('posts').add({
      name: 'Sakil Khan',
      description: 'test description',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption
            Icon={SubscriptionsIcon}
            title="Video"
            color="#7E7A33E"
          />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
