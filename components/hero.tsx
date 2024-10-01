import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
    return ( 
        <>
        <section className="hero relative pb-40 bg-white dark:bg-brand pt-20 md:pt-20 overflow-hidden px-2 md:px-4 lg:px-8 ">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 pb-10 md:pb-40">
                <div className="flex flex-col items-start xl:px-0 px-8">
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 relative text-left dark:text-zinc-100 text-zinc-700 max-w-4xl">
                        Welcome to Zap Hunt! 👋
                    </h1>
                    <h2 className="relative text-sm sm:text-xl text-zinc-500 dark:text-zinc-300 tracking-wide mb-8 text-left max-w-2xl antialiased leading-loose">
                        The place to launch and discover new tech products.
                    </h2>
                    <div className="flex relative sm:flex-row flex-col space-y-2 justify-center sm:space-y-0 sm:space-x-4 sm:justify-start mb-4 w-full">
                        <Button asChild variant="outline" size="sm">
                            <Link target="_blank" href="#">
                            Visit Website
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                            <Link target="_blank" href="#">
                            Visit Website
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="hidden xl:block w-full h-full relative">
                    <div className="flex flex-row items-end justify-end mb-2 w-full pr-4">
                        <div className="-mr-4  relative group">
                            <img src="https://github.com/denycelestino.png" alt="image" width="100" height="100" className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500" />
                        </div>
                        <div className="-mr-4  relative group">
                            <img src="https://github.com/eufrasiojoao.png" alt="image" width="100" height="100" className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500" />
                        </div>
                        <div className="-mr-4  relative group">
                            <img src="https://github.com/waplaf.png" alt="image" width="100" height="100" className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Hero;