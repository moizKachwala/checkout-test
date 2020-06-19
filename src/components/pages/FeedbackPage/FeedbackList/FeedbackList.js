import React from 'react';
import { Card, CardContent, Typography, CardHeader, makeStyles, Paper } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
    },
    card: {
        marginTop: theme.spacing(0.5),
    },
}));

export default function FeedbackList({ feedbacks = [] }) {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Typography align="center" gutterBottom>
                {feedbacks.length > 0 ? "All Feedbacks" : "No feedbacks added yet!"}
            </Typography>
            {feedbacks.map(({ name, email, rating, comment }, index) => (
                <Card className={classes.card} key={index} variant="outlined" square>
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
            ))}
        </Paper>
    )
}