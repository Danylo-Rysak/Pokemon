import styles from './index.module.scss';
import { FC } from 'react';

const Loader: FC = () => (
  <div className={styles.loader}>
    <p className={styles.loader__text}>Loading...</p>
  </div>
);

export default Loader;
