import AvatarImage from "./components/avater/AvaterImage.jsx"
import Avatar from "./components/avater/Avater.jsx"
import AvaterList from "./components/avater/AvaterList.jsx";
import AvaterImageList from "./components/avater/AvaterImageList.jsx";
import Menu from './components/menu/Menu.jsx';
import style from './components/avater/Avater.module.css';
import people1 from './assets/people1.webp';
import people2 from './assets/people2.webp';
import people3 from './assets/people3.webp';

export default function App() {
  const list = [
    {img: people1, style: style.avater_img},
    {img: people2, style: style.avater_img},
    {img: people3, style: style.avater_img_circle},
    {img: people3, style: style.avater_img}
  ]
  const alist = [
    {img: people1, name: "Smith"},
    {img: people2, name: "James"},
    {img: people3, name: "Anne"},
    {img: people3, name: "Anne"}
  ]

  return ( 
    <>
      <AvatarImage img={people1} style={style.avater_img}/>
      <Avatar name="Anne" img={people3} />
      <AvaterImageList imgList={list} />
      <AvaterList list={alist} />
    </>
  )
}