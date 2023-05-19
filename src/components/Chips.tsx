import React, { useContext, useState, useEffect } from "react";
import {Stack, useTheme, Chip} from "@mui/material";
import { interviewContext } from "../interviewContext";

const Chips = () => {
    const { interviewLevel, setInterviewLevel } = useContext(interviewContext);
    const [selectedChip, setSelectedChip] = useState("Junior");
    const theme = useTheme();

    useEffect(() => {
        setInterviewLevel(selectedChip);
    }, [selectedChip])

    return(
        <Stack direction="row" sx={{width: "50%", flexGrow: 1}} justifyContent="space-between" alignItems="center">
            <Chip label="Junior" onClick={() => {setSelectedChip("Junior")}} sx={{width: "25%", backgroundColor: selectedChip === "Junior" ? theme.palette.primary.dark : theme.palette.common.white, color: selectedChip === "Junior" ? theme.palette.common.white : theme.palette.common.black}}></Chip>
            <Chip label="Mid-Level" onClick={() => {setSelectedChip("Mid-Level")}} sx={{width: "25%", backgroundColor: selectedChip === "Mid-Level" ? theme.palette.primary.dark : theme.palette.common.white, color: selectedChip === "Mid-Level" ? theme.palette.common.white : theme.palette.common.black}}></Chip>
            <Chip label="Senior" onClick={() => {setSelectedChip("Senior")}} sx={{width: "25%", backgroundColor: selectedChip === "Senior" ? theme.palette.primary.dark : theme.palette.common.white, color: selectedChip === "Senior" ? theme.palette.common.white : theme.palette.common.black}}></Chip>
        </Stack>

    )
}

export {Chips};
