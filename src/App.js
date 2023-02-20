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
    </div>
  );
}

export default App;
