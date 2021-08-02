import style from "./Game.module.css"

const Game = (props) => {


    return (
        <div className={style.game_block}>
            <img src={props.image} alt="img"/>
            <text>{props.name}</text>
            <div className={style.like}>
                <i onClick={() =>props.addToFavorite(props.game)} className="fas fa-thumbs-up"></i>
            </div>
        </div>
    )
}

export default Game