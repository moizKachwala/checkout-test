import React, { useState } from 'react';
import {
    Grid,
    Typography,
    CssBaseline,
} from '@material-ui/core';

import { FeedbackList } from './FeedbackList';
import { FeedbackRating } from './FeedbackRating';
import { validate } from './FeedbackValidation/validation';
import {FeedbackForm} from './FeedbackForm';

export default function FeedbackPage(props) {
    const [feedbacks, setFeedbacks] = useState([]);
    const initialValues = {
        name: '',
        email: '',
        rating: 0,
        comment: ''
    };

    const handleSubmit = (feedback) => {
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
                <Grid item xs={12}>
                    <CssBaseline />
                    <Typography variant="h4" data-testid="page-title" align="center" component="h1" gutterBottom>
                        Feedback Form
                        </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                    <FeedbackRating feedbacks={feedbacks} />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <Grid>
                        <FeedbackForm
                            handleSubmit={handleSubmit}
                            initialValues={initialValues}
                            validate={validate}
                        />
                    </Grid>
                    <Grid>
                        <FeedbackList feedbacks={feedbacks} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}