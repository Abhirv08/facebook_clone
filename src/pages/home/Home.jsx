import "./home.css"
import Leftbar from '../../components/leftbar/Leftbar'
import Navbar from '../../components/navbar/Navbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

export default function Home() {
  return (
    <div className='home_page_container'>
      <Navbar />
      <div className="home_page_body">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  )
}
