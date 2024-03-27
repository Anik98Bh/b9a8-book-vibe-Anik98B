import { GrLocation } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import { LuFileBarChart } from "react-icons/lu";
import { Link } from "react-router-dom";
import BookDetails from "../BookDetails/BookDetails";

const BookCard = ({ book }) => {
    const { id, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

  

    return (
        <div className="flex gap-5 mb-6 border-2 rounded-2xl py-5 px-5">
            <div>
                <figure className="bg-[#F3F3F3] py-7 px-7 rounded-2xl h-60 w-60"><img src={image} alt="" /></figure>
            </div>
            <div className="w-full">
                <h2 className="text-2xl font-bold font-serif">{bookName}</h2>
                <p className="text-[#131313CC] mt-2 font-medium">By : {author}</p>

                <div className="flex justify-start gap-3 items-center place-content-center">
                    <p className="mt-6 text-[#131313] font-bold font-serif">Tag
                        <span className="px-4 py-2 ml-5 bg-[#23BE0A0D] rounded-full font-medium text-[#23BE0A]">#{tags[0]}</span>
                        <span className="px-4 py-2 ml-5 bg-[#23BE0A0D] rounded-full font-medium text-[#23BE0A]">#{tags[1]}</span>

                    </p>
                    <p className="flex items-center pt-5 gap-2 text-[#131313CC]"><span><GrLocation></GrLocation> </span> Year of Publishing: {yearOfPublishing}
                    </p>
                </div>
                <div className="flex justify-start gap-3">
                    <p className="flex items-center pt-5 gap-2 text-[#131313CC]"><span><GoPeople className="text-xl"></GoPeople> </span> Publisher: {publisher}
                    </p>
                    <p className="flex items-center pt-5 gap-2 text-[#131313CC]"><span><LuFileBarChart className="text-xl"></LuFileBarChart> </span> Page {totalPages}
                    </p>
                </div>
                <hr className="border-2 border-dashed my-5 " />
                <div className=" flex justify-start gap-4">
                    <p className="bg-[#328EFF26] text-[#328EFF] rounded-full px-4 py-1">Category: {category}</p>
                    <p className="bg-[#FFAC3326] text-[#FFAC33] rounded-full px-4 py-1">Rating: {rating}</p>
                    <Link
                        onClick={BookDetails}
                        to={`/book/${id}`}>
                        <button className="rounded-full px-6 py-1 bg-[#23BE0A] font-medium text-[#FFFFFF]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;