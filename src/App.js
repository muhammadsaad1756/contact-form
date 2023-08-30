import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Contact from "./components/contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
