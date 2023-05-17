'use client';

import Image from 'next/image';

import Link from 'next/link';

import styles from './navbar.module.css';
import { useState } from 'react';

type props = {
  username: string;
};

const NavBar = ({ username }: props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOnClickDropdown = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setShowDropdown(!showDropdown);
  };

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
                  <Link className={styles.linkName} href='/login'>
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
