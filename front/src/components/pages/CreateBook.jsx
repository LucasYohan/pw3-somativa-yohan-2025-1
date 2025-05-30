import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from './CreateBook.module.css'

import Input from "../form/Input";
import Select from "../form/Select";
import Button from "../form/Button";

const CreateBook = () => {

    const [book, setBook] = useState({});

    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    function handlerChangeBook(event) {
        setBook({ ...book, [event.target.name]: event.target.value });
        console.log(book);
    }

    function handlerChangeCategory(event) {
        setBook({ ...book, cod_categoria: event.target.options[event.target.selectedIndex].value })
    }

    function submit(event) {
        event.preventDefault();
        console.log(book);
        insertBook(book);
    }

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:5000/listagemCategorias', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Erro HTTP: ${response.status}`);
                }

                const data = await response.json();

                if (data.errorStatus) {
                    console.error('Erro do servidor:', data.mensageStatus);
                    setCategories([]);
                } else {
                    setCategories(data.data || []);
                }
            } catch (error) {
                console.error('Erro ao carregar categorias:', error);
                setCategories([]);
            }
        };

        fetchCategories();
    }, []);

    function insertBook(book) {

        fetch('http://127.0.0.1:5000/inserirLivro', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify(book)
        }).then((resp) =>
            resp.json()
        ).then((respJSON) => {
            console.log('RESPOSTA: ' + respJSON);
            navigate('/listBook');
        }).catch((error) => {
            console.log('ERRO: ' + error);
        })

    }

    return (

        <section className={style.create_book_container}>

            <h1>CADASTRO DE LIVRO</h1>

            <form onSubmit={submit}>

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
                    options={categories}
                />

                <Button
                    label='CADASTRAR LIVRO'
                />

            </form>

        </section>

    )
}

export default CreateBook