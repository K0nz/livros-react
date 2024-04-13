import React, { useState, useEffect } from 'react';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';
import 'bootstrap/dist/css/bootstrap.min.css';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro = ({ livro, excluir }) => {
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        <button onClick={() => excluir(livro.codigo)} className="btn btn-danger">Excluir</button>
      </td>
    </tr>
  );
}

const LivroLista = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    setLivros(controleLivro.obterLivros());
  }, []);

  const excluirLivro = (codigo) => {
    controleLivro.excluir(codigo);
    setLivros(livros.filter(livro => livro.codigo !== codigo));
  }

  return (
    <main className="container">
      <h1 className="text-center">Catálogo de Livros</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {livros.map(livro => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluirLivro} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default LivroLista;
