import { useState } from "react";
import { useAuth } from "../../context/AuthProvider/UseAuth";
import { mega } from "../../functions/mega";
import NumeroDisplay from "../NumeroDisplay";

export const MegaSena = () => {

    //Acessando contexto com os dados de login
    const auth = useAuth();
    const [numeros, setNumeros] = useState(mega())
    const [qtde, setQtde] = useState(6)

    function renderizarNumeros() {
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero} />
        )
    }


    if (!auth.email) {
        return <h1>Você não tem acesso</h1>;
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>

            <h1>Mega Sena</h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}>
                {renderizarNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={20} value={qtde}
                    onChange={evento => setQtde(evento.target.value)}>
                </input>
                <button onClick={() => setNumeros(mega(qtde))}>
                    Gerar Aposta
                </button>
            </div>
        </div>

    );
};