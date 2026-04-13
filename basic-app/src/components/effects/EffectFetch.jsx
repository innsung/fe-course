import { useEffect, useState } from 'react';
import AvaterList from '../avater/AvaterList.jsx'
import people1 from '../../assets/people1.webp';
import people2 from '../../assets/people2.webp';
import people3 from '../../assets/people3.webp';

export default function EccectFetch(){
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const url = "http://localhost:5173/data/alist.json";
    useEffect(()=>{
        console.log('--->마운트 or 업데이트시 호출');
        
        
        const fetchData = async() => {
            const response = await fetch(url);
            const jsondata = await response.json();
            setData(jsondata);
        }
        fetchData();
    }, [count]);
    
    return(
        <>
            <h2>{count}</h2>
            <AvaterList list={data} />
            <button type='button' onClick={()=>setCount(count+1)}>
                증가(+)
            </button>
        </>
    )
}