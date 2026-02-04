import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function BasicBreadcrumbs() {
    return (
        <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" a href="https://www.google.com/?hl=fr">
                    Google
                </Link>
                <Link underline="hover" color="inherit" a href="https://mui.com"
                >
                    MUI
                </Link>
                <Link underline="hover" color="inherit" a href="https://mui.com/material-ui/react-breadcrumbs/"
                >
                    Breadcrumbs
                </Link>
            </Breadcrumbs>
        </div>
    );
}
