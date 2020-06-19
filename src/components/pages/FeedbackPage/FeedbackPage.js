import React from 'react';
import { Formik } from 'formik';

export default function FeedbackPage(props) {

    const handleSumit = (payload) => {
        console.log(payload);
    }

    return (
        <>
            <Formik
                initialValues={{ name: 'jared' }}
                onSubmit={(values, actions) => {
                    handleSumit(values);
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.name}
                            name="name"
                        />
                        {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </>
    );
}