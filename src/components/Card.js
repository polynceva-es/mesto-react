import React from "react";
function Card (props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return(
    <article className="card">
        <button className="button button_type_delete" type="button" aria-label="Удалить карточку"/>
        <img className="card__image" src={props.card.link} onClick={handleClick}/>
        <div className="card__item">
            <h2 className="card__caption">{props.card.name}</h2>
            <div className="card__like">
                <button className="button button_type_like" type="button" aria-label="Поставить лайк"/>
                <p className="card__like_num">{props.card.likes.length}</p>
            </div>
        </div>
    </article>
    )
}

export default Card;

