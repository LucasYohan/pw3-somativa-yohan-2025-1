import "./App.css";
import { useState } from "react";
import BookCard from "./components/BookCard";
import GuerraCivil from "./assets/imgGuerraCivil.jpg";
import DiarioDeUmBanana from "./assets/imgDiarioDeUmBanana.jpg";

function App() {
  const [livro, setLivro] = useState(0);

  function handleChange(e) {
    setLivro(e.target.value);
  }

  return (
    <>
      <div>
        <h1>PW3 - WEBAPP - LIVRARIA</h1>
        {livro ? (
          <BookCard
            titulo="Um diario de um banana"
            autor="Jeff Kinney"
            imagem={DiarioDeUmBanana}
          />
        ) : (
          <BookCard
            titulo="Vigadores: Guerra Civil" 
            autor="Mark Millar"
            imagem={GuerraCivil}
          />
        )}

        <button type="button" onClick={() => setLivro(!livro)}>
          Teste
        </button>
      </div>
    </>
  );
}

export default App; 