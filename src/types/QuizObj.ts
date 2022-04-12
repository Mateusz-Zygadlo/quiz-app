export type QuizObjType = {
    question: string;
    answers: {
        type: string;
        options: {
            content: string;
        };
        isWinner: boolean;
    }[];
}[];