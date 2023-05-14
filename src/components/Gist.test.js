import { render } from "@testing-library/react";
import Gist from "./Gist";

const gist = {
  owner: {
    login
      : "maximymym"
  }
}

describe("Gist test cases", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<Gist gist={gist} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
