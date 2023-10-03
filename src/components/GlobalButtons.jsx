import { Link } from 'react-router-dom';
import "./GlobalButtons.css"
const BackToHomeButton = () => {
  return (
   <>
    <button onClick={() => location.reload()} id='restart'>Reniciar</button>
    <Link to="/" id='back-btn'>Voltar</Link>
    </>
  );
};

export default BackToHomeButton;