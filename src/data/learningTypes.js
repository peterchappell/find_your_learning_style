export default {
  activist: {
    title: "Activist",
    description: "Activists are people who learn by doing. They like to involve themselves\n" +
      "in new experiences, and will \"try anything once\". They tend to act first and\n" +
      "consider the consequences afterwards. ",
    learnBestWhen: [
      "involved in new experiences, problems and opportunities",
      "thrown in at the deep end",
      "working with others in problem solving, games, role-playing exercises",
      "able to lead a group.",
    ],
    learnLeastWhen: [
      "listening to lectures or reading long explanations",
      "reading, writing and thinking on their own",
      "analysing and interpreting lots of data",
      "following precise instructions",
    ],
    questionIndexes: [1, 3, 5, 9, 16, 22, 23, 31, 33, 37, 39, 42, 44, 47, 57, 63, 70, 71, 73, 78],
    scoreCategories: [
      {
        name: 'Very Low',
        minScore: 0,
        maxScore: 3,
      },
      {
        name: 'Low',
        minScore: 4,
        maxScore: 6,
      },
      {
        name: 'Moderate',
        minScore: 7,
        maxScore: 10,
      },
      {
        name: 'Strong',
        minScore: 11,
        maxScore: 12,
      },
      {
        name: 'Very Strong',
        minScore: 13,
        maxScore: 20,
      }
    ],
  },
  reflector: {
    title: "Reflector",
    description: "Reflectors learn by observing and thinking about what happened. They like\n" +
      "to consider all the possible angles and implications before coming to a\n" +
      "considered opinion. They spend time listening and observing, and tend to\n" +
      "be cautious and thoughtful. ",
    learnBestWhen: [
      "able to stand back and observe first",
      "given time to think and investigate before commenting or acting",
      "given an opportunity to review what has happened",
      "doing tasks without tight deadlines",
    ],
    learnLeastWhen: [
      "forced to take a lead in a group",
      "doing things without preparation",
      "rushed by deadlines"
    ],
    questionIndexes: [6, 12, 14, 15, 24, 27, 28, 30, 32, 35, 38, 40, 45, 51, 54, 59, 61, 65, 66, 75],
    scoreCategories: [
      {
        name: 'Very Low',
        minScore: 0,
        maxScore: 8,
      },
      {
        name: 'Low',
        minScore: 9,
        maxScore: 11,
      },
      {
        name: 'Moderate',
        minScore: 12,
        maxScore: 14,
      },
      {
        name: 'Strong',
        minScore: 15,
        maxScore: 17,
      },
      {
        name: 'Very Strong',
        minScore: 18,
        maxScore: 20,
      }
    ],
  },
  theorist: {
    title: "Theorist",
    description: "Theorists like to understand the theory behind the actions. They need\n" +
      "models, concepts and facts in order to learn. They like to analyse and\n" +
      "synthesise, and feel uncomfortable with subjective judgements.",
    learnBestWhen: [
      "an activity is backed up by ideas and concepts that form a model, system\n" +
      "or theory",
      "in a structured situation with a clear purpose",
      "they have the chance to question and probe",
      "required to understand a complex situation"
    ],
    learnLeastWhen: [
      "in situations that emphasise emotions and feelings",
      "when activities are unstructured or ambiguous",
      "when asked to act without knowing the principles or concepts involved",
    ],
    questionIndexes: [0, 2, 7, 11, 13, 17, 19, 21, 25, 29, 41, 46, 50, 56, 60, 62, 67, 74, 76, 77],
    scoreCategories: [
      {
        name: 'Very Low',
        minScore: 0,
        maxScore: 7,
      },
      {
        name: 'Low',
        minScore: 8,
        maxScore: 10,
      },
      {
        name: 'Moderate',
        minScore: 11,
        maxScore: 13,
      },
      {
        name: 'Strong',
        minScore: 14,
        maxScore: 15,
      },
      {
        name: 'Very Strong',
        minScore: 16,
        maxScore: 20,
      }
    ],
  },
  pragmatist: {
    title: "Pragmatist",
    description: "Pragmatists are keen on trying things out. They look for new ideas that can\n" +
      "be applied to the problem in hand. They like to get on with things and tend \n" +
      "to be impatient with open-ended discussions; they are practical, down-toearth people.",
    learnBestWhen: [
      "there is an obvious link between the topic and a current need",
      "they are shown techniques with clear practical advantages",
      "they can try things out with feedback from an expert",
      "they can copy an example, or emulate a role model",
    ],
    learnLeastWhen: [
      "there is no immediate practical benefit",
      "there are no clear guidelines on how to do it",
      "it appears to be \"all theory\"",
    ],
    questionIndexes: [4, 8, 10, 18, 20, 26, 34, 36, 43, 48, 49, 52, 53, 55, 58, 64, 68, 69, 72, 79],
    scoreCategories: [
      {
        name: 'Very Low',
        minScore: 0,
        maxScore: 8,
      },
      {
        name: 'Low',
        minScore: 9,
        maxScore: 11,
      },
      {
        name: 'Moderate',
        minScore: 12,
        maxScore: 14,
      },
      {
        name: 'Strong',
        minScore: 15,
        maxScore: 16,
      },
      {
        name: 'Very Strong',
        minScore: 17,
        maxScore: 20,
      }
    ],
  },
}