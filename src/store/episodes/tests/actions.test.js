import axios from "axios";
import { fetchEpisodesSuccess, fetchEpisodes } from "../actions";

jest.mock("axios");

describe("#fetchEpisodesSuccess", () => {
  describe("if given an array of episodes", () => {
    const episodes = [{}, {}];
    test("should return an action object", () => {
      const expected = {
        type: "FETCH_EPISODES_SUCCESS",
        episodes,
      };

      expect(fetchEpisodesSuccess(episodes)).toEqual(expected);
    });
    test("the payload of whats returned should have the same length as the episodes array", () => {
      const action = fetchEpisodesSuccess(episodes);
      expect(action.episodes).toHaveLength(episodes.length);
    });
  });
});

describe("#fetchEpisode", () => {
  describe("when called", () => {
    test("should dispatch an action FETCH_EPISODES_SUCCESS", async () => {
      const response = { data: [{}, {}] }; //what gets from axios
      const fakeEpisodes = { data: response.data, showId: "test_showId" };

      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      await fetchEpisodes("test_showId")(dispatch);
      expect(dispatch).toHaveBeenCalledWith(fetchEpisodesSuccess(fakeEpisodes));
    });
  });
});
