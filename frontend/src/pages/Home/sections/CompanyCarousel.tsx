import AdobeSrc from "../../../assets/logo/adobe.png"
import AirbnbSrc from "../../../assets/logo/airbnb.png"
import FaceBookSrc from "../../../assets/logo/facebook.png"
import MicrosoftSrc from "../../../assets/logo/microsoft.png"
import NetflixSrc from "../../../assets/logo/netflix.png"
import NotionSrc from "../../../assets/logo/notion.png"
import OpenAiSrc from "../../../assets/logo/openai.png"
const srcArr = [AdobeSrc, AirbnbSrc, FaceBookSrc, MicrosoftSrc, NetflixSrc, NotionSrc, OpenAiSrc];

function CompanyCarousel() {
    return (
        <div className="relative w-11/12 mx-auto bg-white overflow-hidden font-rubik ">
            <h1 className="text-center text-4xl font-semibold mt-6 text-neutral-800">Get placed in world/India'a Leading companies</h1>
            <div className="carousel-track animate-carousel whitespace-nowrap flex items-center">
                {
                    srcArr.map((item, index) => {
                        return <div key={index} className="carousel-item w-[100px] flex justify-center items-center mt-2">
                            <img src={item} alt="" className="w-full" />
                        </div>
                    })
                }

                {
                    srcArr.map((item, index) => {
                        return <div key={index * 2} className="carousel-item w-[100px] flex justify-center items-center mt-2">
                            <img src={item} alt="" className="w-full" />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default CompanyCarousel