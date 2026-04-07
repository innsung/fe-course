/**
 * 부모 컴포넌트 : 최상위 컴포넌트
 */
// import './App.css'
import Header from './components/Header.jsx';
import Body from './components/Body.jsx'  //Body.css
import Footer from './components/Footer.jsx'

export default function App() {
  

  return (  
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}