import { render } from "@testing-library/react";
import GistList from "./GistList";

describe("Gist list test cases", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<GistList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
