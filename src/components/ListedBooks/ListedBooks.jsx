import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../utility/localstorage";

const ListedBooks = () => {
    const books = useLoaderData();
    const [listBooks, setListBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredReadBook();
        if (books.length > 0) {
            const booksList = books.filter(book => storedBookIds.includes(book.id));
            console.log(books, storedBookIds, booksList)
            setListBooks(booksList)
        }
    }, [])
    return (
        <div>
            <div className="w-full bg-[#1313130D] text-center py-8 rounded-2xl">
                <h1 className="text-4xl font-bold">Books: {listBooks.length}</h1>
            </div>
            
        </div>
    );
};

export default ListedBooks;