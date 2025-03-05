import React, { useContext } from "react";
import Produto from "./Produto";
import produtos from "@/mocks/produtos.json";
import Titulo from "@/components/Titulo";
import { useCartContext } from '../../hooks/useCartContext';

const Produtos = () => {

  const { addProduct } = useCartContext();

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
