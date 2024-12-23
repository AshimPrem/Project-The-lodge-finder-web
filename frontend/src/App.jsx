import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
function App() {
  return (
    <>
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
