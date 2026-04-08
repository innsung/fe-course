import style from './Avater.module.css';
import Avater from './Avater.jsx'

export default function AvaterList ({list}){
    return(
        <div className={style.avater_list}>
            { list.map((item, idx) => 
                <Avater img={item.img} name={item.name} key={idx} /> ) }
        </div>
    )
}