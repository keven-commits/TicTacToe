import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar alt="Hunter" src="https://wow.zamimg.com/uploads/screenshots/small/254458.jpg" />
            <Avatar alt="Mage" src="https://wow.zamimg.com/uploads/screenshots/small/177053.jpg" />
            <Avatar alt="Priest" src="https://wow.zamimg.com/uploads/screenshots/small/641185.jpg" />
        </Stack>
    );
}
