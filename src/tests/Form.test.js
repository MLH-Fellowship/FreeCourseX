import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Form from "../pages/Form";

// const mockOnSubmit = jest.fn((topic, learningStyle, difficulty, duration) => {
//     return Promise.resolve({ topic, learningStyle, difficulty, duration});
// });
const mockOnSubmit = jest.fn((data) => {
    return Promise.resolve({data});
});

describe("Form", () => {
    beforeEach(() => {
        render(<Form onSubmit={mockSubmit}/>)
    });
})