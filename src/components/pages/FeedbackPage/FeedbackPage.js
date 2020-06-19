import React, { useState } from 'react';
import { Formik } from 'formik';
import {
    Button,
    TextField,
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
    CssBaseline,
    CardHeader,
    makeStyles,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import { FeedbackList } from './FeedbackList';
import { FeedbackRating } from './FeedbackRating';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(2),
    },
    rating: {
        marginLeft: theme.spacing(0.5),
        marginBottom: theme.spacing(1),
    },
    ratingLabel: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(0.5),
    },
    textField: {
        margin: theme.spacing(1),
        width: '40%',
    },
    textArea: {
        margin: theme.spacing(1),
        width: '90%',
    },
}));

export default function FeedbackPage(props) {
    const classes = useStyles();
    const [feedbacks, setFeedbacks] = useState([]);

    const handleSumit = (feedback) => {
        setFeedbacks(prevState => {
            return [
                ...prevState,
                feedback,
            ];
        });
    }

    return (
        <div className="feedback-page">
            <Grid container spacing={1}>
                <Grid xs={12}>
                    <CssBaseline />
                    <Typography variant="h4" align="center" component="h1" gutterBottom>
                        Feedback Form
                        </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                    <FeedbackRating feedbacks={feedbacks} />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <Grid>
                        <Formik
                            initialValues={
                                {
                                    name: 'Moiz Kachwala',
                                    email: 'moizk@hotmail.com',
                                    rating: 4,
                                    comment: 'This is a test comment for you to go through ti and the product is very good and useful'
                                }}
                            onSubmit={(values, actions) => {
                                handleSumit(values);
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
                                    >
                                        <Card>
                                            <CardHeader
                                                title="Submit Feedback"
                                            />
                                            <CardContent>
                                                <div className="form-group">
                                                    <TextField
                                                        type="name"
                                                        label="Name"
                                                        name="name"
                                                        className={classes.textField}
                                                        margin="normal"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.name}
                                                        helperText={touched.name && errors.name}
                                                        error={Boolean(touched.name && errors.name)}
                                                    />
                                                    <TextField
                                                        type="email"
                                                        label="Email"
                                                        name="email"
                                                        margin="normal"
                                                        className={classes.textField}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.email}
                                                        helperText={touched.email && errors.email}
                                                        error={Boolean(touched.email && errors.email)}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <Typography className={classes.ratingLabel} component="legend">Select Rating</Typography>
                                                    <Rating
                                                        className={classes.rating}
                                                        name="rating"
                                                        value={values.rating}
                                                        onChange={handleChange}
                                                        size="large" />
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
                    </Grid>
                    <Grid direction="row">
                        <FeedbackList feedbacks={feedbacks} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}