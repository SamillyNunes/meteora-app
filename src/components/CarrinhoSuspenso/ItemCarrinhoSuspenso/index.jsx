import React from "react";
import Quantidade from "@/components/Quantidade";
import Botao from "@/components/Botao";
import ValorFormatado from "@/components/ValorFormatado";
import { useCartContext } from "@/hooks/useCartContext";

const ItemCarrinhoSuspenso = ({
  itemCarrinho,
}) => {
  const { addProduct, removeProduct, deleteCartProduct } = useCartContext();
  return (
    <li>
      <>
        <div className="produto">
          <img
            className="imagem__produto"
            src={itemCarrinho.src}
            alt={itemCarrinho.alt}
          />
          <div className="d-flex flex-column gap-3 w-100">
            <p className="fw-semibold fs-5 m-0">{itemCarrinho.titulo}</p>
            <Quantidade
              itemCarrinho={itemCarrinho}
              adicionarProduto={addProduct}
              removerProduto={removeProduct}
            />
            <ValorFormatado valor={itemCarrinho.preco} />
          </div>
          <Botao
            variant="deleteItem"
            aria-label="Excluir"
            onClick={() => deleteCartProduct(itemCarrinho.id)}
          >
            delete_forever
          </Botao>
        </div>
        <div className="divisor my-5" />
      </>
    </li>
  );
};

export default ItemCarrinhoSuspenso;
