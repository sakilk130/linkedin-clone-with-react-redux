import React, { useState } from 'react';
import { auth } from '../../firebase/config';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import styled from 'styled-components';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert('please enter full name');
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          ?.updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user?.email,
                uid: userAuth.user?.uid,
                displayName: userAuth.user?.displayName,
                profileUrl: userAuth.user?.photoURL,
              })
            );
          });
      })
      .catch((error) => {
        alert(error?.message);
      });
  };

  const loginToApp = (e: any) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user?.email,
            uid: userAuth.user?.uid,
            displayName: userAuth.user?.displayName,
            profileUrl: userAuth.user?.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <LoginContainer>
      <img src="/images/linkedin-logo.png" alt="linkin logo" />
      <form>
        <input
          type="text"
          placeholder="Full name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile picture URL (optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <Register>
        Not a member? <span onClick={register}>Register Now</span>
      </Register>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  padding-bottom: 100px;
  & > img {
    object-fit: contain;
    height: 70px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  & > form {
    display: flex;
    flex-direction: column;
    & > input {
      width: 350px;
      height: 50px;
      font-size: 20px;
      padding-right: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
    }
    & > button {
      width: 356px;
      height: 50px;
      font-size: large;
      color: #ffff;
      background-color: #0074b1;
      border-radius: 5px;
      border: none;
      cursor: pointer;
    }
  }
`;

const Register = styled.p`
  margin-top: 20px;
  & > span {
    color: #0177b7;
    cursor: pointer;
  }
`;

export default Login;
