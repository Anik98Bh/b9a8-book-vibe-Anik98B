import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook, getStoredWishlistBook } from "../../utility/localstorage";
import 'react-tabs/style/react-tabs.css';
import { FaAngleDown } from "react-icons/fa6";
import ReadBook from "../ReadBook/ReadBook";
import WishlistBook from "../WishlistBook/WishlistBook";

const ListedBooks = () => {
    const books = useLoaderData();
    const [listBooks, setListBooks] = useState([]);
    const [wishlistBooks, setWishListBooks] = useState([]);
    const [activeTab, setActiveTab] = useState(1);

    useEffect(() => {
        const storedBookIds = getStoredReadBook();
        if (books.length > 0) {
            const booksList = books.filter(book => storedBookIds.includes(book.id));
            setListBooks(booksList)
        }
    }, [books])

    useEffect(() => {
        const storedWishListBookIds = getStoredWishlistBook();
        if (books.length > 0) {
            const booksList = books.filter(book => storedWishListBookIds.includes(book.id));
            setWishListBooks(booksList)
        }
    }, [books])

    const sortByRating = () => {
        const sortedData = [...listBooks].sort((a, b) => b.rating - a.rating);
        const sortedWishListData = [...wishlistBooks].sort((a, b) => b.rating - a.rating);
        setWishListBooks(sortedWishListData);
        setListBooks(sortedData);
    };

    const sortByPageNumber = () => {
        const sortedData = [...listBooks].sort((a, b) => b.totalPages - a.totalPages); setListBooks(sortedData);
        const sortedWishListData = [...wishlistBooks].sort((a, b) => b.totalPages - a.totalPages);
        setWishListBooks(sortedWishListData);
    };

    const sortByPublisherYear = () => {
        const sortedData = [...listBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing); setListBooks(sortedData);
        const sortedWishListData = [...wishlistBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setWishListBooks(sortedWishListData);
    };

    return (
        <div>
            <div className="w-full bg-[#1313130D] text-center py-8 rounded-2xl">
                <h1 className="text-4xl font-bold">Books</h1>
            </div>
            <div className="dropdown dropdown-bottom mt-10 mb-20 flex justify-center items-center">
                <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-white font-semibold m-1">Sort By <FaAngleDown></FaAngleDown></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a onClick={sortByRating}>Rating</a></li>
                    <li><a onClick={sortByPageNumber}>Number of pages </a></li>
                    <li><a onClick={sortByPublisherYear}>Publisher year </a></li>
                </ul>
            </div>
            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <input onClick={() => setActiveTab(1)} type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Read Book" checked={activeTab === 1} />
                    <div role="tabpanel" className="tab-content p-10"><ReadBook listBooks={listBooks}></ReadBook></div>

                    <input onClick={() => setActiveTab(2)} type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Wishlist" checked={activeTab === 2} />
                    <div role="tabpanel" className="tab-content p-10"><WishlistBook wishlistBooks={wishlistBooks}></WishlistBook></div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;