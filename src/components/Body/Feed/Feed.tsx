import React, { useState, useEffect } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post/Post';
import db from '../../../firebase/config';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import FlipMove from 'react-flip-move';
import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

function Feed() {
  const user = useSelector(selectUser);

  const [loader, setLoader] = useState(true);
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
    setLoader(false);
  }, [input]);

  const sendPost = (e: any) => {
    e.preventDefault();
    db.collection('posts').add({
      name: user?.displayName,
      description: user?.email,
      message: input,
      photoUrl: user?.profileUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <FeedContainer>
      <InputContainer>
        <FeedInput>
          <CreateIcon />
          <form>
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </FeedInput>

        <FeedInputOptions>
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
        </FeedInputOptions>
      </InputContainer>

      {loader && (
        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox="0 0 400 160"
          backgroundColor="#969696"
          foregroundColor="#403f3f"
        >
          <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
          <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
          <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
          <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
          <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
          <circle cx="20" cy="20" r="20" />
        </ContentLoader>
      )}

      <FlipMove>
        {posts.map(
          ({
            id,
            data: { name, description, message, photoUrl, timestamp },
          }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
              timestamp={timestamp}
            />
          )
        )}
      </FlipMove>
    </FeedContainer>
  );
}

const FeedContainer = styled.div`
  flex: 0.6;
  margin: 0 20px;
`;

const InputContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const FeedInput = styled.div`
  border: 1px solid lightgray;
  border-radius: 30px;
  display: flex;
  padding: 10px;
  color: gray;
  padding-left: 15px;
  & > form {
    display: flex;
    width: 100%;
    & > input {
      border: none;
      flex: 1;
      margin-left: 10px;
      outline-width: 0;
      font-weight: 600;
    }
    & > button {
      display: none;
    }
  }
`;

const FeedInputOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default Feed;
