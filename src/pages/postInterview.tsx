import { useEffect, useContext, useState } from "react";
import { interviewContext } from "../interviewContext";
import { OpenAIApi } from "openai";
import axios from "axios";


const PostInterview = () => {
    const {  questions,  answers } = useContext(interviewContext);
    const [feedback, setFeedback] = useState([] as any[]);
    const openAIKey = "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";
    const client = axios.create({
        headers: {
            "Authorization": `Bearer ${openAIKey}`, 
            "Content-Type": "application/json",
        }
    });

    const fetchAnalysis = async (i:number) => {
        const url = "https://api.openai.com/v1/completions";
        const prompt1 = `I want you to act as a harsh interviewer for the role of Junior Front end react developer. I will give you a question and my answer to the question and I want you to respond with a number grade 0-100 for my answer as well as feedback on my answer. My goal is to improve my interview skills so do not be afraid to be harsh in the grading and feedback and include specific advice on what is wrong with my answer and how i could improve it. If my answer is bad or does not answer the question let me know that and give an example of a good answer. Question: ${questions[i]}. Answer: ${answers[i]}. Please provide your feedback first and the number grade as the last two characters of your response. example: "feedback xyz 55"`
       const params = {
            prompt: `Question ${questions[i]}. Answer ${answers[i]}. Analyze my answer and provide feedback on how i can improve it. My goal is to improve my answer to interview questions so be harsh in your analysis. If my answer is bad let me know that and give advice on how i can improve it in the future. Grade my answer as "good" or "bad". Return your response in JSON format. example: {"grade": "good", "feedback": "xyz"}.`,
            model: "text-davinci-003",
            max_tokens: 1250,
            temperature: .5
        }
        
        const response =  await client.post(url, params)
        const jsonResponse = JSON.parse(response.data.choices[0].text);
        setFeedback(prevState => [...prevState, jsonResponse]); 
    }

    useEffect(() => {
        console.log(questions, answers);
        const fetchAll = async () => {
            for (let i = 0; i < answers.length; i++) {
                await fetchAnalysis(i);
            }
        }
        fetchAll();
    }, []);

    useEffect(() => {
        console.log(feedback);
        
    }, [feedback])
    

    return(
        <div>
            {feedback.map((card) => {
                return(
                    <div>
                        <div>{card.grade}</div>
                        <div>{card.feedback}</div>
                    </div>
                )
            })}

        </div>
    )
};

export {PostInterview};