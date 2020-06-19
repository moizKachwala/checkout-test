import React, { useState } from 'react';
import { Formik } from 'formik';
import {
    Button,
    TextField,
} from '@material-ui/core';
import {Rating} from '@material-ui/lab';

export default function FeedbackPage(props) {

    const [feedbacks, setFeedbacks] = useState([]);

    const handleSumit = (feedback) => {
        console.log(feedback);
        setFeedbacks([feedback]);
    }

    return (
        <>
            <Formik
                initialValues={
                    {
                        name: '',
                        email: '',
                        rating: 0,
                    }}
                onSubmit={(values, actions) => {
                    console.log(values);
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
                            <div className="input-group">
                                <TextField
                                    type="name"
                                    label="Name"
                                    margin="normal"
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
                                    margin="normal"
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
                            <div className="">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    size="large"
                                >
                                    Submit
                            </Button>
                            </div>
                        </form>
                    )}
            </Formik>
        </>
    );
}