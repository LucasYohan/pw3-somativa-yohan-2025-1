import "./App.css";
import BookCard from "./components/BookCard";
import GuerraCivil from "./assets/imgGuerraCivil.jpg";
import DiarioDeUmBanana from "./assets/imgDiarioDeUmBanana.jpg";

function App() {
  return (
    <>
      <div>
        <h1>PW3 - WEBAPP - LIVRARIA</h1>
        <BookCard
          titulo="Um diario de um banana"
          autor="Jeff Kinney"
          imagem={DiarioDeUmBanana}
        />

        <BookCard
          titulo="Vigadores: Guerra Civil"
          autor="Mark Millar"
          imagem={GuerraCivil}
        />
      </div>
    </>
  );
}

export default App;