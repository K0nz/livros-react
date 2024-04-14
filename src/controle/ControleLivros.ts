import { Livro } from '../modelo/Livro';

// Array de objetos Livro que representa os livros existentes
let livros: Livro[] = [
  new Livro(1, 1, 'Um Pulo Sem fim', 'O livro narra a história de um menino chamado Pedro, que tem o desejo de voar. Com uma mistura de fantasia e realidade, Pedro embarca em uma jornada emocionante em busca de realizar seu sonho de voar. Ao longo da narrativa, o livro aborda temas como imaginação, coragem, amizade e a importância de perseguir os nossos sonhos. Com uma linguagem acessível e ilustrações cativantes, "Um Pulo Sem Fim" é uma leitura envolvente que encanta leitores de todas as idades.', ['Zirado','Lollo, José Carlos']),
  new Livro(2, 2, 'A barca furada', 'Neste livro, os autores exploram temas relacionados à sociedade, política e questões éticas por meio de uma narrativa envolvente. A trama acompanha personagens inseridos em um contexto político conturbado, em que precisam lidar com dilemas morais e tomar decisões que podem impactar não apenas suas vidas, mas também o destino de suas nações. Com uma escrita instigante e repleta de reviravoltas, "A Barca Furada" convida os leitores a refletirem sobre questões relevantes e atuais, enquanto acompanham uma história repleta de suspense e tensão.', ['Melo, João','Santos, José Rodrigues dos']),
  new Livro(3, 3, 'O chapéu mágico e outras historinhas', 'È uma coleção de contos encantadores escrita por João Silva, que transporta os leitores para mundos mágicos e aventuras emocionantes. Cada história é única e cativante, promovendo a imaginação e o encantamento em crianças e adultos.', ['Silva, João']),
];

export class ControleLivro {
    // Método para obter a lista completa de livros
    obterLivros() {
      return livros;
    }
  
    // Método para incluir um novo livro à lista
    incluir(livro: Livro) {
      const maxCodigo = Math.max(...livros.map(l => l.codigo));
      livro.codigo = maxCodigo + 1;
      livros.push(livro);
    }
  
    // Método para excluir um livro da lista com base no código
    excluir(codigo: number) {
      const index = livros.findIndex(l => l.codigo === codigo);
      if (index !== -1) {
        livros.splice(index, 1);
      }
    }
  }
