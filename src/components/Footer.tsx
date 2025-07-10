export function Footer() {
    return (
        <>
            <div className="absolute -bottom-12 translate-y-1/2 ">
                <div className="flex flex-row gap-12 text-white pt-[5vh]">
                    <div className="flex flex-col gap-5">
                        <div className="font-inter font-bold text-3xl">
                            McLaren GTS
                        </div>
                        <div className="font-inter font-[800] text-xs bg-white outline-6 outline-white/32 rounded-[40px] backdrop-blur-md px-5 py-3 text-black w-fit leading-none">
                            ORDER NOW
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <FooterStats heading="3.2 Sec" subHeading="0-100 mph" />
                        <FooterStats heading="210 mph" subHeading="Top Speed" />
                        <FooterStats heading="630 HP" subHeading="Max Power" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-inter font-normal text-[14px]">
                            The McLaren GTS combines <br />
                            speed, luxury, and comfort <br />
                            for unmatched driving thrill.
                        </div>
                        <div className="font-inter font-extrabold text-[18px]">
                            $220,000
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function FooterStats({
    heading,
    subHeading,
}: {
    heading: string;
    subHeading: string;
}) {
    return (
        <div className="h-22 w-35 flex flex-col justify-center items-center bg-white/24 border-white/32 border-2 rounded-3xl backdrop-blur-md">
            <div className="font-inter font-bold text-[22px]">{heading}</div>
            <div className="font-inter font-semibold text-xs">{subHeading}</div>
        </div>
    );
}
