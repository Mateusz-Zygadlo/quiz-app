export type QuizObjType = {
  question: string;
  answers: {
      type: string;
      options: {
          content: string;
          class: string;
      };
  }[];
}[]