'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import classNames from 'classnames';

import styles from './card.module.css';

type props = {
  imgUrl: string;
  size?: 'large' | 'medium' | 'small';
};

const Card = ({ imgUrl, size = 'medium' }: props) => {
  const sizeClassMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  return (
    <div className={styles.container}>
      Card component
      <motion.div
        className={classNames(styles.imgMotionWrapper, sizeClassMap[size])}
        whileHover={{ scale: 1.2 }}
      >
        <Image
          className={styles.cardImg}
          src={imgUrl}
          alt='picture of the author'
          fill
        />
      </motion.div>
    </div>
  );
};

export default Card;
