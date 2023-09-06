import { FaInstagram, FaEnvelope } from "react-icons/fa"
import { Outlet } from 'react-router-dom'

import './App.css'

function App() {


  return (
    <div className="App">
      <header>
        <h1>Análise Combinatória</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Entre em contato com o desenvolvedor, clicando aqui:</p>
        <span className='social-media'>
          <FaInstagram />
          <a href="https://www.instagram.com/invites/contact/?i=14v7kz377ljd8&utm_content=4ayc4pr" target='blank'>Instagram</a>
        </span>
        <span className='social-media'>
          <FaEnvelope />
          <a href="mailto:kaykyveiga46@gmail.com">Email</a>
        </span>
      </footer>
    </div>
  )
}

export default App
