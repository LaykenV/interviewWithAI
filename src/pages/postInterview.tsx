import { useEffect, useContext } from "react";
import { interviewContext } from "../interviewContext";



const PostInterview = () => {
    const {  questions,  answers} = useContext(interviewContext);

    useEffect(() => {
        console.log(questions, answers);
        
    }, []);

    return(
        <div>Post Interview</div>
    )
};

export {PostInterview};