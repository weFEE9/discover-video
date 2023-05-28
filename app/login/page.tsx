'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import styles from './page.module.css';

import { magicAuth } from '@/lib/magic-client';

const Login = () => {
  const [email, setEmail] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleOnChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMsg('');
    const email = event.target.value;
    setEmail(email);
  };

  const handleLoginWithEmail = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setIsLoading(true);

    if (email) {
      try {
        const didToken = magicAuth.auth.loginWithEmailOTP({ email });

        router.push('/');
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    } else {
      setUserMsg('Please enter a valid email address');

      setIsLoading(false);
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
        {isLoading ? 'Loading...' : 'Sign In'}
      </button>
    </div>
  );
};

export default Login;
