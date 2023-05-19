import {useState} from "react";
import { LandingPageSection } from "../components/LandingPageSection";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import "./css/LandingPage.css";
import { PreInterview } from "../components/PreInterview";
import { useTheme } from '@mui/material/styles';
import { Palette } from "@mui/icons-material";

const LandingPage = () => {
    const [modalDisplay, setModalDisplay] = useState(false);
    const theme = useTheme()

    return(
        <Stack direction="column" justifyContent="flex-start" alignItems="center" sx={{minHeight: "100vh", width: "100vw", gap: "60px"}}>
            <Stack sx={{width: "100%", borderBottom: "1px solid lightgray", height: "100px", position: "sticky"}} justifyContent="center" alignItems="center">
                <Box sx={{fontSize: "large", color: theme.palette.text.primary}}>Interview With AI</Box>
            </Stack>
            <LandingPageSection section="interview"></LandingPageSection>
            <LandingPageSection section="analysis"></LandingPageSection>
            <LandingPageSection section=""></LandingPageSection>
            <Button onClick={() => {setModalDisplay(!modalDisplay)}} sx={{bgcolor: theme.palette.primary.main, color: theme.palette.text.secondary}}>Start Interview</Button>
            <PreInterview display={modalDisplay} setDisplay={setModalDisplay}></PreInterview>
        </Stack>
    )
};

export {LandingPage};
