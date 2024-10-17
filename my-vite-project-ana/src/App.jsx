import React from 'react';
import { QuestionProvider } from './contexts/QuestionContext';
import Content from './components/Content';
import styles from './styles/App.module.css';

const App = () => {
  return (
    <QuestionProvider>
      <div className={styles.app}>
        <Content />
      </div>
    </QuestionProvider>
  );
};

export default App;
