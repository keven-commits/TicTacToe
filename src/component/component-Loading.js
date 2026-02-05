import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function LoadingButtonsTransition() {
    const [loading, setLoading] = React.useState(false);
    const [finished, setFinished] = React.useState(false);

    const handleClick = () => {
        setLoading(true);
        setFinished(false);

        setTimeout(() => {
            setLoading(false);
            setFinished(true);
        }, 10000);
    };


    return (
        <Box sx={{ '& > button': { m: 1 } }}>
            <Button
                size="small"
                onClick={handleClick}
                loading={loading}
                variant="outlined"
                disabled={loading || finished}
            >
                {finished? "Terminé" : "Clickez ici"}
            </Button>
        </Box>
    );
}