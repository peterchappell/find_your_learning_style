export default {
  activist: {
    title: "Activist",
    description: "Activists involve themselves fully and without bias in new experiences. They enjoy the here and now and are happy to be dominated by immediate experiences. They are open-minded, not sceptical, and this tends to make them enthusiastic about anything new. Their philosophy is: \"I'll try anything once\". They tend to act first and consider the consequences afterwards. Their days are filled with activity. They tackle problems by brainstorming. As soon as the excitement from one activity has died down they are busy looking for the next. They tend to thrive on the challenge of new experiences but are bored with implementation and longer-term consolidation. They are gregarious people constantly involving themselves with others but in doing so; they seek to centre all activities on themselves.",
    questionIndexes: [1, 3, 5, 9, 16, 22, 23, 31, 33, 37, 39, 42, 44, 47, 57, 63, 70, 71, 73, 78],
    getPreferenceFromScore: (score) => {
      if (score > 12) {
        return 'Very Strong';
      }
      if (score > 10) {
        return 'Strong';
      }
      if (score > 6) {
        return 'Moderate';
      }
      if (score > 3) {
        return 'Low';
      }
      return 'Very Low';
    }
  },
  reflector: {
    title: "Reflector",
    description: "Reflectors like to stand back to ponder experiences and observe them from many different perspectives. They collect data, both first hand and from others, and prefer to think about it thoroughly before coming to any conclusion. The thorough collection and analysis of data about experiences and events is what counts so they tend to postpone reaching definitive conclusions for as long as possible. Their philosophy is to be cautious. They are thoughtful people who like to consider all possible angles and implications before making a move. They prefer to take a back seat in meetings and discussions. They enjoy observing other people in action. They listen to others and get the drift of the discussion before making their own points. They tend to adopt a low profile and have a slightly distant, tolerant unruffled air about them. When they act it is part of a wide picture which includes the past as well as the present and others' observations as well as their own.",
    questionIndexes: [6, 12, 14, 15, 24, 27, 28, 30, 32, 35, 38, 40, 45, 51, 54, 59, 61, 65, 66, 75],
    getPreferenceFromScore: (score) => {
      if (score > 17) {
        return 'Very Strong';
      }
      if (score > 14) {
        return 'Strong';
      }
      if (score > 11) {
        return 'Moderate';
      }
      if (score > 8) {
        return 'Low';
      }
      return 'Very Low';
    }
  },
  theorist: {
    title: "Theorist",
    description: "Theorists adapt and integrate observations into complex but logically sound theories. They think problems through in a vertical, step-by-step logical way. They assimilate disparate facts into coherent theories. They tend to be perfectionists who won't rest easy until things are tidy and fit into a rational scheme. They like to analyse and synthesise. They are keen on basic assumptions, principles, theories models and systems thinking. Their philosophy prizes rationality and logic.  \"If it's logical it's good\". Questions they frequently ask are: \"Does it make sense?\" \"How does this fit with that?\" \"What are the basic assumptions?\" They tend to be detached, analytical and dedicated to rational objectivity rather than anything subjective or ambiguous. Their approach to problems is consistently logical. This is their \"mental set\" and they rigidly reject anything that doesn't fit with it. They prefer to maximise certainty and feel uncomfortable with subjective judgments, lateral thinking and anything flippant.",
    questionIndexes: [0, 2, 7, 11, 13, 17, 19, 21, 25, 29, 41, 46, 50, 56, 60, 62, 67, 74, 76, 77],
    getPreferenceFromScore: (score) => {
      if (score > 15) {
        return 'Very Strong';
      }
      if (score > 13) {
        return 'Strong';
      }
      if (score > 10) {
        return 'Moderate';
      }
      if (score > 7) {
        return 'Low';
      }
      return 'Very Low';
    }
  },
  pragmatist: {
    title: "Pragmatist",
    description: "Pragmatists are keen on trying out ideas, theories and techniques to see if they work in practice. They positively search out new ideas and take the first opportunity to experiment with applications. They are the sorts of people who return from management courses brimming with new ideas that they want to try out in practice. They like to get on with things and act quickly and confidently on ideas that attract them. They tend to be impatient with ruminating and open-ended discussions. They are essentially practical, down to earth\tpile who like making practical decisions and solving problems. They respond to problems and opportunities \"as a challenge\". Their philosophy is: \"There is always a better way\" and \"if it works it's good\".",
    questionIndexes: [4, 8, 10, 18, 20, 26, 34, 36, 43, 48, 49, 52, 53, 55, 58, 64, 68, 69, 72, 79],
    getPreferenceFromScore: (score) => {
      if (score > 16) {
        return 'Very Strong';
      }
      if (score > 14) {
        return 'Strong';
      }
      if (score > 11) {
        return 'Moderate';
      }
      if (score > 8) {
        return 'Low';
      }
      return 'Very Low';
    }
  },
}