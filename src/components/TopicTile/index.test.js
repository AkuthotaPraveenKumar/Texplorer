import { render, screen } from "@testing-library/react";
import TopicTile from "./";

test("renders TopicTile & verify stars", () => {
    render(<TopicTile topic="myTopic" stars={30} relatedTo="zebra" />);
    const topic = screen.getByText(/myTopic/);
    const stars = screen.getByText(/30/);
    const relatedToBadge = screen.getByText(/z/);
    expect(topic).toBeInTheDocument();
    expect(stars).toBeInTheDocument();
    expect(relatedToBadge).toBeInTheDocument();
});
