import React from 'react';
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { render } from '@testing-library/react'
import FeedbackRating from './FeedbackRating';

const feedbacks = [
    {
        name: 'John Smith',
        email: 'john.smith@gmail.com',
        rating: 3,
        comment: '',
    },
    {
        name: 'Jack Wills',
        email: 'jack.wills@gmail.com',
        rating: 2,
        comment: '',
    }
];

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders without crashing", () => {
    act(() => {
        ReactDOM.render(<FeedbackRating feedbacks={feedbacks} />, container);
    });
});

it("should render subheader with zero ratings", () => {
    const { getByText } = render(<FeedbackRating feedbacks={[]} />, container);
    expect(getByText(/total ratings/)).toHaveTextContent("0");
});

it("should render subheader with 2 ratings", () => {
    const { getByText } = render(<FeedbackRating feedbacks={feedbacks} />, container);
    expect(getByText(/total ratings/)).toHaveTextContent("2");
});