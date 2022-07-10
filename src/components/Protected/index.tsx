import React from "react";
import { useAuth } from "../../context/AuthProvider/UseAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  //Acessando contexto com os dados de login
  const auth = useAuth();

  if (!auth.email) {
    return <h1>Você não tem acesso</h1>;
  }

  return children;
};
