import Row from "./Row"
import { useState } from "react";
import ResumeTemplateSrc from "../../../assets/templates/template1.png"
const industriesArr = [
    {
        Icon: "⭐",
        title: 'Popular'
    },
    {
        Icon: "👷‍♂️",
        title: "Architecture & Engineering"
    },
    {
        Icon: "📲",
        title: "Technology"
    },
    {
        Icon: "📖",
        title: "Education & instruction"
    },
    {
        Icon: "📢",
        title: "Marketing, Advertising & Public Relations"
    },
]

function TemplateArea() {
    const [industries, setIndustries] = useState("popular");

    return (
        <div className="md:grid md:grid-cols-[275px_1fr]">
            <aside className="w-full md:w-[275px]">
                <h1 className="text-2xl md:text-3xl font-semibold py-2">Industries</h1>

                <select name="industries-dropdown" className="border py-3 px-1 rounded-md md:hidden w-full"
                    onChange={(e) => setIndustries(e.target.value)}
                >
                    {
                        industriesArr.map(({ Icon, title }) => {
                            return <option value={title} className="text-xl">
                                {Icon} {' '} {title}
                            </option>
                        })
                    }
                </select>

                <div className="mt-2 hidden md:block">
                    {
                        industriesArr.map(({ Icon, title }) => {
                            return <Row
                                Icon={Icon}
                                title={title}
                                industries={industries}
                                setIndustries={setIndustries}
                            />
                        })
                    }
                </div>
            </aside>

            <section className="md:pl-4 md:pt-0 pt-4">
                <h1 className="text-2xl md:text-3xl font-semibold py-2 capitalize">{industries}</h1>
                <div className="flex gap-4 flex-wrap pt-5">
                    {
                        [..."...."].map(() => <div>
                            <img src={ResumeTemplateSrc} alt=""
                                className="w-[150px] md:w-[250px] border rounded-md shadow-md"
                            />
                            <p className="text-center mt-1 text-[15px] md:text-[18px] font-[600]">Software Engineer</p>
                        </div>)
                    }

                </div>
            </section>
        </div>
    )
}

export default TemplateArea