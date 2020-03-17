import ShowMore from "./show-more";

const mockEvent = {
  preventDefault() {},
};

it(`Should show more be clicked`, () => {
  const handleClick = jest.fn();
  const component = mount(
      <ShowMore isVisible={true} onClick={handleClick} />
  );

  const showMoreButton = component.find(`.catalog__button`);
  showMoreButton.simulate(`click`, mockEvent);
  expect(handleClick.mock.calls.length).toBe(1);
});
