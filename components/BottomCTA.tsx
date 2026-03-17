export default function BottomCTA ({title, description, children}: {
    title: string,
    description: string,
    children: React.ReactNode
}) {
    return (
        <section className="py-50">
            <div className="py-33 w-full bg-[#181818] border border-stc-400 flex flex-col gap-29">
                <div className="flex flex-col px-5">
                    <h1 className="font-lg uppercase text-grey-200">
                        {title}
                    </h1>
                    <p className="font-label text-grey-25">
                        {description}
                    </p>
                </div>
                {children}
            </div>
        </section>
    )
}