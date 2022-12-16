import { useState } from "react";

export default function Film(props) {

const [clicked, setClick] = useState(false);

const favoritesHandler = () => {
    if (clicked) {
        props.updateFavorites(props);
    } else {
        props.updateFavorites(props);
    }
    setClick(!clicked);
};

return (
    <div className='card'>
        <img className='small' src={props.image} alt={props.name}/>
        <h3></h3>
        <div><b>{props.name}</b></div>
        <div>Director(s): {props.director}</div>
        <h3></h3>
        <div>{props.time} min</div>
        <div>{props.genre} | {props.rating} | {props.score}⭐️</div>
        <h3></h3>
    <div>
        {clicked ? (
                <div>
                    <button onClick={favoritesHandler} className='remove'>Remove from Favorites</button>
                </div>
            ):(
            <button onClick={favoritesHandler}>Add to Favorites</button>
        )}
    </div>
    </div>
    )
}