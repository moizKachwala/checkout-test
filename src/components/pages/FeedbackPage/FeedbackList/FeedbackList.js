import React from 'react';
import { Card, CardContent, Typography, CardHeader, makeStyles } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {
      marginTop: theme.spacing(0.5),
    },
}));

export default function FeedbackList({ feedbacks = [] }) {
    const classes = useStyles();
    return (
        <div className="feedback-list">
            {feedbacks.map(({ name, email, rating, comment }, index) => (
                <Card className={classes.root} key={index} variant="outlined" square>
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
        </div>
    )
}