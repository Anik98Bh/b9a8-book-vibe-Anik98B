import BookCard from "../ReadBook/BookCard";

const WishlistBook = ({wishlistBooks}) => {
    return (
        <div>
            {
                wishlistBooks?.map(book =><BookCard key={book.id} book={book}></BookCard>)
            }
        </div>
    );
};

export default WishlistBook;