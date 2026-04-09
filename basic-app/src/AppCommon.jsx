import Logo from './common/Logo.jsx';
import Image from './common/Image.jsx';
import people1 from './assets/people1.webp';

export default function App() {
    return(
        <>
            <Logo   img="https://www.lottecinema.co.kr/NLCHS/Content/images/common/logo_footer.gif"
                    alt="CGV Logo"
                    w="200px"
                    h="50px"/>
            <Logo   img="https://www.lottecinema.co.kr/NLCHS/Content/images/common/logo_footer.gif"
                    alt="CGV Logo"
                    w="200px"
                    h="50px"/>
            <Image img={people1} 
                    alt="프로필 사진"
                    w ="180px"
                    h="200px"/>
            <Image img="https://cf2.lottecinema.co.kr/lotte_image/2026/Farewell/Farewell_980180_33.jpg" 
                    alt="프로필 사진"
                    w ="180px"
                    h="200px"/>
        </>
    )
}