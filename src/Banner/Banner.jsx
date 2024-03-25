import banner from '../assets/pngwing 1.png'
const Banner = () => {
    return (
        <div className="hero h-[550px] bg-base-200 rounded-3xl mt-5">
            <div className="hero-content flex-col lg:flex-row gap-36">
                <div className="space-y-9">
                    <h1 className="text-5xl font-semibold">Books to freshen up <br /> your bookshelf</h1>

                    <button className="btn bg-[#23BE0A] font-bold text-white">View The List</button>
                </div>
                <img src={banner} className="max-w-sm rounded-lg" />
            </div>
        </div>
    );
};

export default Banner;