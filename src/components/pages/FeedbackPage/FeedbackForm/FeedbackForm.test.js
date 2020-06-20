import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, wait, waitForElement } from '@testing-library/react'

import FeedbackForm from "./FeedbackForm";
import { validate } from './../FeedbackValidation/validation';

const fakeFeedback = {
    name: 'John Smith',
    email: 'john.smith@gmail.com',
    rating: 3,
    comment: '',
};

// let container = null;

// beforeEach(() => {
//     container = document.createElement("div");
//     document.body.appendChild(container);
// });

// afterEach(() => {
//     // cleanup on exiting
//     ReactDOM.unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });

// it("renders without any error", () => {
//     act(() => {
//         ReactDOM.render(<FeedbackPage />, container);
//     });
// });

// it('should render title', () => {
//     const { getByTestId } = render(<FeedbackPage feedbacks={[]} />, container);
//     expect(getByTestId("page-title")).toHaveTextContent("Feedback Form");
// });

const handleSubmit = jest.fn();

it('should have no feedback in initial load', async () => {
    const initialValues = {
        name: '',
        email: '',
        rating: 0,
        comment: '',
    };
    const { container, getByTestId } = render(<FeedbackForm handleFormSubmit={handleSubmit} initialValues={initialValues} validate={validate} />);
    const form = container.querySelector('form[name="feedback-form"]');

    const name = container.querySelector('[name="name"]');
    const email = container.querySelector('[name="email"]');
    const button = await waitForElement(() => getByTestId("submitButton"));


    // fireEvent.change(name, {target: {value: fakeFeedback.name}});
    // fireEvent.change(email, {target: {value: fakeFeedback.email}});

    fireEvent.change(name, { target: { value: "mail@email.com" } });
    fireEvent.change(email, { target: { value: "mail@email.com" } });
    fireEvent.click(button);
    

    // fireEvent.submit(form);
    await wait(() => {
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
});
