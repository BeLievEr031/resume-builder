
interface IProp {
    title: string;
    number: string;
    icon: string;
    imgSrc: string;
}

function CategoryCard({ icon, imgSrc, number, title }: IProp) {
    return (
        <div className="group bg-gray-400/20 rounded-xl cursor-pointer overflow-hidden h-[400px] min-w-[270px] hover:bg-gray-400/30 transition-all delay-75 relative md:mt-8">
            <div className="p-4">
                <span className="text-5xl">{icon}</span>
                <h1 className="text-xl font-semibold pt-5">{title}</h1>
                <p className="mt-1">{number} templates</p>
            </div>
            <div className="px-2 w-[95%] left-1/2 -translate-x-1/2 absolute bottom-0 top-1/2 group-hover:-translate-y-5 transition-all">
                <img src={imgSrc} alt="" className="mt-1 rounded-xl w-full" />
            </div>
        </div>
    )
}

export default CategoryCard