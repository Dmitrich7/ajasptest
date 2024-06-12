import React, {FC} from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Stack
} from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import {ISystems} from "../models/Systems";
import MyAccordionContent from "./MyAccordionContent";
import MyAccordionSummary from "./MyAccordionSummary";

interface MyAccordionProps {
    system: ISystems
}

const MyAccordion: FC<MyAccordionProps> = ({system}) => {

    return (
        <Stack marginLeft={"1%"} marginBottom={"10px"} width={"98%"}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem'}}/>}
                    sx={{
                        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                            transform: 'rotate(90deg)'
                        },
                        ".MuiAccordionSummary-content":{
                            justifyContent: "space-between"
                        },
                        flexDirection: "row-reverse"
                    }}
                >
                    <MyAccordionSummary name={system.name} description={system.description} status={system.status}/>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        borderTop:"1px solid rgba(0, 0, 0, .1);"
                    }}
                >
                    <MyAccordionContent systemId={system.id} stream={system.streams}></MyAccordionContent>
                </AccordionDetails>
            </Accordion>
        </Stack>
    );
};

export default MyAccordion;
