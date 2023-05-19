import {Box} from '@mui/material';
import Stack from "@mui/material/Stack";
import { useContext, useEffect, useState } from "react";
import { interviewContext } from "../interviewContext";
import { reactQuestions, angularQuestions, behavioralQuestions } from "../data/interviewQuestions";
import { Button, TextField } from "@mui/material";
import { Formik, Form, FormikHelpers, useFormik } from "formik";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";


interface Values {
    answer: string;
}

const validationSchema = yup.object({
    answer: yup.string().max(1000, "answer should be 100 characters max").required("Answer is Required")
});


const Interview = () => {
    const { interviewLevel, interviewJob, questions, setQuestions, setAnswers, answers} = useContext(interviewContext);
    const [questionNumber, setQuestionNumber] = useState(0 as number);
    const navigate = useNavigate();
    const synthesis = window.speechSynthesis;
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition, isMicrophoneAvailable } = useSpeechRecognition();

    useEffect(() => {
        const utterance = new SpeechSynthesisUtterance(questions[questionNumber]);
        const voice = synthesis.getVoices().filter(function (voice) {
            return voice.lang === 'en';
          })[0];
        utterance.voice = voice;
        utterance.pitch = 1.5;
        utterance.rate = 1.25;
        utterance.volume = 0.8;
        synthesis.speak(utterance);
        resetTranscript();
    }, [questionNumber]);

    useEffect(() => {
        const utterance = new SpeechSynthesisUtterance(questions[0]);
        const voice = synthesis.getVoices().filter(function (voice) {
            return voice.lang === 'en';
          })[0];
        utterance.voice = voice;
        utterance.pitch = 1.5;
        utterance.rate = 1;
        utterance.volume = 0.8;
        synthesis.speak(utterance);        
    }, [questions]);

    const formik = useFormik({
        initialValues: {
            answer: transcript,
        },
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: (values: Values) => {
            console.log(values.answer);
            const newAnswers = [...answers, values.answer]
            setAnswers(newAnswers);
            setQuestionNumber(prevState => prevState + 1);
            formik.resetForm();
        },
    });

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

    useEffect(() => {
        if (questionNumber > 4) {
            navigate("/interviewAnalysis");
        }
    }, [questionNumber]);
    
    return(
        <Stack>
            <Stack>
                <Box>{interviewLevel} {interviewJob} Interview</Box>
                <Box>Question {questionNumber + 1} / 5</Box>
            </Stack>
            <Box>
               { questions[1] && questionNumber === 0 ? <TypewriterComponent onInit={(typewriter) => {typewriter.changeDelay(40).typeString(questions[questionNumber]).start()}}/> : null }
               { questions[1] && questionNumber === 1 ? <TypewriterComponent onInit={(typewriter) => {typewriter.changeDelay(40).typeString(questions[questionNumber]).start()}}/> : null } 
               { questions[1] && questionNumber === 2 ? <TypewriterComponent onInit={(typewriter) => {typewriter.changeDelay(40).typeString(questions[questionNumber]).start()}}/> : null } 
               { questions[1] && questionNumber === 3 ? <TypewriterComponent onInit={(typewriter) => {typewriter.changeDelay(40).typeString(questions[questionNumber]).start()}}/> : null } 
               { questions[1] && questionNumber === 4 ? <TypewriterComponent onInit={(typewriter) => {typewriter.changeDelay(40).typeString(questions[questionNumber]).start()}}/> : null } 
 
            </Box>
            <form onSubmit={formik.handleSubmit}>
            <TextField id="answer" name="answer" label="answer" value={formik.values.answer} onChange={formik.handleChange} error={formik.touched.answer && Boolean(formik.errors.answer)} helperText={formik.touched.answer && formik.errors.answer}></TextField>
            <Stack>
                <Button 
                onTouchStart={() => {SpeechRecognition.startListening({ continuous: true })}} 
                onMouseDown={() => {SpeechRecognition.startListening({ continuous: true })}} 
                onTouchEnd={() => {SpeechRecognition.stopListening()}}
                onMouseUp={() => {SpeechRecognition.stopListening()}}
                >Microphone {listening ? "on" : "off"} {isMicrophoneAvailable ? "allowed" : "not allowed"}</Button>
                <Box onClick={() => {resetTranscript()}}>Reset</Box>
                <Button type="submit"> Next Question / Finish Interview </Button>
            </Stack>
            </form>
        </Stack>
    )
};

export {Interview};