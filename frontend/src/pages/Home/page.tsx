import CompanyCarousel from "./sections/CompanyCarousel"
import HeroSection from "./sections/HeroSection"
import StepSection from "./sections/StepSection"
// import TemplateCategorySection from "./sections/TemplateCategorySection"
import TemplateSection from "./sections/TemplateSection"

function Page() {
    return (
        <div>
            <HeroSection />
            <CompanyCarousel />
            <TemplateSection />
            <StepSection />
            {/* <TemplateCategorySection /> */}
        </div>
    )
}

export default Page