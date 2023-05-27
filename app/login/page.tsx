'use client';

import { useRouter } from 'next/navigation';

import { useState } from 'react';

import styles from './page.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [userMsg, setUserMsg] = useState('');

  const router = useRouter();

  const handleOnChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMsg('');
    const email = event.target.value;
    setEmail(email);
  };

  const handleLoginWithEmail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (email) {
      // route to dashboard
      if (email === 'teletubby332@gmail.com') {
        router.push('/');
      }
    } else {
      // show user message
      setUserMsg('Enter a valid email address');
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <h1 className={styles.signinHeader}>Sign In</h1>

      <input
        className={styles.emailInput}
        type='email'
        placeholder='Email address'
        onChange={handleOnChangeEmail}
        required
      />

      <p className={styles.userMsg}>{userMsg}</p>

      <button
        className={styles.loginBtn}
        type='submit'
        onClick={handleLoginWithEmail}
      >
        Sign In
      </button>
    </div>
  );
};

export default Login;
