import { Routes, Route, Navigate } from "react-router-dom";
import Schedule from "./components/Schedule";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/user_events/1" />} />
      <Route path="/user_events/:id" element={<Schedule />} />
    </Routes>
  );
}

export default App;
