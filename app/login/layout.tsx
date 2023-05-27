import Image from 'next/image';
import Link from 'next/link';

import { Metadata } from 'next';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Netflix SignIn',
  description: 'Login',
};

export default function LoginTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link className={styles.logoLink} href='/'>
            <div className={styles.logoWrapper}>
              <Image
                src='/static/netflix.svg'
                alt='Netflix logo'
                width={128}
                height={34}
              />
            </div>
          </Link>
        </div>
      </header>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
