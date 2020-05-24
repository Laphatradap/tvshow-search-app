import axios from "axios";
import { fetchTVShowsSuccess, fetchTVShows } from "../actions";

jest.mock("axios");

describe("#fetchTVShowsSuccess", () => {
  describe("if given an array of tvshows", () => {
    const shows = [{}, {}];
    test("should return an action object", () => {
      const expected = {
        type: "FETCH_TVSHOWS_SUCCESS",
        shows,
      };

      expect(fetchTVShowsSuccess(shows)).toEqual(expected);
    });
    test("the payload of whats returned should have the same length as the shows array", () => {
      const action = fetchTVShowsSuccess(shows);
      expect(action.shows).toHaveLength(shows.length);
    });
  });
});

describe("#fetchTVShows", () => {
  describe("when called", () => {
    test("should dispatch an action FETCH_TVSHOWS_SUCCESS", async () => {
      const fakeShows = [];
      const response = { data: fakeShows };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      await fetchTVShows()(dispatch);
      expect(dispatch).toHaveBeenCalledWith(fetchTVShowsSuccess(fakeShows));
    });
  });
});
