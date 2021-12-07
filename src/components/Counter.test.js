import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter component", () => {
  test("deve iniciar o título com o valor zero(0)", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");
    expect(counterTitle).toBeInTheDocument();
  });

  test("deve conter a classe counter__title no título", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");
    expect(counterTitle).toHaveClass("counter__title");
  });

  test("não deve conter as classe counter__title--increment e counter__title--decrement no título", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");
    expect(counterTitle).not.toHaveClass("counter__title--increment");
    expect(counterTitle).not.toHaveClass("counter__title--decrement");
  });

  test("deve conter um botão incrementar", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {name: /Increment/i, });
    expect(buttonIncrement).toBeInTheDocument();
  });
  
  test("botão incrementar deve conter as classes counter__button e counter__button--increment", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {name: /Increment/i, });
    expect(buttonIncrement).toHaveClass("counter__button");
    expect(buttonIncrement).toHaveClass("counter__button--increment");
  });

  test("deve incrementar + 1 quando clicar no botão incrementar", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {name: /Increment/i, });
    expect(screen.queryByText("1")).toBeNull();
    userEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("deve adicionar a classe counter__title--increment no título quando clicar no botão incrementar", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {name: /Increment/i, });
    expect(screen.queryByText("0")).not.toHaveClass("counter__title--increment");
    userEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toHaveClass("counter__title--increment");
  });

  test("deve conter um botão decrementar", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {name: /Decrement/i, });
    expect(buttonIncrement).toBeInTheDocument();
  });

  test("botão decrementar deve conter as classes counter__button e counter__button--increment", () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole("button", {name: /Decrement/i, });
    expect(buttonIncrement).toHaveClass("counter__button");
    expect(buttonIncrement).toHaveClass("counter__button--decrement");
  });

  test("deve decrementar - 1 quando clicar no botão decrementar", () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {name: /Decrement/i, });
    expect(screen.queryByText("-1")).toBeNull();
    userEvent.click(buttonDecrement);
    expect(screen.getByText("-1")).toBeInTheDocument();

  });

  test("deve adicionar a classe counter__title--decrement no título quando clicar no botão decrementar", () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole("button", {name: /Decrement/i, });
    expect(screen.queryByText("0")).not.toHaveClass("counter__title--decrement");
    userEvent.click(buttonDecrement);
    expect(screen.getByText("-1")).toHaveClass("counter__title--decrement");
  });

});
