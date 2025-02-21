import "./App.css";
import { useState } from "react";
import BookCard from "./components/BookCard/BookCard";
import GuerraCivil from "./assets/imgGuerraCivil.jpg";
import DiarioDeUmBanana from "./assets/imgDiarioDeUmBanana.jpg";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [livro, setLivro] = useState(0);

  return (
    <>
    <Header/>
      <div>
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
        <Footer/>
      </div>
    </>
  );
}

export default App;