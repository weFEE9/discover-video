'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './navbar.module.css';

import { magicAuth } from '@/lib/magic-client';

type props = {};

const NavBar = ({}: props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState('');

  const handleOnClickDropdown = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleSignOut = async () => {
    try {
      await magicAuth.user.logout();
      setUsername('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUsername = async () => {
      try {
        const { email } = await magicAuth.user.getInfo();

        if (email) {
          setUsername(email);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUsername();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href='/'>
          <div className={styles.logoWrapper}>
            <Image
              src='/static/netflix.svg'
              alt='logo'
              width={111}
              height={30}
            />
          </div>
        </Link>

        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href='/'>Home</Link>
          </li>
          <li className={styles.navItem2}>
            <Link href='/browse/my-list'>My List</Link>
          </li>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button
              className={styles.usernameBtn}
              onClick={handleOnClickDropdown}
            >
              <p className={styles.username}>{username}</p>
              <Image
                src='/static/expand_more.svg'
                alt='expand more'
                width={24}
                height={24}
              />
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link
                    className={styles.linkName}
                    onClick={handleSignOut}
                    href='/login'
                  >
                    Sign out
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
