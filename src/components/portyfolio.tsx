import TitleComponent from "./TitleComponent";

function PortfolioSect() {
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

export default PortfolioSect;