import { createContext, useReducer } from "react";
import AuthReducer from "../context/AuthReducer";

const INITIAL_STATE = {
  user: { 
    _id: "639dc37fe7b27cc949e0a0c6",
    username: "Pooja",
    email: "pooja@gmail.com",
    profilePicture: "person2.jpg",
    coverPicture: "post3.jpg",
    isAdmin: false,
    followers: [],
    followings: [],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
        {children}
    </AuthContext.Provider>
  );
};
