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

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const firstAuthorBorn1947 = () => {
  return books.find((book) => book.author.birthYear === 1947);
}

// console.log(firstAuthorBorn1947());

// Retorne o nome do livro de menor nome.

function smallerName() {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || nameBook.length > book.name.length) {
      nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
};

// console.log(smallerName());

// Encontre o primeiro livro cujo nome possui 26 caracteres.

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};
function getNamedBook() {
  const bookNameLenght26 = books.find((book) => {
    return book.name.length === 26;
  });
  return bookNameLenght26;
}

// console.log(getNamedBook());

// Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
  return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
}

// console.log(booksOrderedByReleaseYearDesc());

// Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX() {
  return books.every((book) => (book.author.birthYear >= 1901 && book.author.birthYear < 2001)); 
}

// console.log(everyoneWasBornOnSecXX());

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

// const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
}

// console.log(someBookWasReleaseOnThe80s());

// Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

// const expectedResult = false;

function authorUnique() {
  return books.every((book) => {
    !books.some((bookSome) => (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name));
  })
}

// console.log(authorUnique());