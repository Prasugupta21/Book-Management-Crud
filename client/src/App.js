import "./App.css";
import AddBooks from "./components/AddBooks";
import Books from "./components/Books";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import Update from "./components/Update";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-books" element={<Books />} />
        <Route path="/add-books" element={<AddBooks />} />
        <Route path="/update-book/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
