import Input from "../../Form/Input";
import styles from "./CreateBook.module.css";

function CreateBook() {
  return (
    <div className={styles.create_book_container}>
      <Input
        type="text"
        name="txt_nome"
        id="txt_nome"
        placeholder="Insira o nome do livro"
      />

      <Input
        type="text"
        name="txt_descricao"
        id="txt_descricao"
        placeholder="Insira a descricao do livro"
      />

      <Input
        type="text"
        name="txt_autor"
        id="txt_autor"
        placeholder="Insira o autor do livro"
      />






    </div>
  );
}

export default CreateBook;
