import axios from "axios";
import { fetchEpisodesSuccess, fetchEpisodes } from "../actions";

jest.mock("axios");

describe("#fetchEpisodesSuccess", () => {
  describe("if given an array of episodes", () => {
    const episodes = [{}, {}];
    test("should return an action object", () => {
      const expected = {
        type: "FETCH_EPISODES_SUCESS",
        episodes,
      };

      expect(fetchEpisodesSuccess(episodes)).toEqual(expected);
    });
    test("the payload of whats returned should have the same length as the shows array", () => {
      const action = fetchEpisodesSuccess(episodes);
      expect(action.episodes).toHaveLength(episodes.length);
    });
  });
});

describe("#fetchEpisode", () => {
  describe("when called", () => {
    test("should dispatch an action FETCH_EPISODES_SUCESS", async () => {
      const fakeEpisodes = [{}, {}];
      const response = { data: fakeEpisodes };

      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      // await expect(fetchEpisodes('showId')).resolve.toEqual(response)

      const dispatch = jest.fn();
      await fetchEpisodes("test_showId")(dispatch);
      expect(dispatch).toHaveBeenCalledWith(fetchEpisodesSuccess(fakeEpisodes));
    });
  });
});
