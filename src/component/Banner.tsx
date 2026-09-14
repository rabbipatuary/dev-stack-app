
import banner from '../assets/hero.png'
const Banner = () => {
    return (
        <div className=' container mx-auto'>
        <div className=" flex justify-between items-center  mt-9">

    <div className="space-y-6">

        <h1 className="text-[40px] font-bold">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                Development Stack
            </span>
        </h1>

        <p>
            Explore frontend, backend, database, and tooling options,
            <br />
            compare them side by side, and put together the stack that fits your
            <br />
            next project.
        </p>

        <button className="py-2 px-4 border rounded-2xl mr-4 mt-4 text-white bg-linear-to-r from-orange-500 via-pink-500 to-violet-500">
            Explore Technologies
        </button>

        <button className="py-2 px-4 border rounded-2xl">
            Learn More
        </button>

    </div>

    <img src={banner} alt="" />

</div>
</div>
    );
};

export default Banner;