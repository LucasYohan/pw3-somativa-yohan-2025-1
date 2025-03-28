import Styles from "./BookCard.module.css";
import "./BookCard.css";

const BookCard = ({ titulo, autor, imagem }) => {
  return (
    <div className="BookCard">
      <h3>{titulo}</h3>
      <p>{autor}</p>
      <img src={imagem} style={Styles.img}></img>
    </div>
  );
};

export default BookCard;
