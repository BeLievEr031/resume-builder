import Button from "../../../components/Button"
import HeroImgSrc from "../../../assets/hero-template.png"
function HeroSection() {
    return (
        <div className="m-2 flex flex-col-reverse md:grid md:grid-cols-2 gap-2 md:gap-5 md:px-20 font-rubik">
            <div className="pt-2 md:pt-44 space-y-4 md:space-y-6 px-5 md:px-0">
                <p className="text-4xl md:text-6xl text-pretty font-semibold text-primary">Make a resume that stands out</p>
                <p className="text-[18px] md:text-[20px] font-[500] text-neutral-700/90 text-pretty">As a job seeker, your resume is your ticket to securing employment. A well-crafted resume can be the difference between landing an interview and being overlooked. That’s where a resume maker can come in handy.</p>
                <Button variant="primary" classname="mt-1 md:mt-4">
                    Make your resume
                </Button >
            </div>

            <div className="flex justify-center items-end">
                <img src={HeroImgSrc} alt="" className="w-[95%] md:w-4/6 object-cover" />
            </div>
        </div>
    )
}

export default HeroSection