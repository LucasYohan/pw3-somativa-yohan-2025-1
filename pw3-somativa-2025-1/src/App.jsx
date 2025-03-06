import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Home from "./components/pages/Home/Home";
import Container from "./components/Layout/Container/Container";
import CreateBook from "./components/pages/CreateBook/CreateBook";
import BookCard from "./components/pages/BookCard/BookCard"

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Container>
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastrar_livros" element={<CreateBook />} />
              <Route path="/listar_livros" element={<BookCard />} />
            </Routes>
            <Footer />
          </Container>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;