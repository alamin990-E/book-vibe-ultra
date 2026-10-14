import React from 'react';
import getBookData from '../shared/lib';
import BookCard from '../shared/BookCard';

const Book = async() => {
    const Books = await getBookData()
    console.log(Books)
    return (
            <section className="container p-4 md:p-0 mx-auto my-15">
      <h2 className="text-3xl font-bold text-center">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-6 mt-10">
        {
            Books.map((book)=> <BookCard key={book.bookId} book={book}></BookCard>)
        }
      </div>
    </section>
    );
};

export default Book;