import React, { useState, useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Introduction from 'components/Introduction';
import Questions from 'components/Questions';
import Results from 'components/Results';

import questions from 'data/questions';

const totalNumberOfQuestions = questions.length;

const useStyles = makeStyles(() => ({
  mainContainer: {
    flexGrow: 1,
    marginBottom: '60px',
    marginTop: '100px',
  },
}));

function AppMain() {
  const classes = useStyles();
  const [stage, setStage] = useState('intro');
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const answers = useRef({});

  const startQuestionnaire = () => {
    setStage('questions');
  };

  const saveAnswer = (questionNumber, answer) => {
    answers.current[String(questionNumber)] = answer;
    if (questionNumber + 1 < totalNumberOfQuestions) {
      setCurrentQuestionNumber(currentQuestionNumber + 1);
    } else {
      setStage('results');
    }
  };

  const goBackOneQuestion = () => {
    if (currentQuestionNumber) {
      setCurrentQuestionNumber(currentQuestionNumber -1);
    } else {
      setStage('intro');
    }
  };

  return (
    <Container maxWidth="sm" component="main" className={classes.mainContainer}>
      {(stage === 'intro') &&
        <Introduction startHandler={startQuestionnaire} />
      }
      {(stage === 'questions') &&
        <Questions
          saveAnswer={saveAnswer}
          currentQuestion={currentQuestionNumber}
          goBack={goBackOneQuestion}
        />
      }
      {(stage === 'results') &&
        <Results answers={answers.current} />
      }
    </Container>
  );
}

export default AppMain;
