
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
const getStoredWishlistBook = () => {
    const storedWishlistBook = localStorage.getItem('wishlist-books');
    if (storedWishlistBook) {
        return JSON.parse(storedWishlistBook);
    }
    return [];
}

const saveWishlistBook = id => {
    const storedWishlistBooks = getStoredWishlistBook();
    const exists = storedWishlistBooks.find(bookId => bookId === id);
    if(!exists){
        storedWishlistBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedWishlistBooks))
    }
}

export { getStoredReadBook, saveReadBook, saveWishlistBook, getStoredWishlistBook }