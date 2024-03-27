import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredReadBook, getStoredWishlistBook, saveReadBook, saveWishlistBook } from "../../utility/localstorage";
import { useEffect } from "react";

const BookDetails = () => {
    const books = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id)
    const book = books.find(book => book.id === idInt)
    console.log(book)
    // useEffect(()=>{
    //     if()
    // },[])
    const storedBookIds = getStoredReadBook();

    const handleReadBook = (idInt) => {
        if (!storedBookIds.includes(idInt)) {
            saveReadBook(idInt)
            toast.success('Your Books Added to Read List')
        } else {

            toast.warn('Already Books Added to Read List')
        }
    }

    const handleWishlistBook = (idInt) => {
        if (!storedBookIds.includes(idInt)){
            saveWishlistBook(idInt)
            toast.success('Books added to Wishlist')
        }else{

            toast.warn(' Books Added in Read List')
        }
    }

    return (
        <div className="bg-base-100 lg:h-full lg:flex gap-9">
            <div className=" lg:w-1/2">
                <figure className="bg-[#F3F3F3] py-12 pl-16 rounded-xl"><img className="w-[500px] h-[540px]" src={book.image} alt="" /></figure>
            </div>
            <div className=" lg:w-1/2">
                <h2 className="text-4xl font-bold">{book.bookName}</h2>
                <p className="text-[#131313] mt-3 font-medium">By : {book.author}</p>
                <hr className="border-2 border-dashed my-5 " />
                <p className="font-medium">{book.category}</p>
                <hr className="border-2 border-dashed my-5 " />
                <p className="text-[#131313B3]"><span className="text-[#131313] font-bold">Review: </span> {book.review}</p>
                <h1 className="mt-6 text-[#131313] font-bold">Tag
                    <span className="px-4 py-2 ml-6 bg-[#23BE0A0D] rounded-full font-medium text-[#23BE0A]">#{book.tags[0]}</span>
                    <span className="px-4 py-2 ml-6 bg-[#23BE0A0D] rounded-full font-medium text-[#23BE0A]">#{book.tags[1]}</span>
                </h1>
                <hr className="border-2 border-dashed my-7 " />

                <div className="mb-4">
                    <table className="table">
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>Number of Pages:</td>
                                <td className="text-[#131313] font-bold">{book.totalPages}</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>Publisher:</td>
                                <td className="text-[#131313] font-bold">{book.publisher}</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>Year of Publishing:</td>
                                <td className="text-[#131313] font-bold">{book.yearOfPublishing}</td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <td>Rating:</td>
                                <td className="text-[#131313] font-bold">{book.rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button onClick={() => handleReadBook(idInt)} className="btn border-2 border-[#1313134D] mr-4 font-semibold bg-[#ffffff]">Read</button>
                <button onClick={() => handleWishlistBook(idInt)} className="btn bg-[#50B1C9] text-white font-semibold">Wishlist</button>

            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;