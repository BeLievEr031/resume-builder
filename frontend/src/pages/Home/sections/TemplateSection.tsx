import Template1Src from "../../../assets/templates/template1.png"
import Button from "../../../components/Button"
function TemplateSection() {
    return (
        <div className="mt-6 bg-primary text-white pl-15 grid grid-cols-2 items-center gap-5 min-h-screen font-rubik">
            <div className="w-5/6 space-y-5">
                <h1 className="text-4xl font-semibold">Recruiter-Approved Resume</h1>
                <h1 className="text-4xl font-semibold">Templates</h1>
                <p className="text-[20px] text-neutral-200">Our resume maker is designed to help job seekers create professional-looking resumes quickly and easily. With our intuitive interface and easy-to-use tools, you can create a resume that will catch the eye of potential employers and land you the job you've been dreaming of.</p>

                <Button variant="secondary" classname="bg-[#2AF598]">
                    View Template
                </Button>
            </div>
            <div className="relative">
                <div className="h-[550px] overflow-x-scroll flex gap-2">
                    <img src={Template1Src} alt="" className="object-cover h-full rounded-md bg-red-500" />
                    <img src={Template1Src} alt="" className="object-cover h-full rounded-md" />
                    <img src={Template1Src} alt="" className="object-cover h-full rounded-md" />
                </div>
                <button className="w-16 h-16 rounded-full absolute top-1/2 -left-20 z-50 border -translate-y-1/2 cursor-pointer">
                    A
                </button>
            </div>
        </div>
    )
}

export default TemplateSection