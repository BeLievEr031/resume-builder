import CompanyCarousel from "./sections/CompanyCarousel"
import HeroSection from "./sections/HeroSection"
import StepSection from "./sections/StepSection"
import TemplateSection from "./sections/TemplateSection"

function Page() {
    return (
        <div>
            <HeroSection />
            <CompanyCarousel />
            <TemplateSection />
            <StepSection />
        </div>
    )
}

export default Page