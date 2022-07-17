import { useState } from "react";
import NumeroDisplay from "../NumeroDisplay";

export const Contador = () => {
    const [numero, setNumero] = useState(0)

    const dec = () => setNumero(numero - 1)

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h1>Contador</h1>
            <NumeroDisplay numero={numero}/>
        </div>
    )
}