// Libs
import { FC } from 'react';
// Styles
import styles from './index.module.scss';

const Loader: FC = () => (
  <div className={styles.loader}>
    <p className={styles.loader__text}>Loading...</p>
  </div>
);

export default Loader;
