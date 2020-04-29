export default {
  fakeLearningType1: {
    title: 'fake learning type 1',
    description: "Fake description 1",
    learnBestWhen: [
      "fake 1 best 1",
      "fake 1 best 2",
    ],
    learnLeastWhen: [
      "fake 1 least 1",
      "fake 1 least 2",
    ],
    questionIndexes: [0, 1, 2],
    scoreCategories: [
      {
        name: 'Low',
        minScore: 0,
        maxScore: 1,
      },
      {
        name: 'High',
        minScore: 2,
        maxScore: 3,
      },
    ],
  },
  fakeLearningType2: {
    title: 'fake learning type 2',
    description: "Fake description 2",
    learnBestWhen: [
      "fake 2 best 1",
      "fake 2 best 2",
    ],
    learnLeastWhen: [
      "fake 2 least 1",
      "fake 2 least 2",
    ],
    questionIndexes: [3, 4],
    scoreCategories: [
      {
        name: 'Low',
        minScore: 0,
        maxScore: 1,
      },
      {
        name: 'High',
        minScore: 2,
        maxScore: 3,
      },
    ],
  },
};
