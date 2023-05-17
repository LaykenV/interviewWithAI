import pic from "../assets/react.svg";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export interface Props {
    section: string;
}

const LandingPageSection = (props: Props) => {
    if (props.section === "interview") {
        return (
            <Stack>
                <Box component="img" src={pic} alt="" sx={{height: "100px", width: "100px"}}></Box>
                <Box>
                    <Box>Practice Live Interviews</Box>
                    <Box>Interviews are hard! Our Application aims to be the best resource in the world at improving your live interview skills. We have a compilation of the most popular interview questions for various job titles and senioririty levels that will be asked to you.</Box>
                </Box>
            </Stack>
        )      
    }
    if (props.section === "analysis") {
        return (
            <Stack>
                <Box component="img" src={pic} alt="" sx={{height: "100px", width: "100px"}}></Box>
                <Box>
                    <Box>Get Instant Analysis On Your Answers</Box>
                    <Box>We use the OpenAI API to analyze your interview answers in real time and provide you with a score for your answer as well as in depth feedback on how you can improve your interview skills.</Box>
                </Box>
            </Stack>
        )  
    }
        return (
            <Stack>
                <Box component="img" src={pic} alt="" sx={{height: "100px", width: "100px"}}></Box>
                <Box>
                    <Box>About Me (The Developer)</Box>
                    <Box>I am a Self-Taught Front End Developer with a passion for AI as well as building web applications! I recently completed an internship as a Web Developer and was trying to brush up on my interview skills to land my first full time role. During this process I was frustrated with how hard interview prep really is!</Box>
                </Box>
            </Stack> 
        )      
};

export {LandingPageSection};