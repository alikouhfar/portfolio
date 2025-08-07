export default function HeroHorizonVisual() {
    return (
        <div className="relative h-60 w-full z-[19] mt-8">
            <div
                className="absolute bottom-0 left-1/2 z-0 h-[400px] w-[1200px] -translate-x-1/2 transform overflow-hidden"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 30%, black 70%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%, black 70%, transparent)',
                }}
            >
                <div className="animate-move-horizon-line absolute bottom-[167px] left-1/2 h-[111px] w-[787px] -translate-x-1/2 transform overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,#5506ba_0%,rgba(10,10,10,0)_100%)] blur-[57px]" />
                <div className="absolute right-[-432px] bottom-[-753px] left-[-454px] h-[955px] rounded-[100%] bg-gradient-to-b from-black to-transparent dark:from-white" />
                <div className="bg-white-1 absolute right-[-510px] bottom-[-759px] left-[-532px] aspect-[2.346820809248555/1] h-[956px] rounded-[100%] shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d] dark:bg-[#0a0a0a]"
                     style={{
                         boxShadow: "rgb(255, 255, 255) 0px 2px 20.246px inset, rgba(255, 255, 255, 0.494) 0px -10px 50.246px 1px"
                     }} />
            </div>
        </div>
    )
}
