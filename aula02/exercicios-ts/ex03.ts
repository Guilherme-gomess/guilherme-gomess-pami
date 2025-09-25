//Interfaces - são usadas para definir estrutura de objetos
interface Livro {
    titulo: string;
    autor: string;
    anoPublicado: number; 
} 

// Utilizar elas fica assim
let exibirLivros: Livro = {
    titulo: 'Jantar Secreto',
    autor: 'Raphael Montes',
    anoPublicado: 2018
};

console.log (exibirLivros);