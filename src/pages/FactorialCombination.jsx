import { useState } from "react";
import { convertFactorial } from "../utils/ConvertFactorial";
const FactorialCombination = () => {
    const [valueN, setValueN] = useState('');
    const [valueK, setValueK] = useState('');
    const [result, setResult] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const factorialSubtraction = valueN - valueK;
        const factorial = convertFactorial(valueN) / (convertFactorial(valueK) * convertFactorial(factorialSubtraction));
        setResult(factorial);
    };
    return (
        <div className="conteiner">
            <h2 className="title">Combinação Simples</h2>
            <p className="text">Combinação simples é uma técnica de contagem usada para calcular o número de maneiras diferentes que um
                subconjunto de elementos pode ser escolhido de um conjunto maior, sem considerar a ordem dos elementos
                selecionados.</p>
            <p className="text">A fórmula para calcular o número de combinações simples é dada por: <strong>C(n, k) = n! / (k! *
                (n-k)!)</strong> </p>
            <p className="text">Digite a combinação que deseja saber:</p>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    <span>Digite o valor de <strong>N!</strong></span>
                    <input type="number" required name="n!" id="n!" value={valueN} onChange={(e) => setValueN(e.target.value)} />
                </label>
                <label>
                    <span>Digite o valor de <strong>K!</strong></span>
                    <input type="number" required name="k!" id="k!" value={valueK} onChange={(e) => setValueK(e.target.value)} />
                </label>
                {result !== null && (
                    <>
                        <p>O resultado é {result}.</p>
                        <p>Foi realizado {valueN}! / ({valueK}! * ({valueN} - {valueK})!)</p>
                    </>
                )}
                <button className="submit-btn" type="submit">Calcular</button>
            </form>

        </div>
    )
}

export default FactorialCombination