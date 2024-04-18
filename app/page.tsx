import Image from "next/image";
import RetroButton from "@/components/retrobtn";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Status} from "@/components/status";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Home() {
    return (
        <>
            <main className="">

                <div className="w-full flex items-center justify-center">
                    <div className="w-full h-screen flex items-center relative">
                        <div className="mario-bg flex justify-center items-start">
                            <div className="w-full max-w-7xl flex items-center relative flex-col">
                                <Navbar/>

                                <Status/>

                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <section className="w-full flex items-center justify-center bg-[#EF4444] px-6 md:px-0" id="about">
                <div className="w-full h-full max-w-7xl relative my-24 text-white">
                    <div className="flex flex-col md:grid md:grid-cols-2 grid-rows-1 gap-14">
                        <div>
                            <h2 className="text-2xl mb-8">About Us</h2>
                            <div className="flex gap-4 flex-col text-justify mb-16">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                                    eget
                                    dolor.
                                    Aenean massa.
                                </p>
                                <p>
                                    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                                    vulputate
                                    eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                </p>
                            </div>
                            <RetroButton
                                openNewTab={true}
                                href="/about"
                                label="
                                Know more" size="lg" buttonType="secondary"/>
                        </div>
                        <div className="overflow-hidden relative aspect-square">
                            <Image src="/leo-astronaut.jpg" alt="LEO Astronaut" fill/>
                        </div>
                    </div>
                </div>

            </section>
            <section className="w-full h-[85dvh] flex items-center justify-center px-6 md:px-0" id="gallery">
                <div className="w-full max-w-7xl flex flex-col py-8">

                    <h2 className="text-2xl mb-4">Gallery</h2>
                    <Carousel>
                        <CarouselContent className="">
                            <CarouselItem
                                className="flex aspect-square text-center items-center justify-center p-6 basis-1/2 md:basis-1/4 flex-col">
                                <Image src="/leo-1.jpg" alt="Leo" width={300} height={300}
                                       className="border-8 border-black"/>
                                <p>&quot;Running from Skeletons&quot;</p>
                            </CarouselItem>
                            <CarouselItem
                                className="flex aspect-square text-center items-center justify-center p-6 basis-1/2 md:basis-1/4 flex-col gap-2">
                                <Image src="/leo-2.jpg" alt="Leo" width={300} height={300}
                                       className="border-8 border-black"/>
                                <p>&quot;Riding to the Avalanche&quot;</p>
                            </CarouselItem>
                            <CarouselItem
                                className="flex aspect-square text-center items-center justify-center p-6 basis-1/2 md:basis-1/4 flex-col gap-2">
                                <Image src="/leo-3.jpg" alt="Leo" width={300} height={300}
                                       className="border-8 border-black"/>
                                <p>&quot;Playing the LEO Bros&quot;</p>
                            </CarouselItem>
                            <CarouselItem
                                className="flex aspect-square text-center items-center justify-center p-6 basis-1/2 md:basis-1/4 flex-col gap-2">
                                <Image src="/leo-4.jpg" alt="Leo" width={300} height={300}
                                       className="border-8 border-black"/>
                                <p>&quot;Being pet by friends&quot;</p>
                            </CarouselItem>
                            <CarouselItem
                                className="flex aspect-square text-center items-center justify-center p-6 basis-1/2 md:basis-1/4 flex-col gap-2">
                                <Image src="/leo-5.jpg" alt="Leo" width={300} height={300}
                                       className="border-8 border-black"/>
                                <p>&quot;Playing with my friend Kimbo&quot;</p>
                            </CarouselItem>
                            <CarouselItem
                                className="flex aspect-square text-center items-center justify-center p-6 basis-1/2 md:basis-1/4 flex-col gap-2">
                                <Image src="/leo-6.jpg" alt="Leo" width={300} height={300}
                                       className="border-8 border-black"/>
                                <p>&quot;Being pet by friends&quot;</p>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </div>
            </section>

            <footer className="w-full flex items-center justify-center bg-[#37474F] ">
                <div className="w-full max-w-7xl rounded-none m-4 text-white">
                    <div
                        className="w-full mx-auto max-w-screen-xl px-6 py-8 md:flex md:items-center md:justify-between">
                        <span className="text-sm sm:text-center">© 2024 $LEO™. All Rights Reserved.</span>
                        <ul className="flex flex-wrap items-center mt-3 text-sm dark:text-gray-400 sm:mt-0 gap-6">
                            <Link className="hover:scale-125  transition-all ease-in-out"
                                  href="#">
                                <Image alt="Dexscreener" src={"dexscreener.svg"} width={20} height={20}/>
                            </Link>
                            <Link className="hover:scale-125  transition-all ease-in-out"
                                  href="#">
                                <Image alt="X (Twitter)" src={"x.svg"} width={20} height={20}/>
                            </Link>
                            <Link className="hover:scale-125 transition-all ease-in-out"
                                  href="#">
                                <Image alt="Discord" src={"discord.svg"} width={22}
                                       height={22}/>
                            </Link>
                            <Link className="hover:scale-125  transition-all ease-in-out"
                                  href="#">
                                Buy $LEO
                            </Link>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    );
}
