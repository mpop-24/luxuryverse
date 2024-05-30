const Banner = () => {
    return (
        <div className="text-center flex flex-col items-center justify-center relative pb-28 wrapper px-4">
        <span className="gradient-banner w-[22%] md:w-[30%]"></span>
            <p className="text-sm md:text-xl text-purpleAsh mt-20">Lorem ipsum dolor sit amet</p>
            <h1 className="text-5xl md:text-7xl my-4 dm-font"><span className="font-extrabold text-purpleAsh ">Largest</span> <span className="text-stroke">Lorem Ipsum</span></h1>
            <h1 className="text-5xl md:text-7xl text-stroke dm-font">Lorem</h1>
            <h1 className="text-5xl md:text-7xl font-extrabold text-purpleAsh my-4 dm-font">Lorem Ipsum</h1>
            <p className="text-sm md:text-xl text-purpleAsh">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus leo.</p>
        </div>
    );
};

export default Banner;