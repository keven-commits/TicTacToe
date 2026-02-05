import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Game from './component-Game';
import HoverRating from './component-Rating';
import BasicSwitches from './component-Switch';
import ImageAvatars from './component-Avatar';
import BasicBreadcrumbs from './component-Breadcrumbs';
import NestedList from './component-List';
import LoadingButtonsTransition from './component-Loading';


export default function AccordionUsage() {
    return (
        <>
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
                    <Typography component="span">Autres MUI</Typography>
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
                                sx={{paddingRight: "35px"}}>
                                <ImageAvatars />
                            </Stack>
                            <BasicSwitches />
                            <LoadingButtonsTransition />
                            <NestedList />
                        </Stack>
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
