import Header from '../../components/Header'
import Banner from '../../components/Banner'
//import styles from '../styles/Home.module.css'
import localFont from 'next/font/local'


const myFont = localFont({
  src: '../../public/fonts/uni05_53.ttf'
}
)  

export default function Home() {
  return (
    <div className={myFont.className}>
      <Header />
      <Banner />
    </div>
    

    

    

  )
}