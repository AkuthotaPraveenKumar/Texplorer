import { render, screen } from "@testing-library/react";
import Home from "./";

test("renders home with header", () => {
    render(<Home />);
    const defaultTopicNameHeader = screen.getByText(/react/i);
    expect(defaultTopicNameHeader).toBeInTheDocument();
});
