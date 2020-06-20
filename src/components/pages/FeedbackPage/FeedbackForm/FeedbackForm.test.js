import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { render, fireEvent, wait, waitForElement } from '@testing-library/react'

import FeedbackPage from "./FeedbackPage";

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

it('should have no feedback in initial load', async () => {
    
    const mock = jest.fn();
    const { container, getByLabelText, getByTestId } = render(<FeedbackPage/>);

    const name = await waitForElement(() => getByLabelText("name", { exact: false, selector: "input" }));
    const email = await waitForElement(() => getByLabelText("email", { exact: false, selector: "input" }));
    const button = await waitForElement(() => getByTestId("submitButton"));

    fireEvent.change(name, {target: {value: fakeFeedback.name}});
    fireEvent.change(email, {target: {value: fakeFeedback.email}});

    fireEvent.click(button);

    wait(() => {
        expect(mock).toBeCalled();
    });
});



