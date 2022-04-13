export type QuizObjType = {
    question: string;
    answers: {
        type: string;
        options: {
            [key: string]: string;
        };
        isWinner: boolean;
    }[];
}[];