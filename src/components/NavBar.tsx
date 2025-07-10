import { AlignJustify, CircleQuestionMark, Globe, ShoppingCart, Search, UserRound } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
    const NavItemsLeft = [Globe, CircleQuestionMark, UserRound];
    const NavItemsRight = [Search, ShoppingCart, AlignJustify];
    return (
        <section className="fixed top-0 transform -translate-x-1/2 left-1/2  h-fit container mx-auto w-full">
            <div className="flex flex-row gap-3 justify-between mx-20 mt-4">
                <NavRender Items={NavItemsLeft} />
                <Image
                    src="Mclaren-logo.svg"
                    alt="Mclaren-logo"
                    width={232}
                    height={35}
                />
                <NavRender Items={NavItemsRight} />
            </div>
        </section>
    );
}

function NavRender({ Items }: { Items: any[] }) {
    return (
        <div className="flex flex-row gap-3 justify-center">
            {Items.map((Item, index) => {
                return (
                    <div
                        key={index}
                        className="size-10 rounded-full bg-white/24 border-2 border-white/32 text-white flex items-center justify-center"
                    >
                        <Item size={20} />
                    </div>
                );
            })}
        </div>
    );
}
