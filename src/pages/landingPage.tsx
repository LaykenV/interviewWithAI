import {useState, useEffect} from "react";
import { LandingPageSection } from "../components/LandingPageSection";
import Button from "@mui/material/Button";
import { useTheme } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Slide, Paper }from "@mui/material";
import Stack from "@mui/material/Stack";
import "./css/LandingPage.css";
import { PreInterview } from "../components/PreInterview";
import { Avatar, Typography } from "@mui/material";
import selfie from "../assets/IMG_2253.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import Carousel from "react-material-ui-carousel";
import useMediaQuery from '@mui/material/useMediaQuery';

const Item = (props:any) => {
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Paper sx={{height: "550px"}}>
            <Typography variant="h5" sx={{textAlign: "center", borderBottom: "1px solid lightgray", padding: isMedium ? "10px" : "20px", fontSize: isMedium ? "large" : null}}>{props.item.name}</Typography>
            <Typography variant="subtitle1" sx={{textAlign: "center", padding: isMedium ? "20px" : "50px"}}>{props.item.description}</Typography>
        </Paper>
    )
}


const LandingPage = () => {
    const [modalDisplay, setModalDisplay] = useState(false);
    const theme = useTheme()

    useEffect(() => {
        console.log(theme.breakpoints.up("md"));
        
    }, [])

    const openTab = (url:string) => {
        window.open(url);
    };

    const items = [
        {
            name: "Practice Live Interviews",
            description: "Interviews can be tough. The pressure to perform well can be overwhelming, and the uncertainty of what lies ahead can be daunting. But fear not, because our innovative application is here to provide you with the ultimate AI interview practice experience. Powered by cutting-edge artificial intelligence, our platform creates realistic simulations of real-world interviews. You'll face a diverse range of common interview questions, and our advanced AI algorithms will analyze your responses, offering valuable feedback and insights. This invaluable tool enables you to pinpoint areas where you can improve, boost your confidence, and equip you with the skills needed to confidently conquer your next interview. Say goodbye to uncertainty and hello to interview success with our AI interview practice platform."
        },
        {
            name: "Get Instant Analysis On Your Answers",
            description: "Harnessing the power of the OpenAI API, our platform goes beyond the surface to deliver real-time analysis of your interview answers. Through this cutting-edge technology, we provide you with in-depth feedback that is tailored to your unique interview performance. Our AI-driven system carefully examines your responses, evaluating not only the content but also the delivery, body language, and overall presentation. This comprehensive feedback will guide you towards refining your interview skills and help you excel in both behavioral and technical aspects. Each interview session comprises a thought-provoking behavioral question, strategically designed to assess your problem-solving abilities, and a set of four technical questions that challenge your expertise in your chosen field. With this focused approach, we ensure that you are equipped with the knowledge and confidence necessary to stand out from the competition. Elevate your interview game with our AI-powered platform and unlock your true potential."
        },
        {
            name: "Gain Interviewing Confidence",
            description: "Harnessing the power of the OpenAI API, our platform goes beyond the surface to deliver real-time analysis of your interview answers. Through this cutting-edge technology, we provide you with in-depth feedback that is tailored to your unique interview performance. Our AI-driven system carefully examines your responses, evaluating not only the content but also the delivery, body language, and overall presentation. This comprehensive feedback will guide you towards refining your interview skills and help you excel in both behavioral and technical aspects. Each interview session comprises a thought-provoking behavioral question, strategically designed to assess your problem-solving abilities, and a set of four technical questions that challenge your expertise in your chosen field. With this focused approach, we ensure that you are equipped with the knowledge and confidence necessary to stand out from the competition. Elevate your interview game with our AI-powered platform and unlock your true potential."
        },
        {
            name: "Why I built this Application",
            description: "As a self-taught front-end developer driven by a passion for AI and web application development, I embarked on a personal journey to enhance my interview skills. Having recently completed an internship as a web developer, I realized the crucial role that interviews play in securing a full-time position. However, I quickly discovered how challenging it was to find comprehensive and user-friendly resources for interview preparation. Frustrated by this gap in the market, I decided to leverage my skills and knowledge to create an application that would revolutionize the interview preparation process. By combining my expertise in web development and my fascination with AI, I aimed to build a platform that would empower individuals like myself to overcome the hurdles of interview preparation with ease. This application is the culmination of my passion, experience, and determination to provide a solution that simplifies and optimizes the interview preparation journey for job seekers worldwide."
        }
    ]

    return(
        <Stack direction="column" justifyContent="flex-start" alignItems="center" sx={{minHeight: "100vh", width: "100vw", gap: "60px", bgcolor: theme.palette.grey[200]}}>
            <AppBar position="static" sx={{bgcolor: theme.palette.primary.main}}>
                <Toolbar>
                    <Box sx={{fontSize: "large", color: theme.palette.common.white, flexGrow: 1}}>Interview With AI</Box>
                    <Stack direction="row" gap="45px">
                        <Avatar src={selfie} sx={{height: "40px", width: "40px", cursor: "pointer"}} onClick={() => { openTab("https://laykenv.github.io/portfolio/") }}></Avatar>
                        <Stack justifyContent="center" alignItems="center">
                            <GitHubIcon fontSize="large" sx={{height: "40px", width: "40px", cursor: "pointer"}} onClick={() => { openTab("https://github.com/LaykenV/interviewWithAI") }}></GitHubIcon>
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Carousel sx={{width: "80%"}} animation="slide" interval={20000}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
            <Button onClick={() => {setModalDisplay(!modalDisplay)}} variant="contained">Get Started</Button>
            <PreInterview display={modalDisplay} setDisplay={setModalDisplay}></PreInterview>
        </Stack>
    )
};

export {LandingPage};
