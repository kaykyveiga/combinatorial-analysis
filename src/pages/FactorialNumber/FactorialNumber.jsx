import { useCommonImports } from "../../hook/useCommonImports";

const FactorialNumber = () => {
    const { useState, convertFactorial, GlobalButtons } = useCommonImports();
    
    const [factorialNumber, setFactorialNumber] = useState('');
    const [result, setResult] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const factorial = convertFactorial(factorialNumber);
        setResult(factorial);
        setFormSubmitted(true);
    };

    return (
        <div className="container">
            <h2 className="title">Números fatoriais</h2>
            <p className="text">
                Números fatoriais são uma sequência de números inteiros positivos que são obtidos a partir do produto de
                todos os números inteiros positivos menores ou iguais a um número específico. Esse número é representado
                pelo símbolo !, que é lido como fatorial.
            </p>
            <p className="text">Descubra qualquer número fatorial:</p>
            <form onSubmit={handleSubmit} className="form">
                <label className="label-custom">
                    <span>Digite o número:</span>
                    <input
                        type="number"
                        name="factorialNumber"
                        id="factorialNumber"
                        required
                        value={factorialNumber}
                        onChange={(e) => setFactorialNumber(e.target.value)}
                        disabled={formSubmitted}
                    />
                </label>
                <span className="result">
                    {factorialNumber && result != null && (
                        <>
                            <p>O resultado é {result}.</p>
                            <p>Foi realizado {factorialNumber}!</p>
                        </>
                    )}
                </span>
                <button type="submit" className="submit-btn">Calcular</button>
            </form>
            <GlobalButtons />
        </div>
    )
}

export default FactorialNumber;
