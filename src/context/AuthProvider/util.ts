import { Api } from "../../service/api";
import { IUser } from "./types";

// Criando o localStorage
export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("u", JSON.stringify(user));
}

// Pegar o conteudo do localStorage
export function getUserLocalStorage() {
  const json = localStorage.getItem("u");

  if (!json) return null;

  const user = JSON.parse(json);

  return user ?? null;
}

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await Api.post("login", { email, password });
    
    return request.data;
  } catch (error) {
    return null;
  }
}
