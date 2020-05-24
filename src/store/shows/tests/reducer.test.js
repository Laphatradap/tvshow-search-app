import reducer from "../reducer";
import { FETCH_TVSHOWS_SUCCESS } from "../actions";

describe("tvshowReducer", () => {
  const initialState = null;

  describe("if given no state and a random action", () => {
    test("returns the inital state", () => {
      const newState = reducer(undefined, { type: "ANY" });
      expect(newState).toEqual(initialState);
    });
  });

  // describe("when given a FETCH_TVSHOWS_SUCCESS action type", () => {
  //   test("returns a new state with the payload array included", () => {
  //     const shows = [];
  //     const action = { type: FETCH_TVSHOWS_SUCCESS, shows };
  //     const newState = reducer(initialState, action);
  //     // expect(newState).toHaveLength(shows.length);
  //     expect(newState).toEqual(shows);
  //   });
  // });
});
