import { render, screen } from "@testing-library/react";
import Header from "./";

test("renders Header with custom Heading", () => {
    render(<Header heading="myHeading" />);
    const heading = screen.getByText(/myHeading/i);
    expect(heading).toBeInTheDocument();
});
