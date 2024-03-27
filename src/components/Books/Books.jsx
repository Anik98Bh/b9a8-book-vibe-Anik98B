
import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="mt-20">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Books</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;