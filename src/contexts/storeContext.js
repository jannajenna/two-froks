import { createContext, useReducer } from "react";

export const StoreContext = createContext();
export const DispatchContext = createContext();

const initialState = {
  basket: [],
};

function reducer(state, action) {
  switch (action.action) {
    case "REMOVE_ONE_PRODUCT":
      const nextBasket = state.basket.map((item) => {
        if (item.name === action.payload.name) {
          const copy = { ...item };
          copy.quantity--;
          return copy;
        } else {
          return item;
        }
      });
      return { ...state, basket: nextBasket };
    case "ADD_PRODUCT":
      console.log(state, action);
      // const exists = state.basket.find((item) => item.name === action.payload.name);
      // if (exists) {
      //   const nextBasket = state.basket.map((item) => {
      //     if (item.name === action.payload.name) {
      //       // found it
      //       // const copy = { ...item };
      //       // copy.amount++;
      //       // or???
      //       // copy.quantity + action.payload.quantity;
      //       return item;
      //     } else {
      //       return item;
      //     }
      //   });
      //   return { ...state, basket: nextBasket };
      // } else {
      const newItem = action.payload;
      if (action.payload.tentFor3quantity && action.payload.tentFor2quantity) {
        newItem.amount = action.payload.tentFor3quantity + "x tent for 3, " + action.payload.tentFor2quantity + "x tent for 2";
        newItem.price = action.payload.totalPrice;
      } else if (action.payload.tentFor3quantity) {
        newItem.amount = action.payload.tentFor3quantity + "x tent for 3";
        newItem.price = action.payload.totalPrice;
      } else if (action.payload.tentFor2quantity) {
        newItem.amount = action.payload.tentFor2quantity + "x tent for 2";
        newItem.price = action.payload.totalPrice;
      } else newItem.amount = action.payload.quantity + "x";
      newItem.price = action.payload.totalPrice;
      return { ...state, basket: state.basket.concat(newItem) };
      // }

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
