import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import StartIcon from '@mui/icons-material/Start';
import * as PropTypes from "prop-types";
import {useRef} from "react";
import { useProfile } from './ProfileContext';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {ListItem} from "@mui/material";
import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import WindowTwoToneIcon from '@mui/icons-material/WindowTwoTone';
import styles from './CategoriesColor.module.css';


const categories = ["Starting position", "finish", "Empty space", "Wall", "Lights", "Doors", "Solid objects", "Enemies", "Collectables", "Other"];


function ExpandableItem(props) {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    // Get color from CSS module or fallback to provided Color prop
    const color = props.Color;

    const fadeColor = (color) => {
        if (!color) return 'rgba(128, 128, 128, 0.7)'; // Default gray if no color

        // Handle hex colors
        if (color.startsWith('#')) {
            // Remove the # and parse the hex values
            const hex = color.substring(1);
            // Handle both 3-digit and 6-digit hex
            const r = parseInt(hex.length === 3 ? hex[0] + hex[0] : hex.substring(0, 2), 16);
            const g = parseInt(hex.length === 3 ? hex[1] + hex[1] : hex.substring(2, 4), 16);
            const b = parseInt(hex.length === 3 ? hex[2] + hex[2] : hex.substring(4, 6), 16);

            if (isNaN(r) || isNaN(g) || isNaN(b)) {
                return 'rgba(128, 128, 128, 0.7)'; // Default if parsing fails
            }

            return `rgba(${r}, ${g}, ${b}, 0.7)`;
        }

        // Handle rgb/rgba colors
        const rgb = color.match(/\d+/g);
        if (!rgb) return 'rgba(128, 128, 128, 0.7)'; // Default if color format is invalid
        return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.7)`;
    };

    return <>
        <ListItem onClick={handleClick} className={styles.expandable} style={{
            backgroundColor: color,
            borderRadius: open ? '10px 10px 0 0' : 10,
            boxShadow: '0px 0px 33px rgba(0,0,0,0.75)',
            marginBottom: open ? 0 : '10px'
        }}>

            <ListItemIcon>
                {props.Icon || <InboxIcon/>}
            </ListItemIcon>
            <ListItemText primary={props.Category || "Default"}/>
            {open ? <ExpandLess/> : <ExpandMore/>}
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
            <List component="div" disablePadding style={{
                backgroundColor: fadeColor(color),
                boxShadow: '0px 10px 33px rgba(0,0,0,0.75)',
                marginBottom: '10px',
                borderRadius: '0 0 10px 10px',
            }}>
                <ListItem sx={{pl: 4}}>
                    <ListItemIcon>
                        <StarBorder/>
                    </ListItemIcon>
                    <ListItemText primary={color}/>
                </ListItem>
                <ListItem sx={{pl: 4}}>
                    <ListItemIcon>
                        <StarBorder/>
                    </ListItemIcon>
                    <ListItemText primary={color}/>
                </ListItem>
            </List>
        </Collapse>

    </>;
}

ExpandableItem.propTypes = {
    onClick: PropTypes.func,
    open: PropTypes.bool,
    Category: PropTypes.string,
    Color: PropTypes.string,
    Icon: PropTypes.element
};

function SimpleItem(props) {
    const inputFile = useRef(null)
    const onButtonClick = () => {
        inputFile.current.click();
    };

    // Get color from CSS module or fallback to provided Color prop
    const categoryKey = props.Category?.toLowerCase().replace(' ', '') || '';
    const color = props.Color;

    return <ListItem className={styles.simple} style={{
        backgroundColor: color,
        borderRadius: 10,
        boxShadow: '0px 0px 33px rgba(0,0,0,0.75)',
        marginBottom: '10px'
    }}>
        <ListItemIcon>
            {props.Icon}
        </ListItemIcon>
        <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
        <button onClick={onButtonClick}><FileUploadIcon/></button>
        <ListItemText style={{textAlign:"center"}} primary={props.Category}/>
    </ListItem>;
}

SimpleItem.propTypes = {
    Category: PropTypes.string,
    Color: PropTypes.string,
    Icon: PropTypes.element
};


export default function NestedList() {
    const profile = useProfile();
    return (
        <List
            sx={{width: '100%', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"

        >
            {Object.entries(profile).map(([key, value]) => (
                value.expandable?<ExpandableItem Category={key} Color={styles.expandable.color} Icon={value.icon}/>:
                    <SimpleItem Category={key} Color={styles.simple.color} Icon={value.icon}/>


            ))}

        </List>
    );
}


