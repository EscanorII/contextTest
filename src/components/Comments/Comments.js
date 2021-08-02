import style from "../../App.module.css";

const Comments = () => {
    function save(event){
        event.preventDefault()
        console.log('lol')
    }

    return (<div className={style.mid_block}>
        <form onSubmit={save}>
            <label htmlFor="text">Напишіть відгук</label>
            <textarea id = "text"  rows = "5" />
            <div className={style.btn}>
                <button>Надіслати</button>
            </div>
        </form>
    </div>)
}


export default Comments