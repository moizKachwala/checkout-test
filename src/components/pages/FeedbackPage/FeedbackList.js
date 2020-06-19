import React from 'react';
import { Card, CardContent, Typography, CardHeader } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

export default function FeedbackList({ feedbacks = [] }) {
    return (
        <div className="feedback-list">
            <Card>
                {feedbacks.map(({ name, email, rating, comment }, index) => (
                    <div key={index}>
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
                    </div>
                ))}
            </Card>
        </div>
    )
}