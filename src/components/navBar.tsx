"use client";

import Image from "next/image";
import Logo from "@/assets/img/unnamed.png";
import NavFuncItems from '@/components/NavFuncItems';
import HandleScroll from '@/utils/handleScroll';
import { arrayNavItemsProps } from "@/types/typeFuncItemsProps";

function NavBar() {
    const activeSection = HandleScroll();

    return (
        <nav className="flex flex-col sticky top-0 h-screen">
            <section className="flex items-center justify-center h-28 gap-5 bg-black">
                <Image
                    className='' 
                    src={Logo}
                    alt='My logo'
                    width={70}
                    height={70}
                />
                <h1 className="uppercase text-white">
                    Blog
                </h1>
            </section>
            <section className="flex flex-col items-start justify-between h-full py-9 w-13 bg-gray-600 overflow-y-auto">
                {arrayNavItemsProps.map((item, index) => (
                    <NavFuncItems
                        key={index}
                        Icon={item.Icon}
                        text={item.text}
                        onClick={item.onClick}
                        isActive={activeSection === item.text}
                    />
                ))}
            </section>
        </nav>
    );
}

export default NavBar;