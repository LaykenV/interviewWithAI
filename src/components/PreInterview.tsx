import { Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "./Dropdown";
import { Chips } from "./Chips";

export interface Props {
    display: boolean;
    setDisplay: Dispatch<SetStateAction<boolean>>;
}

const PreInterview = (props: Props) => {
    const navigate = useNavigate();
    const handleClick = (link:string) => navigate(link);
    return(
    <Stack sx={{display: props.display ? "flex" : "none"}}>
        <Box onClick={() => {props.setDisplay(!props.display)}}>X</Box>
        <Box>Choose the job you would like to interview for and your seniorority level.</Box>
        <Stack>
            <Dropdown></Dropdown>
            <Chips></Chips>
        </Stack>
        <Button onClick={() => {handleClick("/interview")}}>Start Interview</Button>
    </Stack>
    )
}

export {PreInterview};