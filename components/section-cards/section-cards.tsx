import Link from 'next/link';

import Card from '../card/card';

import { Video } from '@/lib/videos';

import styles from './section-cards.module.css';

type props = {
  title: string;
  videos: Video[];
  size: 'large' | 'medium' | 'small';
};

const SectionCards = ({ title, videos, size }: props) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          return (
            <Link key={video.id} href={`/video/${video.id}`}>
              <Card id={idx} imgUrl={video.imgUrl} size={size} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SectionCards;
