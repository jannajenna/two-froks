import { createContext, useReducer } from "react";

export const StoreContext = createContext();
export const DispatchContext = createContext();

const initialState = {
  basket: [],
};

function reducer(state, action) {
  switch (action.action) {
    case "EMPTY_BASKET":
      return { ...state, basket: [] };
    case "REMOVE_ONE_PRODUCT":
      const nextBasket = state.basket.map((item) => {
        if (item.name === action.payload.name) {
          if (item.price.for2 === action.payload.price2) {
            const copy = { ...item };
            copy.amount--;
            return copy;
          }
          if (item.price.for3 === action.payload.price3) {
            const copy = { ...item };
            copy.amount2--;
            return copy;
          }
        } else {
          return item;
        }
      });
      const finalBasket = nextBasket.filter((item) => item.amount > 0);
      console.log(action);
      return { ...state, basket: finalBasket };
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
        if (action.payload.tentFor3quantity && action.payload.tentFor2quantity) {
          newItem.amount2 = action.payload.tentFor2quantity;
          newItem.amount3 = action.payload.tentFor3quantity;
          newItem.price2 = action.payload.price2;
          newItem.price3 = action.payload.price3;
        } else if (action.payload.tentFor3quantity) {
          newItem.amount3 = action.payload.tentFor3quantity;
          newItem.price3 = action.payload.price3;
        } else if (action.payload.tentFor2quantity) {
          newItem.amount2 = action.payload.tentFor2quantity;
          newItem.price2 = action.payload.price2;
        } else newItem.amount = action.payload.quantity;
        newItem.price = action.payload.price;
        return { ...state, basket: state.basket.concat(newItem) };
      }

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
