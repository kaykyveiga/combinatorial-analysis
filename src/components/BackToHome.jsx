import { Link } from 'react-router-dom';
import "./BackToHome.css"
const BackToHomeButton = () => {
  return (
    <Link to="/" id='back-btn'>Voltar</Link>
  );
};

export default BackToHomeButton;