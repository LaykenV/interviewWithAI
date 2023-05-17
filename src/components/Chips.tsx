import React, { useContext, useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Chip from '@mui/material/Chip';
import { interviewContext } from "../interviewContext";

const Chips = () => {
    const { interviewLevel, setInterviewLevel } = useContext(interviewContext);
    const [selectedChip, setSelectedChip] = useState("Junior");

    useEffect(() => {
        setInterviewLevel(selectedChip);
    }, [selectedChip])

    return(
        <Stack>
            <Chip label="Junior" onClick={() => {setSelectedChip("Junior")}}></Chip>
            <Chip label="Mid-Level" onClick={() => {setSelectedChip("Mid-Level")}}></Chip>
            <Chip label="Senior" onClick={() => {setSelectedChip("Senior")}}></Chip>
        </Stack>

    )
}

export {Chips};
