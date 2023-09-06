import { useState } from "react";
import { convertFactorial } from "../utils/ConvertFactorial";
import BackToHomeButton from "../components/BackToHome";
const FactorialDivision = () => {
    const [numerador, setNumerador] = useState('');
    const [denominador, setDenominador] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const fatorial = convertFactorial(numerador) / convertFactorial(denominador);
        setResult(fatorial)
    };
    return (
        <div className="conteiner">
            <h2 className="title">Divisão Fatorial</h2>
            <p className="text">
                A divisão de números fatoriais é uma operação matemática que envolve a divisão do fatorial de um número
                pelo fatorial de outro número. O fatorial de um número é definido como o produto de todos os números
                inteiros positivos de 1 até o número em questão.
            </p>
            <p className="text">Onde <strong>(N! / N!)</strong></p>
            <p className="text">Digite abaixo a divisão que deseja realizar</p>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    <span>Digite o numerador:</span>
                    <input required type="number" name="numerador" id="numerador" value={numerador} onChange={(e) => setNumerador(e.target.value)} />
                </label>
                <label>
                    <span>Digite o denominador</span>
                    <input required type="number" name="denominador" id="denominador" value={denominador} onChange={(e) => setDenominador(e.target.value)} />
                </label>
                <span className="result">
                    {result !== null && (
                        <>
                            <p>O resultado é {result}.</p>
                            <p>Foi realizado {numerador}! / {denominador}!</p>
                        </>
                    )}
                </span>
                <button className="submit-btn">Calcular</button>
            </form>
            <BackToHomeButton />
        </div>
    )
}

export default FactorialDivision