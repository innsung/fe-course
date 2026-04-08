/**
 * Avatar.jsx - 아바타이미지 + 이름
 */
import AvatarImage from "./AvaterImage.jsx"
import style from './Avater.module.css'

export default function Avatar({name, img}) {
    return (
        <div className={style.avater}>
            <AvatarImage img={img} style={style.avater_img_circle}/>
            <p>{name}</p>
        </div>
    )
}