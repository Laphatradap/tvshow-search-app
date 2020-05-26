import reducer from "../reducer";

describe("episodeReducer", () => {
  const initialState = [];

  describe("if given no state and a random action", () => {
    test("returns the inital state", () => {
      const newState = reducer(undefined, { type: "ANY" });
      expect(newState).toEqual(initialState);
    });
  });

  describe("when given a FETCH_EPISODES_SUCCESS action type", () => {
    test("returns a new state with the payload array included", () => {
      const episodes = { data: [{}, {}], showId: "" };
      const action = {
        type: "FETCH_EPISODES_SUCCESS",
        episodes,
      };
      const newState = reducer(initialState, action);
      expect(newState).toEqual([...initialState, episodes]);
    });
  });
});
