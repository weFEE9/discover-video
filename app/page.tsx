import Image from 'next/image';
import styles from './page.module.css';

import Banner from '@/components/banner/banner';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Netflix</h1>

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
