import "./home.css"
import Leftbar from '../../components/leftbar/Leftbar'
import Navbar from '../../components/navbar/Navbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import { useMediaQuery } from "react-responsive"

export default function Home() {

  const laptopOrDesktop = useMediaQuery({query: '(min-width: 1200px)'})
  const tablet = useMediaQuery({query: '(min-width: 960px)'});

  return (
    <div className='home_page_container'>
      <Navbar />
      <div className="home_page_body">
        {laptopOrDesktop && <Leftbar />}
        <Feed />
        {tablet && <Rightbar />}
      </div>
    </div>
  )
}
