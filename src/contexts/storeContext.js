import { createContext, useReducer } from "react";

export const StoreContext = createContext();
export const DispatchContext = createContext();

const initialState = {
  basket: [],
};

function reducer(state, action) {
  switch (action.action) {
    case "RESERVE_TENT":
      const newItem = action.payload;
      newItem.id = action.payload.id;
      return { ...state, basket: state.basket.concat(newItem) };

    case "REMOVE_TICKET":
      const newBasket1 = state.basket.filter((item) => !(item.name === action.payload.name));
      return { ...state, basket: newBasket1 };

    case "REMOVE_TENT":
      const nextBasket2 = state.basket.map((item) => {
        if (item.name === action.payload.name && item.price2 === action.payload.price) {
          const copy = { ...item };
          copy.quantity2 = 0;
          return copy;
        }
        if (item.name === action.payload.name && item.price3 === action.payload.price) {
          const copy = { ...item };
          copy.quantity3 = 0;
          return copy;
        } else {
          return item;
        }
      });
      const nextBasket3 = nextBasket2.filter((item) => !(item.name === action.payload.name && item.quantity2 === 0 && item.quantity3 === 0));
      return { ...state, basket: nextBasket3 };

    case "REMOVE_ONE_TENT":
      const nextBasket = state.basket.map((item) => {
        if (item.name === action.payload.name && item.price2 === action.payload.price) {
          const copy = { ...item };
          copy.quantity2--;
          return copy;
        }
        if (item.name === action.payload.name && item.price3 === action.payload.price) {
          const copy = { ...item };
          copy.quantity3--;
          return copy;
        } else {
          return item;
        }
      });
      return { ...state, basket: nextBasket };

    case "REMOVE_ONE_TICKET":
      const netBasket = state.basket.map((item) => {
        if (item.name === action.payload.name) {
          const copy = { ...item };
          copy.quantity--;
          return copy;
        } else {
          return item;
        }
      });
      const finlBasket = netBasket.filter((item) => !(item.name === action.payload.name && item.quantity === 0));
      return { ...state, basket: finlBasket };

    case "ADD_TENT":
      const exist = state.basket.find((item) => item.name === action.payload.name);
      if (exist) {
        const nextBasket = state.basket.map((item) => {
          if (item.name === action.payload.name && item.price2 === action.payload.price) {
            const copy = { ...item };
            copy.quantity2++;
            return copy;
          }
          if (item.name === action.payload.name && item.price3 === action.payload.price) {
            const copy = { ...item };
            copy.quantity3++;
            return copy;
          } else {
            return item;
          }
        });
        return { ...state, basket: nextBasket };
      } else {
        const newItem = {};
        if (action.payload.tentFor3quantity && action.payload.tentFor2quantity) {
          newItem.quantity2 = action.payload.tentFor2quantity;
          newItem.quantity3 = action.payload.tentFor3quantity;
          newItem.price2 = action.payload.price2;
          newItem.price3 = action.payload.price3;
        }
        if (action.payload.tentFor3quantity) {
          newItem.quantity3 = action.payload.tentFor3quantity;
          newItem.price3 = action.payload.price3;
        } else {
          newItem.quantity2 = action.payload.tentFor2quantity;
          newItem.price2 = action.payload.price2;
        }
        newItem.name = action.payload.name;
        newItem.available = action.payload.available;
        return { ...state, basket: state.basket.concat(newItem) };
      }

    case "ADD_TICKET":
      const exists = state.basket.find((item) => item.name === action.payload.name);
      if (exists) {
        const nextBasket = state.basket.map((item) => {
          if (item.name === action.payload.name) {
            // found it
            const copy = { ...item };
            copy.quantity++;
            return copy;
          } else {
            return item;
          }
        });
        return { ...state, basket: nextBasket };
      } else {
        const newItem = action.payload;
        newItem.quantity = action.payload.quantity;
        newItem.price = action.payload.price;
        return { ...state, basket: state.basket.concat(newItem) };
      }
  }
  // name: props.name,
  // price: null,
  // quantity: null,
  // price2: props.price2,
  // price3: props.price3,
  // tentFor2quantity: tentFor2quantity,
  // tentFor3quantity: tentFor3quantity,
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
