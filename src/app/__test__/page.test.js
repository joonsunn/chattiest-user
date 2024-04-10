import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../page";

describe("Page", () => {
  it("renders a heading for upload", () => {
    render(<Page />);

    // const heading = screen.getByRole("heading", { level: 1 });
    const heading = screen.getByText("Upload a log file (.txt)");
    expect(heading).toBeInTheDocument();
  });
  it("renders a heading for results", () => {
    render(<Page />);

    const heading = screen.getByText("Results:");
    expect(heading).toBeInTheDocument();
  });
  it("renders a button for upload", () => {
    render(<Page />);
    const button = screen.getByRole("button", { name: /upload/i });
    expect(button).toBeInTheDocument();
  });
  it("renders a button for reset", () => {
    render(<Page />);
    const button = screen.getByRole("button", { name: /reset/i });
    expect(button).toBeInTheDocument();
  });
});
