import React, { useContext } from "react";
import {Box, TextField, useTheme} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { interviewContext } from "../interviewContext";
import useMediaQuery from '@mui/material/useMediaQuery';


const Dropdown = () => {
    const { interviewJob, setInterviewJob } = useContext(interviewContext);
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));

    const handleChangeJob = (event: SelectChangeEvent) => {
        setInterviewJob(event.target.value as string);
    }
    return(
            <FormControl sx={{width: isMedium ? '80%' : "50%"}}>
                <Select labelId="jobInput" notched={false} label="Job Title" id="jobSelector" value={interviewJob} onChange={handleChangeJob} sx={{backgroundColor: theme.palette.common.white}}>
                    <MenuItem value={"Front End React Developer"}>Front End React Developer</MenuItem>
                    <MenuItem value={"Front End Angular Developer"}>Front End Angular Developer</MenuItem>
                    <MenuItem value={"Back End Developer"}>Back End Developer</MenuItem>
                    <MenuItem value={"Full Stack Developer"}>Full Stack Developer</MenuItem>
                </Select>
            </FormControl>
    )
};

export {Dropdown};