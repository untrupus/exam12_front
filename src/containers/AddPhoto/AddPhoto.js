import React, {useState, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addPhoto} from "../../store/actions/photosActions";
import Container from "@material-ui/core/Container";
import {makeStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    login: {
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}));

const AddPhoto = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        title: '',
        image: ''
    });
    const inputRef = useRef();

    const dispatch = useDispatch();
    const error = useSelector(state => state.photos.addPhotoError);

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };
    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        setState(prevState => ({
            ...prevState, [name]: file
        }));
    };

    const formSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(state).forEach(key => {
            formData.append(key, state[key]);
        });
        dispatch(addPhoto(formData));
    };

    const getFieldError = fieldName => {
        try {
            return error.errors[fieldName].message;
        } catch (e) {
            return undefined;
        }
    };

    return (
        <Container>
            <form className={classes.form}
                  onSubmit={formSubmit}
            >
                <TextField
                    variant="outlined"
                    margin="normal"
                    error={!!getFieldError("title")}
                    helperText={getFieldError("title")}
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    value={state.title}
                    onChange={inputChangeHandler}
                    autoComplete="title"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="image"
                    type="file"
                    placeholder="Image"
                    error={!!getFieldError("image")}
                    helperText={getFieldError("image")}
                    ref={inputRef}
                    id="image"
                    onChange={fileChangeHandler}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Add Photo
                </Button>
            </form>
        </Container>
    );
};

export default AddPhoto;