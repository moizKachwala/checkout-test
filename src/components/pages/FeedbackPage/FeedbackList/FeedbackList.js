import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, CardHeader, makeStyles, Paper } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
    },
    card: {
        marginTop: theme.spacing(0.5),
    },
}));

export default function FeedbackList({ feedbacks = [] }) {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Typography gutterBottom data-testid="title">
                {feedbacks.length > 0 ? "All Feedbacks" : "No feedback added yet!"}
            </Typography>
            {feedbacks.map(({ name, email, rating, comment }, index) => (
                <Card data-testid={`row-${index}`} className={classes.card} key={index} variant="outlined" square>
                    <CardHeader
                        title={name}
                        subheader={email}
                        action={
                            <Rating readOnly value={rating} />
                        }
                    />
                    <CardContent>
                        <Typography paragraph>
                            {comment}
                        </Typography>
                    </CardContent>
                </Card>
            )).reverse()}
        </Paper>
    )
}

FeedbackList.propTypes = {
    feedbacks: PropTypes.array.isRequired
}