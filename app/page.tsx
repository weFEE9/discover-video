import styles from './page.module.css';

import NavBar from '@/components/navbar/navbar';
import Banner from '@/components/banner/banner';
import Card from '@/components/card/card';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <NavBar username='weeee9@gmail.com' />

        <Banner
          title={'Clifford the red dog'}
          subTitle={'a very cute dog'}
          imgUrl={'/static/clifford.webp'}
        />

        <Card imgUrl={'/static/clifford.webp'} size={'large'} />
        <Card imgUrl={'/static/clifford.webp'} size={'medium'} />
        <Card imgUrl={'/static/clifford.webp'} size={'small'} />
      </main>
    </div>
  );
}
