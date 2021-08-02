import style from "../../App.module.css";
import Game from "../Comments/Game/Game";

const Favorite = (props) => {
    return (<div className={style.top_block}>
        {props.games.map(game => <Game key ={game.id} image = {game.img} name = {game.name}/>)}
    </div>)
}

export default Favorite