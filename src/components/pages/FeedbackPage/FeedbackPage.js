import React, { useState } from 'react';
import { Formik } from 'formik';
import {
    Button,
    TextField,
    Grid,
    Card,
    CardContent,
    CardActions,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import { FeedbackList } from './FeedbackList';
import { FeedbackRating } from './FeedbackRating';

export default function FeedbackPage(props) {

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
                <Grid item xs={12} sm={12} md={6}>
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
                                        <CardContent>
                                            <div className="input-group">
                                                <TextField
                                                    type="name"
                                                    label="Name"
                                                    name="name"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.name}
                                                    helperText={touched.name && errors.name}
                                                    error={Boolean(touched.name && errors.name)}
                                                />
                                            </div>
                                            <div className="input-group">
                                                <TextField
                                                    type="email"
                                                    label="Email"
                                                    name="email"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.email}
                                                    helperText={touched.email && errors.email}
                                                    error={Boolean(touched.email && errors.email)}
                                                />
                                            </div>
                                            <div className="input-group">
                                                <Rating
                                                    name="rating"
                                                    value={values.rating}
                                                    onChange={handleChange}
                                                    size="large" />
                                            </div>
                                            <div className="input-group">
                                                <TextField
                                                    type="comment"
                                                    label="Comment"
                                                    multiline
                                                    rows="4"
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
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                size="large"
                                            >
                                                Submit
                                        </Button>
                                        </CardActions>
                                    </Card>
                                </form>
                            )}
                    </Formik>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <FeedbackRating feedbacks={feedbacks} />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <FeedbackList feedbacks={feedbacks} />
                </Grid>
            </Grid>
        </div>
    );
}