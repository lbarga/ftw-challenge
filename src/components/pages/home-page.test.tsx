import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import HomePage from "./home-page";

const setup = () => {
  const utils = render(<HomePage />);

  return {
    ...utils,
  };
};

describe("HomePage", () => {
  test("render home page correctly with table", async () => {
    const { getByText } = setup();

    expect(getByText("Serviços")).toBeInTheDocument();
    expect(getByText("Status")).toBeInTheDocument();
    expect(getByText("SERPRO")).toBeInTheDocument();
    expect(getByText("bom")).toBeInTheDocument();
    expect(getByText("Conselho Nacional de Justiça")).toBeInTheDocument();
    expect(getByText("apresentando lentidão")).toBeInTheDocument();
    expect(getByText("Tribunal de Justiça")).toBeInTheDocument();
    expect(getByText("fora do ar")).toBeInTheDocument();
  });
});
