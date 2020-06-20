import React from 'react';
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { render } from '@testing-library/react'
import FeedbackList from './FeedbackList';

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
        ReactDOM.render(<FeedbackList feedbacks={feedbacks} />, container);
    });
});

it("should render title without feedbacks", () => {
    const { getByTestId } = render(<FeedbackList feedbacks={[]} />, container);
    expect(getByTestId("title")).toHaveTextContent("No feedback added yet!");
});

it("should render title with feedbacks", () => {
    const { getByTestId } = render(<FeedbackList feedbacks={feedbacks} />, container);
    expect(getByTestId("title")).toHaveTextContent("All Feedbacks");
});

it("it should render two records in list", () => {
    const { getAllByTestId } = render(<FeedbackList feedbacks={feedbacks} />, container);
    expect(getAllByTestId(/^row-*/)).toHaveLength(2);
});