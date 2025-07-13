
function Navbar() {
    return (
        <div className="bg-primary py-3 px-8 flex items-center justify-end font-inter">
            <p className="text-[16px] font-semibold px-3 text-white">Resume Builder</p>
            <button className="bg-white px-10 py-2 rounded-full text-center cursor-pointer font-inter text-primary text-sm font-medium">
                Login/Signup
            </button>
        </div>
    )
}

export default Navbar