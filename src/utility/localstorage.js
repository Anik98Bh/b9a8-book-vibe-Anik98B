
const getStoredReadBook = () => {
    const storedReadBook = localStorage.getItem('read-books');
    if (storedReadBook) {
        return JSON.parse(storedReadBook);
    }
    return [];
}

const saveReadBook = id => {
    const storedReadBooks = getStoredReadBook();
    const exists = storedReadBooks.find(bookId => bookId === id);
    if(!exists){
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks))
    }
}

export { getStoredReadBook, saveReadBook }