'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import classNames from 'classnames';

import styles from './card.module.css';

type props = {
  id?: number;
  imgUrl: string;
  size?: 'large' | 'medium' | 'small';
};

const Card = ({ id, imgUrl, size = 'medium' }: props) => {
  const sizeClassMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

  return (
    <div className={styles.container}>
      <motion.div
        className={classNames(styles.imgMotionWrapper, sizeClassMap[size])}
        whileHover={scale}
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
