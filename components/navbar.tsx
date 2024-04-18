import Link from "next/link"
import {Button} from "@/components/ui/button"
import {SheetTrigger, SheetContent, Sheet} from "@/components/ui/sheet"
import Image from "next/image";
import RetroButton from "@/components/retrobtn";

export default function Navbar() {
    return (
        <div className="flex w-full flex-col">
            <header className="h-24 w-full flex items-center justify-center gap-4 px-4 md:px-6">
                <div className="w-full h-full flex items-center justify-between max-w-7xl">

                    <div className="flex md:flex-row items-center md:gap-5 md:text-sm lg:gap-6">
                        <h2 className="text-2xl md:text-4xl">Leo🔺</h2>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button className="shrink-0 md:hidden" size="icon" variant="outline">
                                <MenuIcon className="h-5 w-5"/>
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <nav className="grid gap-6 text-lg font-medium">
                                <span className="text-lg">Leo🔺</span>
                                <Link className="text-muted-foreground hover:text-foreground" href="#about">
                                    About
                                </Link>
                                <Link className="text-muted-foreground hover:text-foreground" href="#gallery">
                                    Gallery
                                </Link>
                                <Link className="text-muted-foreground hover:text-foreground"
                                      href="https://miner.leoavax.xyz/">
                                    $LEO Miner
                                </Link>
                                <Link className="text-muted-foreground hover:text-foreground" href="#">
                                    Wiki
                                </Link>
                            </nav>
                            <div className="absolute bottom-4">
                                <div className="flex gap-6 flex-row items-center mb-6">
                                    <Link className="hover:scale-125  transition-all ease-in-out"
                                          href="#">
                                        <Image alt="Dexscreener" src={"dexscreener.svg"} width={20} height={20}/>
                                    </Link>
                                    <Link className="hover:scale-125  transition-all ease-in-out"
                                          href="#">
                                        <Image alt="X (Twitter)" src={"x.svg"} width={20} height={20}/>
                                    </Link>
                                    <Link className="hover:scale-125  transition-all ease-in-out"
                                          href="#">
                                        <Image alt="Discord" src={"discord.svg"} width={22}
                                               height={22}/>
                                    </Link>
                                </div>
                                <RetroButton
                                    openNewTab={true}
                                    href="https://traderjoexyz.com/avalanche/trade?outputCurrency=0x04f388E30BfD03f357AE061ec5680c7e4ac4cF09"
                                    label="
                                 Buy $LEO" size="lg" buttonType="primary"/>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="hidden md:flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-6">
                        <Link className="text-foreground transition-colors hover:text-foreground" href="#about">
                            About
                        </Link>
                        <Link className="text-muted-foreground transition-colors hover:text-foreground" href="#gallery">
                            Gallery
                        </Link>
                        <Link className="text-muted-foreground transition-colors hover:text-foreground"
                              href="https://miner.leoavax.xyz/">
                            $LEO Miner
                        </Link>
                        <Link className="text-muted-foreground transition-colors hover:text-foreground" href="#">
                            Wiki
                        </Link>
                        <div className="flex gap-4 flex-row items-center">
                            <Link className="hover:scale-125  transition-all ease-in-out"
                                  href="#">
                                <Image alt="Dexscreener" src={"dexscreener.svg"} width={18} height={18}/>
                            </Link>
                            <Link className="hover:scale-125  transition-all ease-in-out"
                                  href="#">
                                <Image alt="X (Twitter)" src={"x.svg"} width={18} height={18}/>
                            </Link>
                            <Link className="hover:scale-125  transition-all ease-in-out"
                                  href="#">
                                <Image alt="Discord" src={"discord.svg"} width={20}
                                       height={20}/>
                            </Link>
                        </div>
                        <RetroButton
                            openNewTab={true}
                            href="https://traderjoexyz.com/avalanche/trade?outputCurrency=0x04f388E30BfD03f357AE061ec5680c7e4ac4cF09"
                            label="
                    Buy $LEO" size="sm" buttonType="primary"/>
                    </div>
                </div>

            </header>
        </div>
    )
}

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
        </svg>
    )
}
