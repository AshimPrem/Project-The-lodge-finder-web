import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import Home from "./pages/home";
import Signup from "./pages/signup";
function App() {
  return (
    <>
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
