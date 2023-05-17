import Image from 'next/image';
import styles from './page.module.css';

import NavBar from '@/components/navbar/navbar';
import Banner from '@/components/banner/banner';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <NavBar username='weeee9@gmail.com' />

        {/* <NavBar /> */}
        <Banner
          title={'Clifford the red dog'}
          subTitle={'a very cute dog'}
          imgUrl={'/static/clifford.webp'}
        />

        {/* <Card/> */}
      </main>
    </div>
  );
}
