import { createContext, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    return (
        <CarrinhoContext.Provider value={{
            cart,
            setCart,
        }}>
            {children}
        </CarrinhoContext.Provider>
    );
}
