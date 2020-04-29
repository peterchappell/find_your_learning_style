// @flow

export type Question = string;

export type Questions = Array<Question>;

export type Answer = {
  [number]: boolean,
}

export type Answers = Array<Answer>;

export type ScoreCategory = {
  name: string,
  minScore: number,
  maxScore: number,
};

export type LearningType = {
  title: string,
  description: string,
  learnBestWhen: Array<string>,
  learnLeastWhen: Array<string>,
  questionIndexes: Array<number>,
  scoreCategories: Array<ScoreCategory>,
};

export type LearningTypes = {
  [string]: LearningType,
};

export type Score = {
  learningTypeKey: string,
  responses: {
    [number]: boolean,
  },
  score: number,
  scoreCategory: ScoreCategory,
};
