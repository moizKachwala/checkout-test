import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import {
    Button,
    TextField,
    Card,
    CardContent,
    CardActions,
    CardHeader,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { validate } from '../FeedbackValidation/validation';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(2),
    },
    rating: {
        marginLeft: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
    },
    ratingLabel: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
    },
    textField: {
        margin: theme.spacing(1),
        width: '40%',
    },
    textArea: {
        margin: theme.spacing(1),
        width: '90%',
    },
    ratingError: {
        marginLeft: theme.spacing(1),
        fontSize: '0.75rem',
    }
}));

export default function FeedbackForm({ handleFormSubmit }) {
    const classes = useStyles();
    const initialValues = {
        name: '',
        email: '',
        rating: 0,
        comment: ''
    };
    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validate={validate}
            onSubmit={(values, { setStatus, resetForm }) => {
                handleFormSubmit(values);
                resetForm(initialValues);
                setStatus({ success: true });
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
            }) => (

                    <form
                        noValidate={true}
                        autoComplete="off"
                        onSubmit={handleSubmit}
                        name="feedback-form"
                    >
                        <Card>
                            <CardHeader
                                title="Add Feedback"
                            />
                            <CardContent>
                                <div className="form-group">
                                    <TextField
                                        label="Name"
                                        name="name"
                                        inputProps={{ "data-testid": "name-input" }}
                                        className={classes.textField}
                                        required
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.name}
                                        helperText={touched.name && errors.name}
                                        error={Boolean(touched.name && errors.name)}
                                    />
                                    <TextField
                                        type="email"
                                        id="email"
                                        label="Email"
                                        name="email"
                                        inputProps={{ "data-testid": "email-input" }}
                                        required
                                        className={classes.textField}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.email}
                                        helperText={touched.email && errors.email}
                                        error={Boolean(touched.email && errors.email)}
                                    />
                                </div>
                                <div className="form-group">
                                    <Typography
                                        className={classes.ratingLabel}
                                        component="legend"
                                        color={Boolean(touched.rating && errors.rating) ? 'error' : 'inherit'} >Select Rating</Typography>
                                    <Rating
                                        className={classes.rating}
                                        name="rating"
                                        value={values.rating}
                                        onChange={handleChange}
                                        size="large" />
                                    <Typography className={classes.ratingError} color="error">{touched.rating && errors.rating}</Typography>
                                </div>
                                <div className="form-group">
                                    <TextField
                                        type="comment"
                                        label="Comment"
                                        multiline
                                        rows="3"
                                        className={classes.textArea}
                                        name="comment"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.comment}
                                        helperText={touched.comment && errors.comment}
                                        error={Boolean(touched.comment && errors.comment)}
                                    />
                                </div>
                            </CardContent>
                            <CardActions>
                                <div className="form-group">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        type="submit"
                                        size="medium"
                                        data-testid="submitButton"
                                        className={classes.button}
                                    >
                                        Submit Feedback
                                                 </Button>
                                </div>
                            </CardActions>
                        </Card>
                    </form>
                )}
        </Formik>
    );
}

FeedbackForm.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired,
}