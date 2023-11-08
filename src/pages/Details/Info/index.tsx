// Libs
import { FC } from 'react';
// Styles
import styles from './index.module.scss';

interface InfoProps {
  title: string;
  items: Array<string>;
  scroll?: boolean;
}

const Info: FC<InfoProps> = ({ items, title, scroll }) => {
  return (
    <div className={styles.info}>
      <div style={{ fontWeight: '600' }}>{title}:</div>
      <ul style={scroll ? { maxHeight: 150, overflow: 'scroll' } : {}}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Info;
