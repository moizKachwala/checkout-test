import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { render, fireEvent } from '@testing-library/react'

import FeedbackPage from "./FeedbackPage";

const fakeFeedback = {
    name: 'John Smith',
    email: 'john.smith@gmail.com',
    rating: 3,
    comment: '',
};

let container = null;

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
        ReactDOM.render(<FeedbackPage />, container);
    });
});

it('should render title', () => {
    const { getByTestId } = render(<FeedbackPage feedbacks={[]} />, container);
    expect(getByTestId("page-title")).toHaveTextContent("Feedback Form");
});

it('should have no feedback in initial load', () => {
    const setFeedbacks = jest.fn();
    const {getByText} = render(<FeedbackPage feedbacks={[]} />, container);
    const submitButton = getByText("Submit Feedback");
    fireEvent.click(submitButton);
    expect(setFeedbacks).toHaveBeenCalled();
});



