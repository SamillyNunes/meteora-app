import React from "react";
import ItemCarrinhoSuspenso from "@/components/CarrinhoSuspenso/ItemCarrinhoSuspenso";
import ItemCarrinho from "@/components/ItemCarrinho";
import { useLocation } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";

const ListaProdutosCarrinho = () => {
  const location = useLocation();

  const { cart } = useCartContext();

  return (
    <ul className="list-unstyled">
      {cart.length === 0 ? (
        <p className="text-center my-5">Não há produtos no carrinho</p>
      ) : (
        cart.map((itemCarrinho) => {
          return location.pathname === "/carrinho" ? (
            <ItemCarrinho key={itemCarrinho.id} itemCarrinho={itemCarrinho} />
          ) : (
            <ItemCarrinhoSuspenso
              key={itemCarrinho.id}
              itemCarrinho={itemCarrinho}
            />
          );
        })
      )}
    </ul>
  );
};

export default ListaProdutosCarrinho;
