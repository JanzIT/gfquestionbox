import React, { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';
import QuestionBox from './QuestionBox';
import FinalEffect from './FinalEffect';

const Content = () => {
  const { isFinal } = useContext(QuestionContext);
  return isFinal ? <FinalEffect /> : <QuestionBox />;
};

export default Content;
