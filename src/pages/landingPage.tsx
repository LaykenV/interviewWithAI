import {useState} from "react";
import { LandingPageSection } from "../components/LandingPageSection";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import "./css/LandingPage.css";
import { PreInterview } from "../components/PreInterview";

const LandingPage = () => {
    const [modalDisplay, setModalDisplay] = useState(false);


    return(
        <Stack direction="column" justifyContent="flex-start" alignItems="center" sx={{minHeight: "100vh", width: "100vw"}}>
            <Box sx={{}}>Interview With AI</Box>
            <LandingPageSection section="interview"></LandingPageSection>
            <LandingPageSection section="analysis"></LandingPageSection>
            <LandingPageSection section=""></LandingPageSection>
            <Button onClick={() => {setModalDisplay(!modalDisplay)}}>Start Interview</Button>
            <PreInterview display={modalDisplay} setDisplay={setModalDisplay}></PreInterview>
        </Stack>
    )
};

export {LandingPage};
