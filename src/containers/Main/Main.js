import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotos} from '../../store/actions/photosActions'
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

const Main = () => {
    const classes = useStyles();
    const photos = useSelector(state => state.photos.photos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPhotos());
    }, [dispatch]);

    const photoList = photos.map(photo => {
        return (
            <SinglePhoto
                key={photo._id}
                title={photo.title}
                src={'http://localhost:8000/uploads/' + photo.image}
                author={photo.user.displayName}
            />
        )
    });

    return (
        <Container className={classes.main}>
            {photoList}
        </Container>
    );
};

export default Main;