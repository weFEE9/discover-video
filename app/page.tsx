import styles from './page.module.css';

import NavBar from '@/components/navbar/navbar';
import Banner from '@/components/banner/banner';
import SectionCards from '@/components/section-cards/section-cards';
import { getYoutubeVideos } from '@/lib/videos';

export default async function Home() {
  const disneyVideos = await getYoutubeVideos('common', 'disney trailer');

  const travelVideos = await getYoutubeVideos('common', 'travel');

  const productivityVideos = await getYoutubeVideos('common', 'productivity');

  const popularVideos = await getYoutubeVideos('popular');

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <NavBar />

        <Banner
          title={'Clifford the red dog'}
          subTitle={'a very cute dog'}
          imgUrl={'/static/clifford.webp'}
        />

        <div className={styles.sectionWrapper}>
          <SectionCards title='Disney' videos={disneyVideos} size='large' />
          <SectionCards title='Travel' videos={travelVideos} size='small' />
          <SectionCards
            title='Productivity'
            videos={productivityVideos}
            size='medium'
          />
          <SectionCards title='Popular' videos={popularVideos} size='small' />
        </div>
      </main>
    </div>
  );
}
