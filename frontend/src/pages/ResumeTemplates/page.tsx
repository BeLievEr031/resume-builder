import HeroImgSrc from "../../assets/resume-template-hero.jpg"
import TemplateArea from "./components/TemplateArea"
function Page() {
    return (
        <div className="px-6 md:px-16">
            <div className="flex flex-col-reverse md:grid grid-cols-2 font-rubik py-5 md:py-10">
                <div className="pt-5 md:pt-36 md:px-5">
                    <h1 className="font-medium text-3xl md:text-4xl">Resume samples</h1>
                    <p className="text-[16px] md:text-xl mt-2 md:mt-4 text-neutral-800">Use professionally written and formatted resume samples that will get you the job you want. Search over 100 HR approved resume examples.</p>

                </div>
                <div>
                    <img src={HeroImgSrc} alt="" className="w-full h-[250px] md:h-auto object-cover" />
                </div>
            </div>
            <TemplateArea />
        </div>
    )
}

export default Page