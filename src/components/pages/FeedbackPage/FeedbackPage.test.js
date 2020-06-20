import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { render } from '@testing-library/react'

import FeedbackPage from "./FeedbackPage";

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