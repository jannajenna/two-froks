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
      const exists = state.basket.find((item) => item.name === action.payload.name);
      if (exists) {
        const nextBasket = state.basket.map((item) => {
          if (item.name === action.payload.name) {
            // found it
            const copy = { ...item };
            copy.amount++;
            return copy;
          } else {
            return item;
          }
        });
        return { ...state, basket: nextBasket };
      } else {
        const newItem = action.payload;
        newItem.amount = 1;
        return { ...state, basket: state.basket.concat(newItem) };
      }
      // add to basket
      // if it exists, add 1
      // if it does not: create it and add one

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
