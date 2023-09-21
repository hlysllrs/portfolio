function HeroSection() {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl lg:text-6xl">
                        <span className="bg-gradient-to-r from-green to-[#00B8D4] bg-clip-text text-transparent">
                            hello
                        </span>
                    </h1>
                    <p className="mb-6 text-base text-black sm:text-lg lg:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <button className="mr-4 w-full rounded-full bg-white px-6 py-3 text-black hover:bg-slate-200 sm:w-fit">
                        Hire Me
                    </button>
                    <button className="mt-3 w-full rounded-full border border-white bg-transparent px-6 py-3 hover:bg-slate-500 sm:w-fit">
                        Download Resume
                    </button>
                </div>
                <div className="col-span-5"></div>
            </div>
        </section>
    )
}

export default HeroSection
