import "./statusCard.css"

export default function StatusCard({ statusimage, dpimage }) {
  const addBg = {
    backgroundImage: `url(${statusimage})`,
  }

  return (
    <div className="status_card_container" >
      <div className="status_holder" style={addBg}> </div>
      <div className="user_pic">
        <img src={dpimage} alt="user_pic" />
      </div>
    </div>
  )
}
