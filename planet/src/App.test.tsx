import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders tract cards", async () => {
  render(<App />);
  const tractCards = await screen.findAllByTestId("tract-card");
  expect(tractCards).toBeInTheDocument();
});
