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

// Adicione o código do exercício aqui:
const authorBornIn1947 = books.find((elemento) => elemento.author.birthYear === 1947);

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

function getNamedBook(books) {
  return books.find(book => book.name.length === 26);
}

function booksOrderedByReleaseYearDesc(books) {
  return books.sort((a, b) => a.releaseYear > b.releaseYear ? 1 : a.releaseYear === b.releaseYear ? 0 : -1)
}

function everyoneWasBornOnSecXX(books) {
  return books.every((book) => book.author.birthYear <= 2000 && book.author.birthYear >= 1901);
}

function someBookWasReleaseOnThe80s(books) {
 return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
}

function authorUnique(books) {
  return books.every(book => !books.some(bookSome => 
    bookSome.author.birthYear === book.author.birthYear) 
    && (bookSome.author.name !== book.author.name));
}

function formatedBookNames(books) {
  return books.map(book => `${book.name} - ${book.genre} - ${book.author.name}`)
}

function nameAndAge(books) {
  return books.sort((a, b) => (
    a.releaseYear - a.author.birthYear) - (b.releaseYear - b.author.birthYear))
      .map(book => ({ age: book.releaseYear - book.author.birthYear, author: book.author.name }));
}

function fantasyOrScienceFiction() {
  return books.filter(book => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
}

function oldBooksOrdered(books) {
  return books.sort((a, b) => a.releaseYear - b.releaseYear).filter(book => 2021 - book.releaseYear > 60);
}

function fantasyOrScienceFictionAuthors(books) {
  return fantasyOrScienceFiction(books
    .sort((a, b) => a.author.name > b.author.name ? 1 : a.author.name === b.author.name ? 0 : -1))
    .map(book => book.author.name);
}

function oldBooks(books) {
  return books.filter(book => 2021 - book.releaseYear > 60).map(book => book.name);
}

function authorWith3DotsOnName(books) {
  return books.filter(book => book.author.name.split('').filter(dot => dot === '.').length === 3);
}
