
import BookCard from "./BookCard";

const ReadBook = ({listBooks}) => {

    return (
        <div>
            {
                listBooks?.map(book =><BookCard key={book.id} book={book}></BookCard>)
            }
        </div>
    );
};

export default ReadBook;