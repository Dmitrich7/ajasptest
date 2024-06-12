import React, {FC} from 'react';
import {Stack, Typography} from "@mui/material";
import StatusIcon from "./StatusIcon";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import {Statuses} from "../models/Systems";

interface MyAccordionSummaryProps {
    name: string;
    description: string;
    status: Statuses;
}

const MyAccordionSummary: FC<MyAccordionSummaryProps> = ({name,description,status}) => {
    return (
        <>
            <Stack marginLeft={2} direction="row" spacing={1.5}>
                <Typography>{name}</Typography>
                <Typography>{description}</Typography>
            </Stack>
            <Typography  sx={{display: "flex"}}>
                <StatusIcon status={status}></StatusIcon>
                {status}
            </Typography>
            <Typography marginRight={5}>
                Запланирован в...
                <ArrowForwardIosSharpIcon sx={{ fontSize: '0.7rem'}}/>
            </Typography>
        </>
    );
};

export default MyAccordionSummary;
