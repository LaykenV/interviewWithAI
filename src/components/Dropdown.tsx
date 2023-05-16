import React, { useContext } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { interviewContext } from "../interviewContext";

const Dropdown = () => {
    const { interviewJob, setInterviewJob } = useContext(interviewContext);

    const handleChangeJob = (event: SelectChangeEvent) => {
        setInterviewJob(event.target.value as string);
    }
    return(
        <Box>
            <FormControl>
                <InputLabel id="jobInput">Job Title</InputLabel>
                <Select labelId="jobInput" id="jobSelector" value={interviewJob} label="jobTitle" onChange={handleChangeJob}>
                    <MenuItem value={"1"}>Front End Developer</MenuItem>
                    <MenuItem value={"2"}>Back End Developer</MenuItem>
                    <MenuItem value={"3"}>Full Stack Developer</MenuItem>
                    <MenuItem value={"4"}>Behavioral Questions</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
};

export {Dropdown};