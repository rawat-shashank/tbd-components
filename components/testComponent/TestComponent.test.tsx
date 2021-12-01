import React from "react";
import { render } from "@testing-library/react";

import { TestComponent } from "./TestComponent";
import { TestComponentProps } from "./TestComponent.types";

describe("Test Component", () => {
  let props: TestComponentProps;

  beforeEach(() => {
    props = {
      theme: "primary",
    };
  });

  const renderComponent = () => render(<TestComponent {...props} />);

  it("primary should have background color as white", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toHaveStyle({ backgroundColor: "white" });
  });

  it("secondary should have background color set as black", () => {
    props.theme = "secondary";
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toHaveStyle({ backgroundColor: "black" });
  });
});
