import Button from "../../../components/Button"
import TemplateSrc from "../../../assets/templates/template1.png"
import CategoryCard from "../components/CategoryCard"

const categories = [
    {
        title: "Architecture & Engineering",
        number: "10",
        icon: "🏗️",
        imgSrc: TemplateSrc
    },
    {
        title: "Finance & accounting",
        number: "15",
        icon: "💰",
        imgSrc: TemplateSrc
    },
]

function TemplateCategorySection() {
    return (
        <div>
            <div className="pt-20 max-w-[54rem] mx-auto font-rubik">
                <h1 className="text-center text-4xl font-medium">Get inspired by resume samples from professional resume experts</h1>
                <p className="text-xl text-center mt-6 text-neutral-800">Search by job title to find resumes from resume experts that can inspire your own resume creation</p>
                <div className="flex justify-center pt-10 gap-5">
                    <Button variant="primary">
                        Create my resume
                    </Button>
                    <Button variant="outline">
                        Explore all samples
                    </Button>
                </div>
            </div>

            <div className="px-24 pt-32 grid grid-cols-4">
                {
                    categories.map(({ icon, imgSrc, number, title }, index) => {
                        return <CategoryCard
                            key={index}
                            icon={icon}
                            imgSrc={imgSrc}
                            number={number}
                            title={title}
                        />
                    })
                }
            </div>
        </div>

    )
}

export default TemplateCategorySection