import React, { useState } from 'react';
import { auth } from '../../firebase/config';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

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
    <div className="login">
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
      <p>
        Not a member?{' '}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
