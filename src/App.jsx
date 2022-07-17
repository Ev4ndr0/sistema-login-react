import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedLayout } from "./components/Protected";
import { Login } from "./components/Login";
import { MegaSena } from "./components/MegaSena";
import { Contador } from "./components/Contador";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/profile"
            element={
              <ProtectedLayout>
                <h1>Olá esse é o componente profile</h1>
              </ProtectedLayout>
            }
          ></Route>
          <Route
            path="/login"
            element={<Login />}
          ></Route>
          <Route
            path="/megasena"
            element={<MegaSena />}
          ></Route>
          <Route
            path="/contador"
            element={<Contador />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
