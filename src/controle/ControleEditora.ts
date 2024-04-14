import { Editora } from '../modelo/Editora';

let editoras: Editora[] = [
  new Editora(1, 'Caminhos'),
  new Editora(2, 'Nostalgia Editora'),
  new Editora(3, 'Capim Limão'),
];

export class ControleEditora {
    getNomeEditora(codEditora: number) {
      const editora = editoras.find(e => e.codEditora === codEditora);
      return editora ? editora.nome : '';
    }
    getEditoras() {
      return editoras;
    }
  }