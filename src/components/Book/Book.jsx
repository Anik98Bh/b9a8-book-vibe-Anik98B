import { GoStar } from "react-icons/go";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const {id, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <Link to={`/book/${id}`}>
            <div className="card bg-base-100 border rounded-2xl mt-7  py-5">
                <div className="px-5">
                    <figure className="bg-[#F3F3F3] py-5 rounded-xl"><img src={image} alt="" /></figure>
                </div>
                <div className="px-5 mt-6">
                    <div className="flex mb-4">
                        <button className="px-6 py-2 bg-[#23BE0A0D] rounded-full font-medium text-[#23BE0A] mr-9">{tags[0]}</button>
                        <button className="px-6 py-2 bg-[#23BE0A0D] rounded-full font-medium text-[#23BE0A]">{tags[1]}</button>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold font-serif">{bookName}</h1>
                        <p className="font- font-medium mt-2">By : {author}</p>
                    </div>
                    <hr className="border-2 border-dashed my-5 " />
                    <div className=" flex justify-between text-[#131313CC] font-medium">
                        <p>{category}</p>
                        <p className="flex items-center gap-2">{rating}<GoStar></GoStar>
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;