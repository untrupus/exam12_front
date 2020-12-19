import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserPhotos} from '../../store/actions/photosActions'
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import SinglePhoto from "../../components/SinglePhoto/SinglePhoto";

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingTop: "40px"
    },
}));

const MyPhotos = props => {
    const classes = useStyles();
    const photos = useSelector(state => state.photos.userPhotos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserPhotos(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    const photoList = photos.map(photo => {
        return (
            <SinglePhoto
                key={photo._id}
                title={photo.title}
                src={'http://localhost:8000/uploads/' + photo.image}
                author={photo.user.displayName}
                user={photo.user._id}
            />
        )
    });
    return (
        <Container className={classes.main}>
            {photoList}
        </Container>
    );
};

export default MyPhotos;