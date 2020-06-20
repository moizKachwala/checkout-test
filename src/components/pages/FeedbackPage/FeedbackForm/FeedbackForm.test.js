import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { render, fireEvent, wait, waitForElement } from '@testing-library/react'

import FeedbackForm from "./FeedbackForm";

const fakeFeedback = {
    name: 'John Smith',
    email: 'john.smith@gmail.com',
    rating: 3,
    comment: '',
};

let container = null;
const handleSubmit = jest.fn();

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders without any error", () => {
    act(() => {
        ReactDOM.render(<FeedbackForm handleFormSubmit={handleSubmit} />, container);
    });
});

it('should not submit the form if the form is invalid', async () => {
    const { getByTestId } = render(<FeedbackForm handleFormSubmit={handleSubmit} />, container);

    // get the button
    const button = await waitForElement(() => getByTestId("submitButton"));

    // simulate click
    fireEvent.click(button);

    await wait(() => {
        expect(handleSubmit).toHaveBeenCalledTimes(0);
    });
});

it('should submit the form if valid', async () => {
    const { getByTestId, getByRole } = render(<FeedbackForm handleFormSubmit={handleSubmit} />, container);

    const name = await waitForElement(() => getByTestId("name-input"));
    const email = await waitForElement(() => getByTestId("email-input"));
    const rating = await waitForElement(() => getByRole('radio', {name: /5 stars/i }));
    const button = await waitForElement(() => getByTestId("submitButton"));

    // change event
    fireEvent.change(name, { target: { value: fakeFeedback.name }});
    fireEvent.change(email, {target: {value: fakeFeedback.email}});
    fireEvent.click(rating);
    fireEvent.click(button);

    await wait(() => {
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
});
