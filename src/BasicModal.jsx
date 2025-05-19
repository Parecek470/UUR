import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    left: '25%',
    width: '50%',
    top: '15%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const handleClose = () => props.setIsOpen(false);

    return (
        <div>
            <Modal
                open={props.isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{overflow:'scroll', overflowX:'auto', width:'100%', height:'100%'}}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:'center'}}>
                        {props.title}
                    </Typography>
                    {props.children}
                </Box>
            </Modal>
        </div>
    );
}