import { Dispatch, SetStateAction } from "react";
import {Box, Typography} from '@mui/material';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "./Dropdown";
import { Chips } from "./Chips";
import { useTheme } from "@mui/material/styles";

export interface Props {
    display: boolean;
    setDisplay: Dispatch<SetStateAction<boolean>>;
}

const PreInterview = (props: Props) => {
    const navigate = useNavigate();
    const handleClick = (link:string) => navigate(link);
    const theme = useTheme()
    return(
    <Stack justifyContent="flex-start" alignItems="center" sx={{display: props.display ? "block" : "none", height: "50%", width: "60%", top: "25%", position: "fixed", zIndex: "111", backgroundColor: theme.palette.primary.light, borderRadius: "5px", color: theme.palette.common.white}}>
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{padding: "10px", height: "20%"}}>
            <Typography variant="h6">Choose the job you would like to interview for and your seniorority level.</Typography>
            <Typography onClick={() => {props.setDisplay(!props.display)}} variant="h5" sx={{cursor: "pointer", position: "absolute", top: "10px", right: "10px"}}>X</Typography>
        </Stack>
        <Stack justifyContent="flex-start" alignItems="center" sx={{ height: "70%"}}>
            <Typography variant="h6">Job Title</Typography>
            <Dropdown></Dropdown>
            <Chips></Chips>
            <Button onClick={() => {handleClick("/interview")}} sx={{}} variant="contained">Start Interview</Button>
        </Stack>
    </Stack>
    )
}

export {PreInterview};