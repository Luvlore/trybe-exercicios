const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// EXERCICIOS DO BLOCO 8.2

// EXERCÍCIO 1

const authorBornIn1947 = books => books.find((elemento) => elemento.author.birthYear === 1947);

// retorna o primeiro elemento cujo o autor nasceu no ano de 1947

// EXERCICIO 2

const smallerName = (books) => {
  let nameBook;
  books.forEach((book) => {
    if (nameBook === undefined) {
      nameBook = book.name;
    } else if (nameBook.length > book.name.length) {
      nameBook = book.name;
    }
  });
  return nameBook
}

// retorna o livro com o menor nome dentro da lista

// EXERCICIO 3

const getNamedBook = (books) => books.find(book => book.name.length === 26);


// retorna o livro que tenha um nome com exatamente 26 caracteres

// EXERCICIO 4

const booksOrderedByReleaseYearDesc = (books) => books.sort((a, b) => a.releaseYear > b.releaseYear ? 1 : a.releaseYear === b.releaseYear ? 0 : -1)


// ordena os livros de acordo com o ano de publicação

// EXERCICIO 5

const everyoneWasBornOnSecXX = (books) => books.every((book) => book.author.birthYear <= 2000 && book.author.birthYear >= 1901);


// retorna verdadeiro ou falso se todos os autores naceram no século XX

// EXERCÍCIO 6

const someBookWasReleaseOnThe80s = (books) => books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);


// retorna verdadeiro ou falso se algum livro foi lançado na década de 80

// EXERCICIOS 7

const authorUnique = (books) => books.every(book => !books.some(bookSome =>
  bookSome.author.birthYear === book.author.birthYear)
  && (bookSome.author.name !== book.author.name));


// retorna verdadeiro ou falso se tiver algum autor com o mesmo nome

// EXERCICIOS DO BLOCO 8.3

// ECERCÍCIO 1

const formatedBookNames = (books) => books.map(book => `${ book.name } - ${ book.genre } - ${ book.author.name }`)
 

// formata o nomes do livros, gêneros e autores no template: 
//"nomeDoLivro - genero - autor"

// EXERCICIO 2

const nameAndAge = (books) => books.sort((a, b) => (
    a.releaseYear - a.author.birthYear) - (b.releaseYear - b.author.birthYear))
    .map(book => ({ age: book.releaseYear - book.author.birthYear, author: book.author.name }));


// ordena de acordo com a idade dos autores, do mais novo ao mais velho, e depois formatando no template:
// { age: idade, author: nomeDoAutor

// EXERCICIO 3

const fantasyOrScienceFiction = (books) => books.filter(book => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')


// filtra os apenas os livros do gênero de fantasia e ficção científica

// EXERCÍCIO 4

const oldBooksOrdered = (books) => books.sort((a, b) => a.releaseYear - b.releaseYear).filter(book => 2021 - book.releaseYear > 60);


// ordena os livros com mais de 60 anos, do mais antigo para os mais atuais

// EXERCÍCIO 5

const fantasyOrScienceFictionAuthors = (books) => fantasyOrScienceFiction(books
    .sort((a, b) => a.author.name > b.author.name ? 1 : a.author.name === b.author.name ? 0 : -1))
    .map(book => book.author.name);


// retorna, em ordem alfabética, os autores apenas das obras de ficção científica e fantasia

// EXERCÍCIO 6

const oldBooks = (books) => books.filter(book => 2021 - book.releaseYear > 60).map(book => book.name);


// filtra os livros com mais de 60 anos e retorna seus nomes

// EXERCICIO 7

const authorWith3DotsOnName = (books) => books.filter(book => book.author.name.split('').filter(dot => dot === '.').length === 3);


// filtra os nomes dos autores com 3 iniciais neles