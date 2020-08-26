import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
import userReducer from "./user";
import usersReducer from "./users";
import eventsReducer from "./events";

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  events: eventsReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;