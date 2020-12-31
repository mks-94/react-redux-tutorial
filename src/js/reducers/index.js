import { ADD_ARTICLE } from "../constants/index";

const initialState = {
  articles: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    console.log(state, "Is state update here!");
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
    });
  }
  console.log(state, "Is state updated here!");
  return state;
}
export default rootReducer;
