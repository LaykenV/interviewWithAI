import React, { useContext, useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Chip from '@mui/material/Chip';
import { interviewContext } from "../interviewContext";

const Chips = () => {
    const { interviewLevel, setInterviewLevel } = useContext(interviewContext);
    const [selectedChip, setSelectedChip] = useState("1");

    useEffect(() => {
        setInterviewLevel(selectedChip);
    }, [selectedChip])

    return(
        <Stack>
            <Chip label="Junior" onClick={() => {setSelectedChip("1")}}></Chip>
            <Chip label="Mid-Level" onClick={() => {setSelectedChip("2")}}></Chip>
            <Chip label="Senior" onClick={() => {setSelectedChip("3")}}></Chip>
        </Stack>

    )
}

export {Chips};
