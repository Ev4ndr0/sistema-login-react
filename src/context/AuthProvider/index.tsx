import React, { createContext, useEffect, useState } from "react";
import { IContext, IAuthProvider, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  // Criando estado
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  },[]);

  // criando metodo para atenticação
  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password);
    // Quando retornar a função com o usuario, pego as informações
    const payload = { token: response.token, email };

    // atualizo o estado do usuario
    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
