let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        }
    ],
};

console.log(`O livros favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos.titulo}'.`)

leitor.livrosFavoritos.push(
{
    titulo: 'Harry Potter',
    autor: 'JK Rowling',
    editora: 'Rocco',
}
) 
console.log(`Julia tem ${leitor.livrosFavoritos.length} livros favoritos.`)