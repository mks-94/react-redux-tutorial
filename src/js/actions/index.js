import { ADD_ARTICLE } from "../constants/index";

export function addArtcle(payload) {
  return {
    type: ADD_ARTICLE,
    payload,
  };
}
