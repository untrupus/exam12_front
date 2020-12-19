import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import {Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import {deletePhoto, fetchUserPhotos} from "../../store/actions/photosActions";
import SimpleModal from "../Modal/Modal";

const useStyles = makeStyles(() => ({
    card: {
        border: '1px solid black',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '15px'
    },
    img: {
        height: '200px',
        width: 'auto'
    }
}));

const SinglePhoto = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user);

    const remove = async id => {
        await dispatch(deletePhoto(id));
        dispatch(fetchUserPhotos(user.user._id));
    }

    return (
        <div className={classes.card}>
            <SimpleModal
                src={props.src}
            />
            <h3>{props.title}</h3>
            <p><b>Author: </b>
                <Link component={RouterLink} className={classes.history}
                      to={"/users/" + props.user}>{props.author}</Link>
            </p>
            {props.permit ? <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => remove(props.id)}
            >
                Delete Photo
            </Button> : null}

        </div>
    );
};

export default SinglePhoto;