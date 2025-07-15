import Step1ImgSrc from "../../../assets/steps/step1.jpg"
import Step2ImgSrc from "../../../assets/steps/step2.jpg"
import Step3ImgSrc from "../../../assets/steps/step3.jpg"
import StepRow from "../components/StepRow"

const stepsData = [
    {
        title: "Choose a template",
        description: "The first is creating a great resume is choosing the right template. Our resume maker offers a variety of customizable template.",
        imgSrc: Step1ImgSrc,
        btnText: "Choose a template"
    },
    {
        title: "Choose a template",
        description: "The first is creating a great resume is choosing the right template. Our resume maker offers a variety of customizable template.",
        imgSrc: Step2ImgSrc,
        btnText: "Make My Resume"
    },
    {
        title: "Choose a template",
        description: "The first is creating a great resume is choosing the right template. Our resume maker offers a variety of customizable template.",
        imgSrc: Step3ImgSrc,
        btnText: "See how it works"
    },
]

function StepSection() {
    return (
        <div className="pt-12 md:pt-20 font-rubik px-2 md:px-0 items-center">
            <h1 className="capitalize text-3xl md:text-4xl font-medium text-center">build your resume quick and easy</h1>
            <p className="mt-3 md:mt-6 text-medium md:text-xl font-medium text-black/90 text-center">Land your dream job with captivating CVs you are professionally cust.</p>

            <div className="space-y-10 md:space-y-20 pt-10 md:pt-20 w-4/5 mx-auto">
                {
                    stepsData.map((item, index) => {
                        return <StepRow
                            btnText={item.btnText}
                            description={item.description}
                            imgSrc={item.imgSrc}
                            title={item.title}
                            key={index}
                        />
                    })
                }

            </div>
        </div>
    )
}

export default StepSection