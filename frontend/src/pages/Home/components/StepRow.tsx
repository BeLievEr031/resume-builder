import Button from '../../../components/Button';

interface Iprop {
    title: string;
    description: string;
    btnText: string;
    imgSrc: string;
}

function StepRow({ title, btnText, description, imgSrc }: Iprop) {
    return (
        <div className="md:flex md:gap-8 md:nth-[even]:flex-row-reverse">
            <div className="md:flex md:w-1/2">
                <img src={imgSrc} alt="" className="w-[500px]" />
            </div>
            <div className="pt-10 md:pt-40 md:w-1/2">
                <h1 className="text-2xl md:text-2xl font-[500]">{title}</h1>
                <p className="mt-4 text-[16px] md:text-[19px] font-[400] text-black/90">{description}</p>

                <Button variant="primary" classname="mt-5 md:mt-10">
                    {btnText}
                </Button>
            </div>
        </div>
    )
}

export default StepRow