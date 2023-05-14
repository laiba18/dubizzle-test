import { getDate } from "./helper";

it("should return date", () => {
    const timestamp = "2023-05-14T11:57:06Z";
    const formattedDate = "5/14/2023"
    expect(getDate(timestamp)).toBe(formattedDate);
});