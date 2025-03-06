import { useContext, useEffect } from "react";
import { CarrinhoContext } from "@/context/CarrinhoContext";

// o fato do arquivo comecar com use, sinaliza para o react que isso sera hook customizado
export const useCartContext = () => {
  const { cart, setCart, quantity, setQuantity, total, setTotal } =
    useContext(CarrinhoContext);

  const changeQuantity = (id, qty) => {
    return cart.map((item) => {
      if (item.id === id) item.quantidade += qty;

      return item;
    });
  };

  const addProduct = (newProduct) => {
    const hasTheProduct = cart.some((c) => c.id === newProduct.id);

    if (!hasTheProduct) {
      newProduct.quantidade = 1;
      return setCart([...cart, newProduct]);
    }

    const updatedCart = changeQuantity(newProduct.id, 1);

    // se o produto ja existir, vou apenas aumentar a quantidade de itens
    setCart([...updatedCart]);
  };

  const removeProduct = (productId) => {
    const product = cart.find((c) => c.id === productId);

    if (!product) return;

    if (product.quantidade > 1) {
      const updatedCart = changeQuantity(productId, -1);
      return setCart([...updatedCart]);
    }

    const cartWithoutItem = cart.filter((p) => p.id !== productId);
    setCart(cartWithoutItem);
  };

  const deleteCartProduct = (productId) => {
    const products = cart.filter((item) => item.id !== productId);

    setCart(products);
  };

  useEffect(() => {
    // acumulator eh a var responsavel pelo valor reduzido em um, ou seja, o que esta acumulando
    // o segundo parametro eh o valor inicial
    const { totalTemp, quantityTemp } = cart.reduce(
      (accumulator, product) => ({
        quantityTemp: accumulator.quantityTemp + product.quantidade,
        totalTemp: accumulator.totalTemp + product.preco * product.quantidade,
      }),
      {
        quantityTemp: 0,
        totalTemp: 0,
      }
    );

    setQuantity(quantityTemp);
    setTotal(totalTemp);
  }, [cart]);

  return {
    cart,
    setCart,
    total,
    quantity,
    addProduct,
    removeProduct,
    deleteCartProduct,
  };
};
