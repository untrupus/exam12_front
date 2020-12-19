import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
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
    return (
        <div className={classes.card}>
            <img src={props.src} alt="nature" className={classes.img}/>
            <h3>{props.title}</h3>
            <p><b>Author: </b>
                <Link component={RouterLink} className={classes.history}
                      to={"/users/" + props.user}>{props.author}</Link>
            </p>
        </div>
    );
};

export default SinglePhoto;