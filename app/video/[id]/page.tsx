'use client';

import { useRouter } from 'next/navigation';

import ReactModal from 'react-modal';

import styles from './page.module.css';

// FIXME: don't know why this is doesn't work
// ReactModal.setAppElement('#video-page');

type props = {
  params: params;
};

type params = {
  id: string;
};

const Video = ({ params }: props) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      video page: {params.id}
      <ReactModal
        isOpen
        contentLabel='Watch the video'
        onRequestClose={() => router.back()}
        className={styles.modal}
        overlayClassName={styles.overlay}
      ></ReactModal>
    </div>
  );
};

export default Video;
