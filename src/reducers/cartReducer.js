export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = action.payload;
      const productIndex = state.findIndex((item) => item.id === newProduct.id);

      if (productIndex === -1) {
        newProduct.quantidade = 1;
        return [...state, newProduct];
      }

      return state.map((item, index) =>
        index === productIndex
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );

    case REMOVE_PRODUCT:
      const productId = action.payload;
      return state.filter((item) => item.id !== productId);

    case UPDATE_QUANTITY:
      const { produtoId, quantidade } = action.payload;
      return state.map((item) =>
        item.id === produtoId ? { ...item, quantidade } : item
      );
    default:
        return state;
  }
};
