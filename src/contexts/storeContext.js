import { createContext, useReducer } from "react";

export const StoreContext = createContext();
export const DispatchContext = createContext();

const initialState = {
  basket: [],
};

function reducer(state, action) {
  switch (action.action) {
    case "ADD_PRODUCT":
      console.log(state, action);
      return { ...state, basket: state.basket.concat(action.payload) };
      //   add to basket
      // if it exists
      // if it doesnt, create it and add one
      return [];
  }
}

export const StoreProvider = ({ children }) => {
  //useReducer it is just a useState that returns a state and an update method
  const [data, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={data}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StoreContext.Provider>
  );
};
