import { useCommonImports } from "../../hook/useCommonImports";

const FactorialArrangement = () => {
    const { useState, convertFactorial, GlobalButtons } = useCommonImports();

    const [valueN, setValueN] = useState('');
    const [valueP, setValueP] = useState('');
    const [result, setResult] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const factorialSubtraction = valueN - valueP;
        const factorial = convertFactorial(valueN) / convertFactorial(factorialSubtraction);
        setResult(factorial);
        setFormSubmitted(true);
    };

    return (
        <div className="container">
            <h2 className="title">Arranjo</h2>
            <p className="text">Arranjo, na matemática, é um conceito da análise combinatória que representa o número de maneiras
                diferentes que um conjunto de elementos pode ser arranjado em uma ordem específica. Em outras
                palavras,um arranjo é uma combinação ordenada de elementos de um conjunto. O número de arranjos de
                elementos tomados de um conjunto de n elementos é denotado por A(n,p),onde:</p>
            <p className="text"><strong>A(n,p) = n! / (n-p)!</strong></p>
            <p className="text">Digite abaixo o valor de N! e P!</p>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    <span>Digite o <strong>N!</strong></span>
                    <input type="number" required name="n!" id="n!" value={valueN} onChange={(e) => setValueN(e.target.value)} disabled={formSubmitted} />
                </label>
                <label>
                    <span>Digite o <strong>P!</strong></span>
                    <input type="number" required name="p!" id="p!" value={valueP} onChange={(e) => setValueP(e.target.value)} disabled={formSubmitted} />
                </label>
                <span className="result">
                    {result !== null && (
                        <>
                            <p>O resultado é {result}.</p>
                            <p>Foi realizado {valueN}! / ({valueN} - {valueP})!</p>
                        </>
                    )}
                </span>
                <button className="submit-btn">Calcular</button>
            </form>
            <GlobalButtons />
        </div>
    )
}

export default FactorialArrangement