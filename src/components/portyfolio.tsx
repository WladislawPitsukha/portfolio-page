//TODO: Refactor this file like networks.tsx
//TODO: add new style with animations
//TODO: add my projects / links / information(description and link)

import TitleComponent from "./TitleComponent";

export default function PortSect() {
    return(
        <section id="Portfolio" className="flex flex-col items-start justify-center gap-20 p-10 mt-10">
            <TitleComponent
                title="My Recent Portfolio"
                description="Elevate your brand to new heights with my porttolio expertise"
                position="start"
            />
            <article className="">

            </article>
        </section>
    )
}