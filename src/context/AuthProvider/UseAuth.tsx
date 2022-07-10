// hoocks - Facilitador para usarmos o contexto nos componentes

import { useContext } from "react";
import { AuthContext } from ".";

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
