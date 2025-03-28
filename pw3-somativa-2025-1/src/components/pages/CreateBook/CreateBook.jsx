import Input from "../../Form/Input";
import styles from "./CreateBook.module.css";
import { useState } from "react";
import Button from '../../Form/Button'
import Select from "../../Form/Select";


function CreateBook() {

  const [book, setBook] = useState({});

  function handlerChangeBook(event) {
    setBook({ ...book, [event.target.name]: event.target.value });
    console.log(book);
  }

  function handlerChangeCategory(event) {
    setBook({ ...book, category: event.target.options[event.target.selectedIndex].text })
  }

  function submit(event) {
    event.preventDefault();
    console.log(book);
  }



  return (
    <form onSubmit={submit} className={styles.create_book_container}>
      <Input
        text='Nome do livro'
        type='text'
        name='txt_livro'
        id='txt_livro'
        placeholder='Digite o nome do livro'
        handlerChange={handlerChangeBook}
      />

      <Input
        text='Autor do livro'
        type='text'
        name='txt_autor'
        id='txt_autor'
        placeholder='Digite o nome do autor do livro'
        handlerChange={handlerChangeBook}
      />

      <Input
        text='Descrição do livro'
        type='text'
        name='txt_descricao'
        id='txt_descricao'
        placeholder='Digite a descrição do livro'
        handlerChange={handlerChangeBook}
      />

      <Select
        name='slc_categoria'
        id='slc_categoria'
        text='Categoria do livro'
        handlerChange={handlerChangeCategory}
      />


      <Button
        label='CADASTRAR LIVRO'
      />

    </form>
  );
}

export default CreateBook;
