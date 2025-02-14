import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ 
  title, 
  items, 
  itemsArray, 
  path, 
  idPath 
}) => {
  const pathName = useLocation().pathname;
  const homePage = pathName === "/";

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} Populares</h2>
        {homePage ? (
          <Link className="item-list__link" to={path}>
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currPosition, index) => index < items)
          .map((currObj, index) => (
            <SingleItem
              // Enviar objeto para construção dos itens.
              {...currObj}
              // Criar chave única para cada um dos itens
              key={`${title}-${index}`}
              idPath={idPath}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
