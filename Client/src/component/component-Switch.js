import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
    const [showDiv, setShowDiv] = useState(true);
    const handleToggle = (event) => { setShowDiv(event.target.checked) }
    return (
        <>
            <FormGroup>
                <FormControlLabel
                    control={<Switch defaultChecked checked={showDiv} onChange={handleToggle} />}
                    label="Show/Hide"
                />
            </FormGroup>
            {showDiv && (
                <img src ="https://media.tenor.com/xKyZrxhrF70AAAAM/mmmmm-behave-yourselves.gif" style = {{width: "200px", Height : "auto"}}/>
            )}
        </>
    );
}
