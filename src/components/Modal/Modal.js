import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        width: "auto",
        height: '75vh',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        background: '#ffffff'
    },
    img: {
        height: '200px',
        width: 'auto'
    },
    modalImg: {
        width: "auto",
        height: '75vh',
    },
    close: {
        color: '#ffffff',
        position: "absolute",
        top: '10px',
        right: '10px'
    }
}));

const SimpleModal = props => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div className={classes.paper}>
            <img src={props.src}
                 alt='nature'
                 className={classes.modalImg}
            />
            <CancelIcon
                className={classes.close}
                onClick={handleClose}
            />
        </div>
    );

    return (
        <div>
            <img src={props.src}
                 alt="nature"
                 className={classes.img}
                 onClick={handleOpen}
            />
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    {body}
                </Modal>
            </div>
        </div>
    );
}

export default SimpleModal;