import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

const initialState = [];

export const CarrinhoProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  // acumulator eh a var responsavel pelo valor reduzido em um, ou seja, o que esta acumulando
  // o segundo parametro eh o valor inicial
  // o uso do useMemo vai fazer com que ele guarde a informacao do calculo e mantenha ela ate
  // que seja necessario calcular novamente
  const { totalTemp, quantityTemp } = useMemo(() => {
    return cart.reduce(
      (accumulator, product) => ({
        quantityTemp: accumulator.quantityTemp + product.quantidade,
        totalTemp: accumulator.totalTemp + product.preco * product.quantidade,
      }),
      {
        quantityTemp: 0,
        totalTemp: 0,
      }
    );
  }, [cart]);

  useEffect(() => {
    setQuantity(quantityTemp);
    setTotal(totalTemp);
  });

  return (
    <CarrinhoContext.Provider
      value={{
        cart,
        dispatch,
        quantity,
        total,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
