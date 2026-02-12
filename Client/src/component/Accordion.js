import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Game from './Game';
import HoverRating from './Rating';
import BasicSwitches from './Switch';
import ImageAvatars from './Avatar';
import BasicBreadcrumbs from './Breadcrumbs';
import BasicSimpleTreeView from './List';
import LoadingButtonsTransition from './Loading';
import InputFileUpload from './File-Upload';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function AccordionUsage() {
    const [entries, setEntries] = useState([]);
    useEffect(()=>{
         async function fetchData() {
            try {
                console.log("test")
                const response = await axios.get('http://localhost:3030/dir/home/nicolas');
                console.log("Status Code:", response.status);
                console.log("Data:", response.data);
                setEntries(response.data)
                return response.data;
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])


    return (
        <>
        {entries.map((v) => {
            return <h1>{v}</h1>
        })}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">Tic Tac Toe</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Game />
                </AccordionDetails>
            </Accordion >
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header">
                    <Typography component="span">Autres Components</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={2}>
                        <Stack spacing={2}>
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <BasicBreadcrumbs />
                                <HoverRating />
                            </Stack>
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                sx={{ paddingRight: "35px" }}>
                                <ImageAvatars />
                            </Stack>
                            <BasicSwitches />
                            <LoadingButtonsTransition />
                            <InputFileUpload />
                            <BasicSimpleTreeView />
                        </Stack>
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
