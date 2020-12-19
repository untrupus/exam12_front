import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserPhotos} from '../../store/actions/photosActions'
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import SinglePhoto from "../../components/SinglePhoto/SinglePhoto";
import {Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(() => ({
    main: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingTop: "40px"
    },
    link: {
        width: '100%',
        marginBottom: '20px',
        textAlign: 'right'
    }
}));

const MyPhotos = props => {
    const classes = useStyles();
    const photos = useSelector(state => state.photos.userPhotos);
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user);

    useEffect(() => {
        dispatch(fetchUserPhotos(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    const photoList = photos.map(photo => {
        return (
            <SinglePhoto
                key={photo._id}
                id={photo._id}
                title={photo.title}
                src={'http://localhost:8000/uploads/' + photo.image}
                author={photo.user.displayName}
                user={photo.user._id}
                permit={user && user.user._id === props.match.params.id}
            />
        )
    });
    let addBtn;
    if (user && user.user._id === props.match.params.id) {
        addBtn = (
            <div className={classes.link}>
                <Link component={RouterLink}  to="/addphoto">Add Photo</Link>
            </div>
        )
    } else {
        addBtn = null;
    }

    return (
        <Container className={classes.main}>
            {addBtn}
            {photoList}
        </Container>
    );
};

export default MyPhotos;