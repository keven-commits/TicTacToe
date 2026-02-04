import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Game from './component-Game';
import HoverRating from './component-Rating';
import BasicSwitches from './component-Switch';
import ImageAvatars from './component-Avatar';
import BasicBreadcrumbs from './component-Breadcrumbs';
import NestedList from './component-List';


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
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">Autres MUI</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={2}>
                        <HoverRating />
                        <BasicSwitches />
                        <ImageAvatars />
                        <LinearProgress variant="determinate" value={50} />
                        <BasicBreadcrumbs />
                        <NestedList />
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
