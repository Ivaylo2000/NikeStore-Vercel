import { createStore } from "redux";

const cartSlice = (state = { items: [] }, action) => {
  if (action.type === "Add") {
    const updatedState = {
      ...state,
      items: [...state.items, action.payload],
    };
    console.log(updatedState.items);
    return updatedState;
  }

  if (action.type === "Remove") {
    const itemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );

    if (itemIndex !== -1) {
      const updatedItems = [
        ...state.items.slice(0, itemIndex),
        ...state.items.slice(itemIndex + 1),
      ];

      return {
        ...state,
        items: updatedItems,
      };
    }
  }

  if (action.type === "RemoveAll") {
    return {
      ...state,
      items: [],
    };
  }
  return state;
};

const store = createStore(cartSlice);

export default store;
