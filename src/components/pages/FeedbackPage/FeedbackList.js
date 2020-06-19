import React from 'react';

export default function FeedbackList({feedbacks = []}) {
    return (
        <div className="feedback-list">
            {feedbacks.map(({name, email, rating, comment}, index) => (
                <div key={index}>
                    {name}
                    {email}
                    {rating}
                    {comment}
                </div>
            ))}
        </div>
    )
}