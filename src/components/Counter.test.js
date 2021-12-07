import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter component", () => {
  test("deve iniciar o título com o valor zero(0)", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");
    expect(counterTitle).toBeInTheDocument();
  });
});
