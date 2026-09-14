import logo from '../assets/logo-text.png'
const Nav = () => {
    return (
        <div className=" m-4 flex justify-between items-center container mx-auto">

    <div>
        <img src={logo} alt="logo" />
    </div>

    <ul className="flex gap-4">
        <li><a href=" ">Home</a></li>
        <li><a href=" ">Technologies</a></li>
        <li><a href=" ">Projects</a></li>
        <li><a href=" ">About</a></li>
        <li><a href=" ">Contact</a></li>
    </ul>

    <div className="">
        <button className="py-2 px-4 border rounded-2xl m-4">
            Sign In
        </button>

        <button className="py-2 px-4 border bg-pink-500 text-white rounded-[20px]">
            Sign Up
        </button>
    </div>

</div>
    );
};

export default Nav;