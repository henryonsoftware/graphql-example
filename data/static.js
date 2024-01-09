const booksData = [
  { id: 1, name: "Harry Potter", genre: "Fantasy", authorId: 1 },
  { id: 2, name: "The Hunger Games", genre: "Sci-Fi", authorId: 2 },
  { id: 3, name: "The Martian", genre: "Sci-Fi", authorId: 3 },
  { id: 4, name: "The Casual Vacancy", genre: "Drama", authorId: 1 },
  { id: 5, name: "Mockingjay", genre: "Sci-Fi", authorId: 2 },
  { id: 6, name: "Catching Fire", genre: "Sci-Fi", authorId: 2 },
  {
    id: 7,
    name: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    authorId: 1,
  },
];

const authorsData = [
  { id: 1, name: "J.K. Rowling", age: 54 },
  { id: 2, name: "Suzanne Collins", age: 57 },
  { id: 3, name: "Andy Weir", age: 48 },
];

module.exports = { booksData, authorsData };
