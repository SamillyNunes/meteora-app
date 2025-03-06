import { useContext, useEffect, useMemo } from "react";
import { CarrinhoContext } from "@/context/CarrinhoContext";
import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_QUANTITY } from "../reducers/cartReducer";

// funcoes para usar no reducer:
const addProductAction = (newProduct) => {
  return {
    type: ADD_PRODUCT,
    payload: newProduct
  }
}

const removeProductAction = (productId) => {
  return {
    type: REMOVE_PRODUCT,
    payload: productId,
  }
}

const updateProductQuantityAction = (productId, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: {
      produtoId: productId,
      quantidade: quantity,
    }
  }
}

// o fato do arquivo comecar com use, sinaliza para o react que isso sera hook customizado
export const useCartContext = () => {
  const { cart, dispatch , quantity, total } =
    useContext(CarrinhoContext);

  const addProduct = (newProduct) => {
    dispatch(addProductAction(newProduct));
  };

  const removeProduct = (productId) => {
    const prod = cart.find(item => item.id ===productId);
    
    if(prod && prod.quantidade>1){
      dispatch(updateProductQuantityAction(productId, prod.quantidade-1));
    } else {
      dispatch(removeProductAction(productId));
    }
  };

  const deleteCartProduct = (productId) => {
    dispatch(removeProductAction(productId));
  };

  

  return {
    cart,
    total,
    quantity,
    addProduct,
    removeProduct,
    deleteCartProduct,
  };
};
