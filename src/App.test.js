import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";
import { elementRoles } from "./__constants__/query.constants";
import { labels } from "./__constants__/app.constants";

/**
 * Mocking ChildComponent component as we don't want to test the implemenation of this ChildComponent
 */
jest.mock("./components", () => {
  return {
    __esModule: true,
    ...jest.requireActual("./components"), // Use the actual module implementation for non-mocked exports
    ChildComponent: ({ buttonComponent }) => (
      <>{buttonComponent("testingButtonData")}</>
    ),
  };
});

/**
 * Mocking ParentComponent which has default export
 */

jest.mock("./components/ParentComponent", () => {
  return {
    __esModule: true,
    default: ({ children }) => <>{children}</>,
  };
});

describe("Test App component", () => {
  test("Check for the presence of button in the private component/function - buttonComponent and trigger an event to show the returned text on the ui", () => {
    render(<App />);

    /**
     * Now here you can get the button with the name 'ButtonOfChildComponent' from the DOM as we are mocking
     * ChildComponent with buttonComponent prop and it should return 'testingButtonData' on button click
     *
     * In our App component we have buttonCell as internal function so we no need to mock that function as
     * we are doing unit testing on App component
     *
     * Suppose if buttonCell function is imported from other file then you an mock that buttonCell function and test it
     *  */

    const privateButtonElement = screen.getByRole(elementRoles.button, {
      name: labels.buttonOfChildComponent,
    });

    expect(privateButtonElement).toBeInTheDocument();

    /**
     * Before button click 'testingButtonData' text should not be there in the DOM
     */
    const dataElementBeforeButtonClick = screen.queryByText(
      labels.testingButtonData
    );

    expect(dataElementBeforeButtonClick).not.toBeInTheDocument();

    fireEvent.click(privateButtonElement);
    /**
     * On button click we are setting the state with value 'testingButtonData' in mock component and
     * it should visible in the DOM
     */

    const dataElementAfterButtonClick = screen.getByText(
      labels.testingButtonData
    );

    expect(dataElementAfterButtonClick).toBeInTheDocument();
  });
});
