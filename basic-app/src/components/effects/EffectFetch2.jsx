import { useState, useEffect } from "react";
import AvaterImageList from "../avater/AvaterImageList.jsx";
import style from "../avater/Avater.module.css";
import { fetchData } from "../../util/fetch.js";

export default function EffectFetch2() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        //비동기 함수 fetchData 작성 및 호출
        const loadData = async() => {
            const jsonData = await fetchData("http://localhost:5173/data/avater.json");
            const newList = jsonData.list.map((item) => ({
                ...item,
                style: style.avater_img_circle
            }));
            setData(newList);
            // console.log(newList);
        }
        loadData();
    }, []);
    
    console.log('data-->', data);
    
    return(
        <>
            <AvaterImageList imgList={data} />
        </>
    )
}