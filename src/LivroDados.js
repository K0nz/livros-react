import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function LivroDados() {
    const controleLivro = new ControleLivro();
    const controleEditora = new ControleEditora();
    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));
    const navigate = useNavigate();
    const [livro, setLivro] = useState({
        titulo: '',
        resumo: '',
        autores: '',
        codEditora: opcoes[0].value
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setLivro(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        controleLivro.incluir(livro);
        navigate('/');
    };

    return (
        <main className="container">
            <h1 className="my-4">Inclusão de Livro</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Título:</label>
                    <input type="text" className="form-control" name="titulo" value={livro.titulo} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Resumo:</label>
                    <textarea className="form-control" name="resumo" value={livro.resumo} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Autores:</label>
                    <textarea className="form-control" name="autores" value={livro.autores} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Editora:</label>
                    <select className="form-select" name="codEditora" value={livro.codEditora} onChange={handleChange}>
                        {opcoes.map(opcao => (
                            <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Incluir</button>
            </form>
        </main>
    );
}

export default LivroDados;
