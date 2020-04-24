import React from 'react';

type Props = {
  answers: Object,
};

const Results = (props: Props) => {
  const {
    answers,
  } = props;

  return (
    <>
      <p>Now we will show the results!</p>
      <code>
        ${answers.toString()}
      </code>
    </>
  );
}

export default Results;
