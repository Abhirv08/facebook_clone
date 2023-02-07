import { Route, Routes } from "react-router-dom";

import "./app.css"
import Home from "./pages/home/Home";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
