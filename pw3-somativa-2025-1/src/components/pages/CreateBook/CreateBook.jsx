import Input from "../../Form/Input";
import styles from "./CreateBook.module.css";
import { useState, useEffect } from "react";
import Button from '../../Form/Button'
import Select from "../../Form/Select";


function CreateBook() {

  const [book, setBook] = useState({});
  const [categories, setCategories] = useState([]);

  function handlerChangeBook(event) {
    setBook({ ...book, [event.target.name]: event.target.value });
    console.log(book);
  }

  function handlerChangeCategory(event) {
    setBook({ ...book, cod_categoria: event.target.options[event.target.selectedIndex].text })
  }

  function submit(event) {
    event.preventDefault();
    console.log(book);
  }

  useEffect(() => {
    fetch('http://localhost:5000/listagemCateorias', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      }
    }).then((response) => 
      response.json()
    ).then((categorias)=>{
        console.log('Teste: ' + categorias.data);
    }).catch((error) => {
      console.log('ERRO:' + error);
    });

  }, []);

  return (
    <form onSubmit={submit} className={styles.create_book_container}>
      <Input
        text='Nome do livro'
        type='text'
        name='nome_livro'
        id='nome_livro'
        placeholder='Digite o nome do livro'
        handlerChange={handlerChangeBook}
      />

      <Input
        text='Autor do livro'
        type='text'
        name='autor_livro'
        id='autor_livro'
        placeholder='Digite o nome do autor do livro'
        handlerChange={handlerChangeBook}
      />

      <Input
        text='Descrição do livro'
        type='text'
        name='descricao_livro'
        id='descricao_livro'
        placeholder='Digite a descrição do livro'
        handlerChange={handlerChangeBook}
      />

      <Select
        name='cod_categoria'
        id='cod_categoria'
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
