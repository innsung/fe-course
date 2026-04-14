import { useState } from 'react';
import EffectCounter from './components/effects/EffectCounter.jsx'
import EffectFecth2 from './components/effects/EffectFetch2.jsx'
import EffectFecth from './components/effects/EffectFetch.jsx'

export default function App() {
    const [show, setShow] = useState(true);
    return(
        <>
            {/* {show && < EffectCounter />}
            <button onClick={()=> setShow(!show)}>
                {show? "숨기기":"보이기"}
            </button>
            <hr /> */}
            <EffectFecth />
            <EffectFecth2 />
        </>
    )

}