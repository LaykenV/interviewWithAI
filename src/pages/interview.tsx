import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useContext, useEffect } from "react";
import { interviewContext } from "../interviewContext";
import { reactQuestions, angularQuestions, behavioralQuestions } from "../data/interviewQuestions";
import { Button } from "@mui/material";


const Interview = () => {
    const { interviewLevel, interviewJob, setQuestions, setAnswers} = useContext(interviewContext);

    useEffect(() => {
        const questions : string[] = [];
        if (interviewJob === "Front End React Developer") {
            const shuffledQuestions = reactQuestions.sort(() => Math.random() - 0.5);
            questions.push(behavioralQuestions[Math.floor(Math.random() * behavioralQuestions.length)]);
            questions.push(shuffledQuestions[0], shuffledQuestions[1], shuffledQuestions[2], shuffledQuestions[3]);
            setQuestions(questions);
            console.log(questions);
            
        }
    }, [interviewJob]);
    
    return(
        <Stack>
            <Box>{interviewLevel} {interviewJob} Interview</Box>
            <Box>Question</Box>
            <Box>Answer</Box>
            <Stack>
                <Box>Microphone</Box>
                <Button>Next Question / Finish Interview </Button>
            </Stack>
        </Stack>
    )
};

export {Interview};