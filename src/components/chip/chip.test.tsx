import { ServiceStatus } from "@/models/service-model";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Chip } from "./chip";

const setup = (status: ServiceStatus = ServiceStatus.UP) => {
  const utils = render(<Chip status={status} />);
  const container = utils.getByTestId("chip");

  return {
    ...utils,
    container,
  };
};

describe("Chip", () => {
  test("renders correct label for UP status", async () => {
    const { getByText } = setup(ServiceStatus.UP);
    expect(getByText("bom")).toBeInTheDocument();
  });

  test("renders correct label for WARNING status", () => {
    const { getByText } = setup(ServiceStatus.WARNING);

    expect(getByText("apresentando lentidão")).toBeInTheDocument();
  });

  test("renders correct label for ERROR status", () => {
    const { getByText } = setup(ServiceStatus.ERROR);
    expect(getByText("fora do ar")).toBeInTheDocument();
  });

  test("renders correct color for UP status", async () => {
    const { container } = setup(ServiceStatus.UP);
    expect(container).toHaveStyle("background-color: #4caf50;");
  });

  test("renders correct color for WARNING status", () => {
    const { container } = setup(ServiceStatus.WARNING);
    expect(container).toHaveStyle("background-color: #ff9800;");
  });

  test("renders correct color for ERROR status", () => {
    const { container } = setup(ServiceStatus.ERROR);
    expect(container).toHaveStyle("background-color: #f44336;");
  });
});
