"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import NavBar from "@/components/NavBar";

type ColorKey = "orange" | "blue" | "yellow";

export default function Home() {
    const colors: ColorKey[] = ["orange", "blue", "yellow"];
    const [backColor, setBackColor] = useState<ColorKey>("orange");

    return (
        <>
            <NavBar />
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="my-20 mx-30">
                    <div className="relative w-165 h-47 flex justify-center ">
                        <Image
                            src={`Mclaren-${backColor}.svg`}
                            alt={`Mclaren-${backColor}`}
                            fill
                            className="object-contain"
                        />
                        <div className="absolute -top-16 -z-50 font-anton text-[165px] text-white  h-fit w-fit leading-none">
                            MCLAREN
                        </div>
                        <Platform color={backColor} backColor={backColor} />
                        <ChangeColor
                            colors={colors}
                            setBackColor={setBackColor}
                            backColor={backColor}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

function Platform({
    color,
    backColor,
}: {
    color: ColorKey;
    backColor: ColorKey;
}) {
    return (
        <>
            <div className=" absolute -bottom-5 w-216 h-25 rounded-[50%] bg-gradient-to-b from-white/0 to-white/100 p-1 -z-60">
                <div className={`w-full h-full rounded-[50%] bg-${color}-2 `} />
                <div className=" absolute bottom-5 left-[52%] -translate-x-1/2 blur-md w-150 h-7 rounded-[50%] bg-black " />
            </div>
        </>
    );
}

function ChangeColor({
    colors,
    setBackColor,
    backColor,
}: {
    colors: ColorKey[];
    setBackColor: (color: ColorKey) => void;
    backColor: ColorKey;
}) {
    const colorMap = {
        orange: {
            body: "bg-orange-1",
            surface: "bg-orange-2",
        },
        blue: {
            body: "bg-blue-1",
            surface: "bg-blue-2",
        },
        yellow: {
            body: "bg-yellow-1",
            surface: "bg-yellow-2",
        },
    } as const;

    useEffect(() => {
        const body: string = colorMap[backColor].body;
        document.body.classList.add(body);
        return () => {
            document.body.classList.remove(body);
        };
    }, [backColor]);
    return (
        <>
            <div className="absolute -bottom-9 flex flex-row gap-2 p-2 bg-white w-fit h-fit rounded-full outline-white/32 outline-[6px]">
                {colors.map((color, index) => {
                    return (
                        <div
                            key={index}
                            className={`h-[20px] w-[20px] rounded-full bg-${color}-2 hover:cursor-pointer flex items-center justify-center`}
                            onClick={() => {
                                setBackColor(color);
                            }}
                        >
                            {color === backColor && (
                                <Check
                                    size={12}
                                    className="text-white"
                                    strokeWidth={3}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
            <div
                className={`absolute  blur-[100px] transform -translate-y-1/2 top-1/2 border-2 border-white w-200 h-120 rounded-[50%] bg-${backColor}-2  -z-100`}
            />
        </>
    );
}

function Footer() {
    return (
        <>
            <div className="flex flex-row gap-12 text-white">
                <div className="flex flex-col gap-5">
                    <div className="font-inter font-bold text-3xl">
                        McLaren GTS
                    </div>
                    <div className="font-inter font-semibold text-xs">
                        Order Now
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
