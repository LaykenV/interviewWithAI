import { createContext, useEffect, useState, SetStateAction, Dispatch } from "react";

export interface IInterviewContext {
    interviewJob: string;
    setInterviewJob: Dispatch<SetStateAction<string>>,
    interviewLevel: string,
    setInterviewLevel: Dispatch<SetStateAction<string>>,
    questions: string[],
    setQuestions: Dispatch<SetStateAction<any>>,
    answers: string[],
    setAnswers: Dispatch<SetStateAction<any>>,
    scores: string[],
    setScores: Dispatch<SetStateAction<any>>,
    feedback: string[],
    setFeedback: Dispatch<SetStateAction<any>>,
}

const interviewContext = createContext<IInterviewContext>({
    interviewJob: "",
    setInterviewJob: () => {},
    interviewLevel: "",
    setInterviewLevel: () => {},
    questions: [],
    setQuestions: () => {},
    answers: [],
    setAnswers: () => {},
    scores: [],
    setScores: () => {},
    feedback: [],
    setFeedback: () => {},
});

export interface Props {
    children: any;
}

const InterviewProvider = (props: Props) => {
    const [interviewJob, setInterviewJob] = useState("");
    const [interviewLevel, setInterviewLevel] = useState("");
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [scores, setScores] = useState([]);
    const [feedback, setFeedback] = useState([]);

    return(
        <interviewContext.Provider value={{ interviewJob, setInterviewJob, interviewLevel, setInterviewLevel, questions, setQuestions, answers, setAnswers, scores, setScores, feedback, setFeedback}}>{props.children}</interviewContext.Provider>
    )
}

export { interviewContext, InterviewProvider };