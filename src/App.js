import { Route, Routes } from "react-router-dom";

import "./app.css"
import Friends from "./pages/friends/Friends";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
      <div className="tooltip_container">
        <span className='tooltip_text'>New Message</span>
        <div className="new_message"
          onMouseEnter={() => document.querySelector(".tooltip_text").style.visibility = 'visible'}
          onMouseLeave={() => document.querySelector(".tooltip_text").style.visibility = 'hidden'}>
          <img src="./assets/edit.png" alt="new message" />
        </div>
      </div>
    </div>
  );
}

export default App;
