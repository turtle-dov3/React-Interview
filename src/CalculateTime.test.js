import calculateTime from "./CalculateTime";

test('renders the page to the screen', () => {
    expect(calculateTime(90)).toEqual("3:00");
});
