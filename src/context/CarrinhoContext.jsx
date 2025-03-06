import { createContext, useReducer, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

const initialState = [];

export const CarrinhoProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState);
    const [quantity] = useState(0);
    const [total] = useState(0);

    return (
        <CarrinhoContext.Provider value={{
            cart,
            dispatch,
            quantity,
            total,
        }}>
            {children}
        </CarrinhoContext.Provider>
    );
}
