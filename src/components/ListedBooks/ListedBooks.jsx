import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../utility/localstorage";
import { Tab, Tabs, TabList, } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaAngleDown } from "react-icons/fa6";
import ReadBook from "../ReadBook/ReadBook";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)
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
    // console.log(listBooks)
    return (
        <div>
            <div className="w-full bg-[#1313130D] text-center py-8 rounded-2xl">
                <h1 className="text-4xl font-bold">Books: {listBooks.length}</h1>
            </div>
            <div className="dropdown dropdown-bottom mt-10 mb-20 flex justify-center items-center">
                <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-white font-semibold m-1">Sort By <FaAngleDown></FaAngleDown></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Rating</a></li>
                    <li><a>Number of pages </a></li>
                    <li><a>Publisher year </a></li>
                </ul>
            </div>
            <div>
                {/* {
                    listBooks.map(book => <ReadBook key={book.id} book={book}></ReadBook>)
                } */}
                {/* <Tabs>
                    <TabList>
                        <Tab>
                            <Link
                                onClick={() => setTabIndex(0)}
                                to=''
                            >Read Books</Link>
                        </Tab>
                        <Tab>
                            <Link
                                onClick={() => setTabIndex(1)}
                                to={`wishlist`}
                            >Wishlist Books</Link>
                        </Tab>
                    </TabList>
                </Tabs> */}
                <div role="tablist" className="tabs tabs-bordered">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Read Book" />
                    <div role="tabpanel" className="tab-content p-10"><ReadBook></ReadBook></div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Wishlist"/>
                    <div role="tabpanel" className="tab-content p-10">Tab content 2</div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;