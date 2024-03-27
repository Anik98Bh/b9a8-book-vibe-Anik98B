import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../utility/localstorage";
import BookCard from "./BookCard";

const ReadBook = () => {
    // const { id, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    const books = useLoaderData();
    const [listBooks, setListBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredReadBook();
        if (books.length > 0) {
            const booksList = books.filter(book => storedBookIds.includes(book.id));
            // console.log(books, storedBookIds, booksList)
            setListBooks(booksList)
        }
    }, [books])
    console.log(listBooks, 'list book')
    // const book= books.map(book=>book={book})
    // console.log(listBooks)

    return (
        <div>
            {
                listBooks.map(book =><BookCard key={book.id} book={book}></BookCard>)
            }
        </div>
    );
};

export default ReadBook;