import { useState } from "react";
import BasicCounter from './components/counter/BasicCounter.jsx';
import Counter from './components/counter/Counter.jsx';

export default function App() {
    const [totalCount, setTotalCount] = useState(0);
    const handleTotalCount = (type) => {
        if(type==="+") setTotalCount(totalCount+1);
        else setTotalCount(totalCount-1);
    }
    return(
        <>
            {/* <h1>Appcounter</h1>
            <h1>Total Count :: <span><b>{totalCount}</b></span></h1>
            <BasicCounter click={handleTotalCount} total={totalCount}/>
            <BasicCounter click={handleTotalCount} total={totalCount}/>
            <BasicCounter click={handleTotalCount} total={totalCount}/>
            <hr /> */}
            <Counter />
        </>
    )
}