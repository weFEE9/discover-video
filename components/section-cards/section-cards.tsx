import Card from '../card/card';

import styles from './section-cards.module.css';

type props = {
  title: string;
  videos: string[];
  size: 'large' | 'medium' | 'small';
};

const SectionCards = ({ title, videos, size }: props) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((imgUrl, idx) => {
          return <Card key={idx} id={idx} imgUrl={imgUrl} size={size} />;
        })}
      </div>
    </section>
  );
};

export default SectionCards;
