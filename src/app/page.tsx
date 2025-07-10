"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import NavBar from "@/components/NavBar";
import { motion } from "motion/react";
import { Footer } from "@/components/Footer";

type ColorKey = "orange" | "blue" | "yellow";


export default function Home() {
    const colors: ColorKey[] = ["orange", "blue", "yellow"];
    const [backColor, setBackColor] = useState<ColorKey>("orange");

    return (
        <>
            <NavBar />
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="w-full flex justify-center relative">
                    <div className="m-20 px-25 ">
                        <div className="relative w-215 h-48 flex justify-center transition-all duration-500  ">
                            <div className=" overflow-hidden w-full flex justify-center">
                                <motion.div
                                    key={backColor}
                                    initial={{ x: 700, y: 0 }}
                                    animate={{
                                        x: 0,
                                        y: 0,
                                    }}
                                    exit={{ x: -700, y: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        type: "spring",
                                        stiffness: 44,
                                        damping: 10,
                                    }}
                                >
                                    <Image
                                        src={`Mclaren-${backColor}.svg`}
                                        alt={`Mclaren-${backColor}`}
                                        width={658}
                                        height={188}
                                    />
                                </motion.div>
                            </div>
                            <div className="absolute -top-16 -z-50 font-anton text-[165px] text-white  h-fit w-fit leading-none  overflow-hidden">
                                <motion.div
                                    key={backColor}
                                    initial={{
                                        y: 150,
                                        opacity: 1,
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                    }}
                                    exit={{
                                        y: 150,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        type: "spring",
                                        stiffness: 44,
                                        damping: 10,
                                    }}
                                >
                                    MCLAREN
                                </motion.div>
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

