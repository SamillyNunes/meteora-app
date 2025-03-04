import React, { useContext } from "react";
import Produto from "./Produto";
import produtos from "@/mocks/produtos.json";
import Titulo from "@/components/Titulo";
import { CarrinhoContext } from "@/context/CarrinhoContext";

const Produtos = () => {
  const {cart, setCart} = useContext(CarrinhoContext);

  const addProduct = (newProduct)=>{
    const hasTheProduct = cart.some(c=> c.id===newProduct.id);

    if(!hasTheProduct){
      newProduct.quantidade=1;
      return setCart([...cart, newProduct]);
    }

    // se o produto ja existir, vou apenas aumentar a quantidade de itens
    setCart((oldCart)=>oldCart.map(cartItem => {
      if(cartItem.id===newProduct.id){
        cartItem.quantidade+=1;
      }
      return cartItem;
    }));
  }

  const removeProduct = (productId) => {
    const product = cart.find(c => c.id === productId);

    if(!product) return;

    if(product.quantidade>1){
      return setCart((oldCart) => oldCart.map(item => {
        if(item.id===productId){
          item.quantidade-=1;
        }
        return item;
      }));
    }

    const cartWithoutItem = cart.filter(p => p.id!==productId);
    setCart(cartWithoutItem);

  }

  return (
    <section role="produtos" aria-label="Produtos que estão bombando!">
      <Titulo>Produtos que estão bombando!</Titulo>
      <div className="container row mx-auto">
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            {...produto}
            adicionarProduto={addProduct}
          />
        ))}
      </div>
    </section>
  );
};

export default Produtos;
