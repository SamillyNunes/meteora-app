import { createContext, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    return (
        <CarrinhoContext.Provider value={{
            cart,
            setCart,
            quantity,
            setQuantity,
            total,
            setTotal,
        }}>
            {children}
        </CarrinhoContext.Provider>
    );
}
