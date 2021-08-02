import style from "../../App.module.css";
import Game from "./Game/Game";


const Allgames = (props) => {
    return (
        <div className={style.bottom_block}>{
            props.data.map(game=> <Game key ={game.id} image = {game.img} name = {game.name} addToFavorite = {props.addToFavorite} game = {game}/>)
        }</div>
    )
}

export default Allgames