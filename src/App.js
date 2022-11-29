import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from 'react';
import { Coin } from "./component/Coin";
import { Home } from "./component/Home";
import { NavBar } from "./component/NavBar";
import { AuthContextProvider } from "./contexts/AuthContext";





export default function App() {
  return (
    <Router>
    <AuthContextProvider>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <NavBar />
          <Routes>
            <Route path="/" element={<Home/>} exact />
          </Routes>
          <Routes>
            <Route path="/:coinId/" element={<Coin/>} exact />
          </Routes>
      </div>
    </AuthContextProvider>
    </Router>
  );
}