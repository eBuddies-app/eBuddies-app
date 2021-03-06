import axios from "axios";
import { serverLink } from "./serverLink";

const CREATE_MESSAGE = "CREATE_MESSAGE";

export const createMesssage = (message) => {
  return {
    type: CREATE_MESSAGE,
    message,
  };
};

export const createMesssageThunk = (message) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${serverLink}/api/messages`, message);
    return dispatch(createMesssage(data));
  } catch (error) {
    console.log(error);
  }
};
export default function messageReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return { ...state, message: action.message };
    default:
      return state;
  }
}
