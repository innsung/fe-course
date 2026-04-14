import { useEffect, useState } from 'react';
import AvaterList from '../avater/AvaterList.jsx'
import { fetchData } from '../../util/fetch.js';
import people1 from '../../assets/people1.webp';
import people2 from '../../assets/people2.webp';
import people3 from '../../assets/people3.webp';

export default function EccectFetch(){
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(()=>{
        const loadData = async() => {
            const jsonData = await fetchData("http://localhost:5173/data/avater.json");
            setData(jsonData.alist);
        }

        loadData();
    }, [count]);
    
    return(
        <>
            <AvaterList list={data} />
            <h2>{count}</h2>
            <button type='button' onClick={()=>setCount(count+1)}>
                증가(+)
            </button>
        </>
    )
}