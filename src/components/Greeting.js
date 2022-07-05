import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomGreeting } from '../app/greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);
  useEffect(() => {
    dispatch(getRandomGreeting({ language: 'PYTHON', codeSnippet: 'Hello' }));
  }, []);

  const { language, codeSnippet } = greeting;

  return (
    <div className="box">
      <h1 className="text">{language}</h1>
      <p className="text">{codeSnippet}</p>
    </div>
  );
};

export default Greeting;
