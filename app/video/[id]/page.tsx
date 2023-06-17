'use client';

import { useRouter } from 'next/navigation';

import ReactModal from 'react-modal';

import clsx from 'classnames';

import styles from './page.module.css';

// FIXME: don't know why this is doesn't work
// ReactModal.setAppElement('#video-page');

type props = {
  params: params;
};

type params = {
  id: string;
};

async function getVideo(id: string) {
  
}

const Video = ({ params }: props) => {
  const router = useRouter();

  const video = {
    title: 'Hi cute dog',
    publishTime: '1990-01-01',
    description: 'A big red dog that is super cute, can he get any bigger?',
    channelTitle: 'Paramount Pictures',
    viewCount: 10000,
  };

  const { title, publishTime, description, channelTitle, viewCount } = video;

  return (
    <div className={styles.container}>
      <ReactModal
        isOpen
        contentLabel='Watch the video'
        onRequestClose={() => router.back()}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <iframe
          className={styles.videoPlayer}
          title='YouTube video player'
          id='ytplayer'
          name='ytplayer'
          width='100%'
          height='360'
          src={`https://www.youtube.com/embed/${params.id}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
        ></iframe>

        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{publishTime}</p>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.col2}>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>Cast: </span>
                <span className={styles.channelTitle}>{channelTitle}</span>
              </p>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>View Count: </span>
                <span className={styles.channelTitle}>{viewCount}</span>
              </p>
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default Video;
