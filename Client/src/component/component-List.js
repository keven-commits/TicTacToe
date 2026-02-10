import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const fileTree = {
    label: "C:", children: [{ label: "Users", children: [{ label: "Keven", children: [{ label: "Desktop", children: [{ label: "GitKraken", children: [{ label: "TicTacToe", children: [{ label: "src" }] }] }] }] }] }]
};

function FolderItem({ item, level = 0 }) {
    const [open, setOpen] = React.useState(false);
    const hasChildren = item.children && item.children.length > 0;

    return (
        <>
            <ListItemButton
                onClick={() => hasChildren && setOpen(!open)}
                sx={{ pl: 2 + level * 2 }}
            >
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>

                <ListItemText primary={item.label} />

                {hasChildren &&
                    (open ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>

            {hasChildren && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        {item.children.map((child, index) => (
                            <FolderItem
                                key={index}
                                item={child}
                                level={level + 1}
                            />
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
}

export default function NestedList() {
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            subheader={
                <ListSubheader component="div">
                    Files Path to TicTacToe.app
                </ListSubheader>
            }
        >
            <FolderItem item={fileTree} />
        </List>
    );
}
