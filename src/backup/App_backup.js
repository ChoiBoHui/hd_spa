import { useState } from 'react';
import styles from './App.module_backup.scss';

function App() {
  const [on, setOn] = useState(false);
  console.log(styles)
  return (
    <div className={`${styles.App} ${on ? styles.on : null}`}>
      <strong className='inner' onClick={() => {
        setOn(!on)
      }}>sass</strong>
    </div>
  );
}

export default App;
