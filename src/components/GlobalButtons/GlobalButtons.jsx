import { Link } from 'react-router-dom';
import "./GlobalButtons.css"
const GlobalButtons = () => {
  return (
   <>
    <button onClick={() => location.reload()} id='restart'>Reiniciar</button>
    <Link to="/" id='back-btn'>Voltar</Link>
    </>
  );
};

export default GlobalButtons;