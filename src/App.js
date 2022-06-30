import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Labs from "./Pages/Labs";
import Education from "./Pages/Education";
import 'bootstrap/dist/css/bootstrap.min.css';
import Desktop10 from "./Components/Desktop10/Desktop10";
import Desktop11 from "./Components/Desktop-11/Desktop11";
import LogIn from "./Components/LogIn/LogIn";

export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="labs" element={<Labs />} />
          <Route path="education" element={<Education />} />
          <Route path="desktop10" element={<Desktop10 />} />
          <Route path="desktop11" element={<Desktop11 />} />
          <Route path="LogIn" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);