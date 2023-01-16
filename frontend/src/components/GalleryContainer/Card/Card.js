import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = ({ image, name, id, index,small }) => {


  return (
    <div className={small ? 'smallCardContainer' : `card c${index + 1}`} key={id}>
      <div className={small ? 'smallCardWrapper' : "cardWrapper"}>
        <div className={ small ? 'smallPhotoWrapper' : "photoWrapper"}>
          <img src={image} alt={name} className={small ? 'smallPhoto':"photo"} />
        </div>
        <NavLink to={`/gallery-info/${id}`} className={small ? 'smallCardNameWrapper' : "nameWrapper"}>
          <span className = {small ? 'smallName' : 'name'}>{name}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
